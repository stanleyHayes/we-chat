import React from "react";
import {Card, Grid, IconButton, Avatar, Typography, CardContent} from "@material-ui/core";
import {Close, Delete, Info} from "@material-ui/icons";
import {makeStyles} from "@material-ui/styles";

const ChatDetailHeader = () => {

    const useStyles = makeStyles(theme => {
        return {
            card: {
                backgroundColor: "white",
                cursor: "pointer",
                transition: "all 300 ease-in-out",
                '&:hover': {
                    backgroundColor: "#f0f2f5"
                }
            },
            avatar: {
                width: 50,
                height: 50,
                borderRadius: '50%'
            }
        }
    });

    const classes = useStyles();

    return (
        <Card className={classes.card} variant="outlined">
            <CardContent>
                <Grid container={true} justify="space-between" direction="row">
                    <Grid xs={10} item={true} container={true} spacing={5}>
                        <Grid item={true}>
                            <Avatar className={classes.avatar} src={"/images/message.svg"}/>
                        </Grid>
                        <Grid item={true}>
                            <Typography variant="h6">Userma'atre Setepenre</Typography>
                            <Typography variant="body1">Online</Typography>
                        </Grid>
                    </Grid>
                    <Grid xs={2} item={true}>
                        <IconButton>
                            <Info/>
                        </IconButton>
                        <IconButton>
                            <Close/>
                        </IconButton>
                        <IconButton>
                            <Delete/>
                        </IconButton>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default ChatDetailHeader;