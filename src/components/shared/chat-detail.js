import React from "react";
import {makeStyles} from "@material-ui/styles";
import ChatDetailHeader from "./chat-detail-header";
import ChatDetailInput from "./chat-detail-input";
import ChatMessages from "./chat-messages";
import {connect} from "react-redux";
import ScrollToBottom from "react-scroll-to-bottom";

const ChatDetail = ({room, messages, loading}) => {

    const {name} = room;

    const useStyles = makeStyles(theme => {
        return {
            root: {
                minHeight: "100vh",
                flexDirection: "column",
                justifyContent: "space-between",
                display: "flex",
                paddingTop: 120,
                paddingBottom: 120,
                position: 'relative',
                backgroundColor: "#f0f2f5"
            },
            messages: {
                flexGrow: 1,
                backgroundColor: "#f0f2f5"
            },
            header: {
                position: 'fixed',
                top: 0,
                zIndex: 1,
                right: 0,
                left: '33.5%'
            },
            input: {
                position: 'fixed',
                bottom: 0,
                zIndex: 1,
                right: 0,
                left: '33.5%'
            }
        }
    });

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <ChatDetailHeader/>
            </div>
            <div className={classes.messages}>
                <ScrollToBottom>
                    <ChatMessages messages={messages}/>
                </ScrollToBottom>
            </div>
            <div className={classes.input}>
                <ChatDetailInput/>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        messages: state.messages.messages,
        loading: state.messages.loading
    }
}

export default connect(mapStateToProps)(ChatDetail);