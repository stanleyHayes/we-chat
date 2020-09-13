import React from "react";
import {Container, Divider, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

const NoActiveRoom = () => {

    const useStyles = makeStyles(theme => {
        return {
            image: {
                width: 400,
                height: 400
            },
            imageContainer: {
                textAlign: "center"
            },
            container: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                height: "100vh",

            },
            root: {
                backgroundColor: "#f0f2f5"
            },
            title: {
                fontWeight: "normal",
                color: "#333333"
            },
            subtitle: {
                color: "#555555",
                fontWeight: "normal"
            },
            instruction: {
                color: "#777777",
                fontWeight: "normal"
            }
        }
    });

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container className={classes.container}>
                <div className={classes.imageContainer}>
                    <img className={classes.image} alt="message icon"
                         src={`${process.env.PUBLIC_URL}/images/message.svg`}/>
                </div>

                <Typography className={classes.title} variant="h1" align="center">WeChat</Typography>
                <Typography className={classes.subtitle} variant="h3" align="center">Chat Responsible</Typography>

                <Divider variant="fullWidth" />
                <Typography className={classes.instruction} variant="h6" align="center">
                    No chat selected!!!Select a chat from the list and enjoy your conversation
                </Typography>
            </Container>
        </div>
    )
}

export default NoActiveRoom;