import React from "react";
import {Paper, Tabs, Tab} from "@material-ui/core";
import {Chat, Contacts, Group, VerifiedUser} from "@material-ui/icons";
import {makeStyles} from "@material-ui/styles";

const SideNavbarHeader = ({handleSelectedTab, index}) => {

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
        <Paper className={classes.container} variant="elevation" elevation={1}>
            <Tabs value={index} onChange={(event, index) => handleSelectedTab(index)} variant="fullWidth">
                <Tab
                    value={0}
                    selected={index === 0}
                    icon={<Chat className={classes.icon}/>}
                    label="Private"
                />

                <Tab
                    value={1}
                    selected={index === 1}
                    icon={<Group className={classes.icon}/>}
                    label="Group"
                />

                <Tab
                    value={2}
                    selected={index === 2}
                    icon={<Contacts className={classes.icon}/>}
                    label="Contacts"
                />

                <Tab
                    value={3}
                    selected={index === 3}
                    icon={<VerifiedUser className={classes.icon}/>}
                    label="Profile"
                />
            </Tabs>
        </Paper>
    )
}

export default SideNavbarHeader;