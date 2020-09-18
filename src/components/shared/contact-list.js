import React from "react";
import {Container, Divider, Grid, TextField, Typography} from "@material-ui/core";
import ContactListItem from "./contact-list-item";

const ContactList = ({contacts}) => {
    return (
        <Grid container={true} spacing={2}>
            <Grid item={true}  xs={12}>
                <Container>
                    <TextField
                        variant="outlined"
                        fullWidth={true}
                        margin="dense"
                        placeholder="Search contact"
                    />
                </Container>
            </Grid>
            <Grid item={true} xs={12}>
                <Divider variant="fullWidth" />
            </Grid>
            {
                (contacts.length) ? (
                    contacts.map((contact, index) => {
                        return (
                            <Grid key={index} item={true} xs={12}>
                                <ContactListItem contact={contact}/>
                            </Grid>
                        )
                    })
                ) : (
                    <Grid item={true} xs={12}>
                        <Typography variant="h6" align="center">No Contacts</Typography>
                    </Grid>
                )
            }
        </Grid>
    )
}

export default ContactList;