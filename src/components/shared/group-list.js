import React from "react";
import {Container, Divider, Grid, TextField, Typography} from "@material-ui/core";
import GroupListItem from "./group-list-item";

const GroupChatList = ({groups}) => {
    return (
        <Grid container={true} spacing={2}>
            <Grid item={true}  xs={12}>
                <Container>
                    <TextField
                        variant="outlined"
                        fullWidth={true}
                        margin="dense"
                        placeholder="Search group"
                    />
                </Container>
            </Grid>
            <Grid item={true} xs={12}>
                <Divider variant="fullWidth" />
            </Grid>
            {
                (!groups.length) ? (
                    <Grid item={true} xs={12}>
                        <Typography variant="h6" align="center">No Group Chats</Typography>
                    </Grid>
                ) : (
                    groups.map((chat, index) => {
                        return (
                            <Grid item={true} xs={12} key={index}>
                                <GroupListItem
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

export default GroupChatList;