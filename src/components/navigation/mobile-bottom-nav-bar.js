import React, {useState} from "react";
import {Badge, BottomNavigation, BottomNavigationAction} from "@material-ui/core";
import {ChatBubble, Group, MoreHoriz} from "@material-ui/icons";

const MobileBottomNavBar = () => {
    const [active, setActive] = useState("chat");

    const handleTabChange = (event, value) => {
        setActive(value);
    }

    return (
        <BottomNavigation value={active} onChange={handleTabChange} showLabels={true}>
            <BottomNavigationAction
                value="chat"
                label="Chat"
                selected={active === "chat"}
                icon={
                    <Badge badgeContent={9} max={99} variant="dot">
                        <ChatBubble/>
                    </Badge>
                }
            />
            <BottomNavigationAction
                value="groups"
                label="Groups"
                selected={active === "groups"}
                icon={
                    <Badge badgeContent={9} max={99} variant="dot">
                        <Group/>
                    </Badge>
                }
            />
            <BottomNavigationAction
                value="friends"
                label="Friends"
                selected={active === "friends"}
                icon={
                    <Badge badgeContent={9} max={99} variant="dot">
                        <ChatBubble/>
                    </Badge>
                }
            />
            <BottomNavigationAction
                selected={active === "more"}
                icon={
                    <MoreHoriz/>
                }
                value="more"
                label="More"/>
        </BottomNavigation>
    )
}

export default MobileBottomNavBar;