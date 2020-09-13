import React from "react";
import {Card, CardContent, Grid, IconButton, TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {AttachFile, SendRounded} from "@material-ui/icons";

const ChatDetailInput = () => {

    const useStyles = makeStyles(theme => {
        return {
            input: {
                flexGrow: 1
            }
        }
    });

    const classes = useStyles();

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
                        <TextField
                            variant="outlined"
                            fullWidth={true}
                            margin="dense"
                            placeholder="Type a message"
                        />
                    </Grid>
                    <Grid item={true}>
                        <IconButton>
                            <SendRounded/>
                        </IconButton>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default ChatDetailInput;