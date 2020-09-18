import React from "react";
import {Avatar, Card, CardHeader, Divider} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

const ContactListItem = ({contact}) => {

    const {name, avatar, about} = contact;
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
            }
        }
    });
    const classes = useStyles();

    return (
        <Card className={classes.card} variant="elevation" elevation={0}>
            <CardHeader
                avatar={<Avatar className={classes.avatar} src={avatar}/>}
                title={name}
                subheader={about || 'No about'}
            />
            <Divider variant="fullWidth"/>
        </Card>
    )
}

export default ContactListItem;