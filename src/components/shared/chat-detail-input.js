import React, {useContext, useState} from "react";
import {Card, CardContent, Grid, IconButton, TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {AttachFile, SendRounded} from "@material-ui/icons";
import {SocketContext} from "../../App";
import {connect} from "react-redux";


const ChatDetailInput = ({currentUser, room}) => {

    const useStyles = makeStyles(theme => {
        return {
            input: {
                flexGrow: 1
            }
        }
    });

    const classes = useStyles();

    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleMessageChange = event => {
        setMessage(event.target.value);
    }

    const socket = useContext(SocketContext);
    const handleMessageSend = event => {
        event.preventDefault();

        if(!message){
            setError("Message required");
            return ;
        }else {
            setError("");
        }
        socket.emit('NEW_MESSAGE', {message, currentUser, room}, () => {
            setMessage("")
        });
    }

    return (
        <Card variant="outlined" square={true}>
            <CardContent>
                <Grid container={true} spacing={2} alignItems="center">
                    <Grid item={true}>
                        <IconButton>
                            <AttachFile/>
                        </IconButton>
                    </Grid>
                    <Grid item={true} className={classes.input}>
                        <form onSubmit={handleMessageSend}>
                            <TextField
                                onChange={handleMessageChange}
                                value={message}
                                variant="outlined"
                                fullWidth={true}
                                margin="dense"
                                placeholder="Type a message"
                                required={true}
                                name="message"
                                error={Boolean(error)}
                                helperText={error}
                            />
                        </form>
                    </Grid>
                    <Grid item={true}>
                        <IconButton onClick={handleMessageSend}>
                            <SendRounded/>
                        </IconButton>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}
const mapStateToProps = state => {
    return {
        currentUser: state.auth.currentUser
    }
}


export default connect(mapStateToProps) (ChatDetailInput);