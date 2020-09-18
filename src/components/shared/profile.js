import React from "react";
import {CardContent, Card, Typography} from "@material-ui/core";

const Profile = ({user}) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h6" align="center">Profile</Typography>
            </CardContent>
        </Card>
    )
}

export default Profile;