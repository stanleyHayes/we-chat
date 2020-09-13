import React from "react";
import {Card, CardHeader, Divider, Typography, Avatar, Grid} from "@material-ui/core";
import {Check, CheckCircle, DoneAll} from "@material-ui/icons";
import {makeStyles} from "@material-ui/styles";

const ChatroomListItem = ({chat}) => {

    const {lastMessage, avatar, name} = chat;
    const {text, createdAt, status} = lastMessage;
    const handleChatSelected = () => {

    }
    const getStatusIcon = status => {
        switch (status) {
            case 'SENT':
                return <Check/>;
            case 'DELIVERED':
                return <DoneAll/>;
            case 'READ':
                return <CheckCircle/>;
            default:
                return <Check/>;
        }
    }
    const useStyles = makeStyles(theme => {
        return {
            avatar: {},
            card: {
                backgroundColor: "#f8f8f8",
                paddingLeft: 8,
                paddingRight: 8,
                transition: "all 300ms ease-in-out",
                '&:hover': {
                    backgroundColor: "#eeeeee"
                }
            }
        }
    });
    const classes = useStyles();

    return (
        <Card onClick={handleChatSelected} className={classes.card} square={true} variant="elevation" elevation={0}>
            <CardHeader
                avatar={<Avatar className={classes.avatar} src={avatar}/>}
                title={name}
                subheader={
                    <Grid container={true} justify="space-between">
                        <Grid item={true}>
                            <Typography variant="body1">{text}</Typography>
                        </Grid>
                        <Grid item={true}>
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

export default ChatroomListItem;