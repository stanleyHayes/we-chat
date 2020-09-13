import React, {useEffect} from "react";
import {Grid} from "@material-ui/core";
import io from "socket.io-client";
import {SERVER_URL} from "../../constants/constants";
import ChatroomList from "../../components/shared/chatroom-list";
import {connect} from "react-redux";
import ChatDetail from "../../components/shared/chat-detail";
import NoActiveRoom from "../../components/shared/no-active-room";

let socket;
const ChatPage = ({loading, rooms, activeRoom}) => {

    useEffect(() => {
        socket = io(SERVER_URL);

        if (socket) {
            socket.on("connect", () => {
                console.log(`Socket connect on client`);
            });
        }
    }, []);


    return (
        <div>
            <Grid container={true} justify="space-between">
                <Grid item={true} md={3}>
                    <ChatroomList chats={rooms}/>
                </Grid>
                <Grid item={true} md={9}>
                    {
                        activeRoom ? (
                            <ChatDetail/>
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
        activeRoom: state.rooms.activeRoom
    }
}

export default connect(mapStateToProps)(ChatPage);