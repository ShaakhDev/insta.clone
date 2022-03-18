import React from 'react';
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CardHeader from '@mui/material/CardHeader';
import {Link} from 'react-router-dom'

function Header({avatar, user}) {
    return (
        <>
            <CardHeader
                avatar={
                    <Link style={{color: "#333"}} to={user}>
                        <Avatar>
                            <img style={{width: '100%', cursor: "pointer"}} src={avatar} alt="avatar"/>
                        </Avatar>
                    </Link>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreHorizIcon/>
                    </IconButton>
                }
                title={
                    <Link style={{color: "#333"}} to={user}>
                        <b onClick={() => console.log('clicked')}>{user}</b>
                    </Link>
                }

            />
        </>
    );
}

export default Header;