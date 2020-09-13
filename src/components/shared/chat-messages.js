import React from "react";
import {Container, Typography} from "@material-ui/core";
import MessageListItem from "./message-list-item";

const ChatMessages = ({messages}) => {
    return (
        <Container>
            {
                (!messages.length) ? (
                    <div>
                        <Typography variant="h6" align="center">Be first to send a message</Typography>
                    </div>
                ) : (
                    messages.map(message => {
                        return (
                            <div key={message._id}>
                                <MessageListItem message={message}/>
                            </div>
                        )
                    })
                )
            }
        </Container>
    )
}

export default ChatMessages;