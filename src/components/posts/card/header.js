import React from 'react';
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CardHeader from '@mui/material/CardHeader';

function Header({avatar, user}) {
    return (
        <>
            <CardHeader
                avatar={
                    <Avatar>
                        <img style={{width: '100%',cursor:"pointer"}} src={avatar} alt="avatar"/>
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreHorizIcon/>
                    </IconButton>
                }
                title={user}

            />
        </>
    );
}

export default Header;