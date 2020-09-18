import React, {useContext, useEffect, useState} from "react";
import {Divider, Grid} from "@material-ui/core";
import ChatroomList from "../../components/shared/chatroom-list";
import {connect, useDispatch} from "react-redux";
import ChatDetail from "../../components/shared/chat-detail";
import NoActiveRoom from "../../components/shared/no-active-room";
import {SocketContext} from "../../App";
import {addMessages, setChatMessages} from "../../redux/messages/messages-action-creators";
import SideNavbarHeader from "../../components/shared/side-navbar-header";
import {makeStyles} from "@material-ui/styles";
import {Redirect, useHistory} from "react-router-dom";
import {TOKEN_KEY} from "../../constants/constants";
import {getLoggedInUser} from "../../redux/auth/auth-action-creator";
import {setRooms} from "../../redux/chatroom/chatroom-action-creators";
import GroupChatList from "../../components/shared/group-list";
import ContactList from "../../components/shared/contact-list";
import Profile from "../../components/shared/profile";

const ChatPage = ({loading, rooms, activeRoom, currentUser}) => {

    const history = useHistory();
    const dispatch = useDispatch();

    const socket = useContext(SocketContext);

    useEffect(() => {
        let token = localStorage.getItem(TOKEN_KEY);
        if (!token) {
            return <Redirect to="/auth/login"/>
        }
        dispatch(getLoggedInUser(history, token));
    }, [dispatch, history]);

    useEffect(() => {

        socket.on('USER_ROOMS', (rooms) => {
            dispatch(setRooms(rooms));
            console.log(rooms);
        });


        return () => {
            socket.emit('LEAVE_ROOM', {currentUser}, () => {
                console.log(`${currentUser.name} has left the room`);
            });
        }
    }, [currentUser, dispatch, socket]);

    useEffect(() => {

        socket.on('NEW_MESSAGE_TO_CLIENT', (message) => {
            // dispatch(addMessages(message));
            console.log('called new message to client')
            console.log('message', message);
        });

        socket.on('ROOM_MESSAGES', (messages) => {
            console.log(messages);
            // dispatch(setChatMessages(messages));
        });

    }, [socket]);

    const useStyles = makeStyles(theme => {
        return {
            root: {},
            users: {
                backgroundColor: ""
            }
        }
    });

    const classes = useStyles();

    const [tabIndex, setSelectedTabIndex] = useState(0);

    if (!currentUser && !loading) {
        return <Redirect to="/auth/login"/>
    }

    const handleSelectedTab = index => {
        setSelectedTabIndex(index);
    }

    const getTabDetail = index => {
        switch (index) {
            case 0:
                return <ChatroomList chats={rooms}/>
            case 1:
                return <GroupChatList groups={[]}/>
            case 2:
                return <ContactList contacts={[]}/>
            case 3:
                return <Profile />
            default:
                return <ChatroomList chats={rooms}/>
        }
    }
    return (
        <div className={classes.root}>
            <Grid container={true}>
                <Grid item={true} md={5} lg={5} className={classes.users}>
                    <Grid container={true} direction="column" justify="flex-start" spacing={2}>
                        <Grid item={true}>
                            <SideNavbarHeader
                                index={tabIndex}
                                handleSelectedTab={handleSelectedTab}
                            />
                        </Grid>
                        <Grid item={true}>
                            <Divider variant="fullWidth"/>
                        </Grid>
                        <Grid item={true}>
                            {
                                <div>
                                    {getTabDetail(tabIndex)}
                                </div>
                            }
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item={true} md={7} lg={7}>
                    {
                        activeRoom ? (
                            <ChatDetail room={activeRoom}/>
                        ) : (
                            <NoActiveRoom/>
                        )
                    }
                </Grid>
            </Grid>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loading: state.rooms.loading,
        rooms: state.rooms.rooms,
        activeRoom: state.rooms.activeRoom,
        currentUser: state.auth.currentUser
    }
}

export default connect(mapStateToProps)(ChatPage);