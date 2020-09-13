import React from "react";
import {Grid} from "@material-ui/core";
import ChatroomListItem from "./chatroom-list-item";

const ChatroomList = ({chats}) => {
    return (
        <Grid container={true}>
            {chats.map((chat, index) => {
                return (
                    <Grid item={true} xs={12} key={index}>
                        <ChatroomListItem
                            chat={chat}
                        />
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default ChatroomList;