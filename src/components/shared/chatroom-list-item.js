import React, {useContext} from "react";
import {Card, CardHeader, Divider, Typography, Avatar, Grid} from "@material-ui/core";
import {Check, CheckCircle, DoneAll} from "@material-ui/icons";
import {makeStyles} from "@material-ui/styles";
import {connect, useDispatch} from "react-redux";
import {SocketContext} from "../../App";
import {setActiveRoom} from "../../redux/chatroom/chatroom-action-creators";

const ChatroomListItem = ({chat, token, currentUser}) => {

    const {lastMessage, avatar, name} = chat;
    const {text, createdAt, status} = lastMessage;

    const socket = useContext(SocketContext);
    const dispatch = useDispatch();

    const handleChatSelected = () => {
        socket.emit("JOIN_ROOM", {roomId: chat.name, currentUser, token}, () => {
            console.log(`Room with id ${chat.name} joined by ${currentUser.name}`);
        });
        dispatch(setActiveRoom(chat._id));
    }

    const useStyles = makeStyles(theme => {
        return {
            avatar: {
                borderWidth: 5,
                borderColor: "#ccc",
                borderRadius: '50%'
            },
            card: {
                backgroundColor: "#ffffff",
                paddingLeft: 8,
                paddingRight: 8,
                cursor: "pointer",
                transition: "all 300ms ease-in-out",
                '&:hover': {
                    backgroundColor: "#f0f2fe"
                }
            },
            read: {
                color :"green"
            },
            delivered: {
                color: "#333333"
            },
            sent: {
                color: "#777777"
            }
        }
    });
    const classes = useStyles();

    const getStatusIcon = status => {
        switch (status) {
            case 'SENT':
                return <Check className={classes.sent}/>;
            case 'DELIVERED':
                return <DoneAll className={classes.delivered}/>;
            case 'READ':
                return <CheckCircle className={classes.read}/>;
            default:
                return <Check/>;
        }
    }
    return (
        <Card onClick={handleChatSelected} className={classes.card} square={true} variant="elevation" elevation={0}>
            <CardHeader
                avatar={<Avatar className={classes.avatar} src={avatar}/>}
                title={name}
                subheader={
                    <Grid container={true} justify="space-between" alignItems="center" spacing={2}>
                        <Grid item={true} xs={9}>
                            <Typography noWrap={true} display="block" variant="body1">{text}</Typography>
                        </Grid>
                        <Grid item={true} xs={3}>
                            <Typography variant="caption">{new Date(createdAt).toDateString()}</Typography>
                        </Grid>
                    </Grid>
                }
                action={getStatusIcon(status)}
            />
            <Divider variant="fullWidth"/>
        </Card>
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.auth.currentUser,
        token: state.auth.token
    }
}

export default connect(mapStateToProps)(ChatroomListItem);