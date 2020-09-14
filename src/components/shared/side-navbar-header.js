import React from "react";
import {CardContent, Card, Grid, Avatar, Typography, IconButton, Container} from "@material-ui/core";
import {Chat, Person, PersonAdd} from "@material-ui/icons";
import {makeStyles} from "@material-ui/styles";

const SideNavbarHeader = ({user}) => {

    const {avatar, name} = user;

    const useStyles = makeStyles(theme => {
        return {
            avatar: {
                width: 50,
                height: 50
            },
            icon: {
                fontSize: 24
            },
            container: {
                paddingTop: 16
            }
        }
    });

    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Grid container={true} justify="space-between" alignItems="center">
                <Grid item={true}>
                    {
                        (!avatar) ? (
                            <Avatar className={classes.avatar}>
                                <Typography variant="h6" align="center">{name[0][0]}</Typography>
                            </Avatar>
                        ) : (
                            <Avatar className={classes.avatar} src={avatar}/>
                        )
                    }
                </Grid>
                <Grid item={true}>
                    <IconButton>
                        <Person className={classes.icon}/>
                    </IconButton>

                    <IconButton>
                        <PersonAdd className={classes.icon}/>
                    </IconButton>

                    <IconButton>
                        <Chat className={classes.icon}/>
                    </IconButton>
                </Grid>
            </Grid>
        </Container>
    )
}

export default SideNavbarHeader;