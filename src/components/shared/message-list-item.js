import React from "react";
import {Card, CardContent, Typography} from "@material-ui/core";
import {connect} from "react-redux";
import {makeStyles} from "@material-ui/styles";

const MessageListItem = ({message, currentUser}) => {

    const {text, status, sender} = message;

    const useStyles = makeStyles(theme => {
        return {
            owner: {
                backgroundColor: "darkblue",
                color: "white",
                float: 'left',
                clear: 'both'
            },
            other: {
                backgroundColor: "darkgreen",
                color: "white",
                float: 'right',
                clear: 'both'
            },
            card: {
                borderRadius: 24,
                display: "inline-block",
                marginTop: 4,
                marginBottom: 4
            }
        }
    });

    const classes = useStyles();
    const isMessageOwner = currentUser.username === sender.username;

    return (
        <Card variant="outlined" className={isMessageOwner ? `${classes.owner} ${classes.card}` : `${classes.other} ${classes.card}`}>
            <CardContent>
                <Typography variant="body1">{text}</Typography>
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