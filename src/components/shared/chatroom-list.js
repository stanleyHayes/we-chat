import React from "react";
import {Container, Divider, Grid, TextField, Typography} from "@material-ui/core";
import ChatroomListItem from "./chatroom-list-item";

const ChatroomList = ({chats}) => {
    return (
        <Grid container={true} spacing={2}>
            <Grid item={true}  xs={12}>
                <Container>
                    <TextField
                        variant="outlined"
                        fullWidth={true}
                        margin="dense"
                        placeholder="Search chat"
                    />
                </Container>
            </Grid>
            <Grid item={true} xs={12}>
                <Divider variant="fullWidth" />
            </Grid>
            {
                (!chats.length) ? (
                    <Grid item={true} xs={12}>
                        <Typography variant="h6" align="center">No Chats</Typography>
                    </Grid>
                ) : (
                    chats.map((chat, index) => {
                        return (
                            <Grid item={true} xs={12} key={index}>
                                <ChatroomListItem
                                    chat={chat}
                                />
                            </Grid>
                        )
                    })
                )
            }
        </Grid>
    )
}

export default ChatroomList;