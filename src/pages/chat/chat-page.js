import React, {useContext, useEffect} from "react";
import {Container, Divider, Grid, Typography} from "@material-ui/core";
import ChatroomList from "../../components/shared/chatroom-list";
import {connect, useDispatch} from "react-redux";
import ChatDetail from "../../components/shared/chat-detail";
import NoActiveRoom from "../../components/shared/no-active-room";
import {SocketContext} from "../../App";
import {TextField} from "@material-ui/core";
import ScrollArea from "react-scrollbar";
import {addMessages, setChatMessages} from "../../redux/messages/messages-action-creators";
import SideNavbarHeader from "../../components/shared/side-navbar-header";
import {makeStyles} from "@material-ui/styles";
import {Redirect, useHistory} from "react-router-dom";
import {TOKEN_KEY} from "../../constants/constants";
import {getLoggedInUser} from "../../redux/auth/auth-action-creator";

const ChatPage = ({loading, rooms, activeRoom, currentUser}) => {

    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        let token = localStorage.getItem(TOKEN_KEY);
        if(!token){
            return <Redirect to="/auth/login"/>
        }
        dispatch(getLoggedInUser(history, token));
    }, [dispatch, history]);

    const socket = useContext(SocketContext);

    useEffect(() => {
        socket.on('ROOM_MESSAGES', (messages) => {
            console.log(messages);
            // dispatch(setChatMessages(messages));
        });

        socket.on('USER_ROOMS', (rooms) => {
            console.log(rooms);
        });

        socket.on('NEW_MESSAGE_TO_CLIENT', (message) => {
            // dispatch(addMessages(message));
            console.log('called new message to client')
            console.log('message', message);
        });

        return () => {
            socket.emit('LEAVE_ROOM', {currentUser}, () => {
                console.log(`${currentUser.name} has left the room`);
            });
        }
    }, [currentUser, dispatch, socket]);

    const useStyles = makeStyles(theme => {
        return {
            root: {

            },
            users: {
                backgroundColor: ""
            }
        }
    });

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container={true}>
                <Grid item={true} md={3} lg={4} className={classes.users}>
                    <Grid container={true} direction="column" justify="flex-start" spacing={2}>
                        <Grid item={true}>
                            <SideNavbarHeader user={currentUser}/>
                        </Grid>
                        <Grid item={true}>
                            <Divider variant="fullWidth"/>
                        </Grid>
                        <Grid item={true}>
                            <Container>
                                <TextField
                                    variant="outlined"
                                    fullWidth={true}
                                    margin="dense"
                                    placeholder="Search or start new chat"
                                />
                            </Container>
                        </Grid>
                        <Grid item={true}>
                            <Divider variant="fullWidth"/>
                        </Grid>
                        <Grid item={true}>
                            {
                                (!rooms.length) ? (
                                    <Typography variant="h6" align="center">Start a conversation</Typography>
                                ): (
                                    <ScrollArea>
                                        <ChatroomList
                                            chats={rooms}
                                        />
                                    </ScrollArea>
                                )
                            }
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item={true} md={9} lg={8}>
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