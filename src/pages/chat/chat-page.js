import React, {useContext, useEffect} from "react";
import {Container, Divider, Grid} from "@material-ui/core";
import ChatroomList from "../../components/shared/chatroom-list";
import {connect} from "react-redux";
import ChatDetail from "../../components/shared/chat-detail";
import NoActiveRoom from "../../components/shared/no-active-room";
import {SocketContext} from "../../App";
import {TextField} from "@material-ui/core";
import ScrollArea from "react-scrollbar";

const ChatPage = ({loading, rooms, activeRoom}) => {

    const socket = useContext(SocketContext);

    useEffect(() => {
        socket.on('ROOM_MESSAGES', ({room, messages}) => {
            console.log(room, messages)
        });
    }, [socket]);


    return (
        <div>
            <Grid container={true} justify="space-between">
                <Grid item={true} md={3} lg={4} >
                    <Grid container={true}  direction="column" spacing={2}>
                        <Grid item={true}>

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
                            <ScrollArea>
                                <ChatroomList
                                    chats={rooms}
                                />
                            </ScrollArea>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item={true} md={9} lg={8}>
                    {
                        activeRoom ? (
                            <ChatDetail  room={activeRoom}/>
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
    }
}

export default connect(mapStateToProps)(ChatPage);