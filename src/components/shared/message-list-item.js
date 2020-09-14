import React from "react";
import {Card, CardContent, Grid, Typography} from "@material-ui/core";
import {connect} from "react-redux";
import {makeStyles} from "@material-ui/styles";
import {Check, CheckCircle, DoneAll} from "@material-ui/icons";

const MessageListItem = ({message, currentUser}) => {

    const {text, status, sender, createdAt} = message;

    const useStyles = makeStyles(theme => {
        return {
            owner: {
                backgroundColor: "blue",
                color: "white",
                float: 'left',
                clear: 'both'
            },
            other: {
                backgroundColor: "green",
                color: "white",
                float: 'right',
                clear: 'both'
            },
            card: {
                borderRadius: 24,
                display: "inline-block",
                marginTop: 4,
                marginBottom: 4
            },
            read: {
                color :"white"
            },
            delivered: {
                color: "white"
            },
            sent: {
                color: "white"
            }
        }
    });

    const classes = useStyles();
    const isMessageOwner = currentUser.username === sender.username;

    const getStatusIcon = status => {
        switch (status) {
            case 'SENT':
                return <Check className={classes.sent}/>;
            case 'DELIVERED':
                return <DoneAll className={classes.delivered}/>;
            case 'READ':
                return <CheckCircle className={classes.read}/>;
            default:
                return <Check className={classes.sent}/>;
        }
    }

    return (
        <Card
            variant="outlined" className={isMessageOwner ? `${classes.owner} ${classes.card}` : `${classes.other} ${classes.card}`}>
            <CardContent>
                <Grid container={true} spacing={1}>
                    <Grid item={true}>
                        <Typography variant="body1">{text}</Typography>
                    </Grid>
                    <Grid item={true}>
                        <Typography variant="caption">{new Date(createdAt).toDateString()}</Typography>
                    </Grid>
                    <Grid item={true}>
                        {getStatusIcon(status)}
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
export default connect(mapStateToProps)(MessageListItem);