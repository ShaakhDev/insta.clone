import React from 'react';
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CardHeader from '@mui/material/CardHeader';
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux';
import {Skeleton} from "@mui/material";

function Header({avatar, user}) {
    const {loading} = useSelector(state => state?.post)
    return (
        <>
            <CardHeader
                avatar={
                    loading ? (
                        <Skeleton animation="wave" variant="circular" width={40} height={40}/>
                    ) : (
                        <Link style={{color: "#333"}} to={user}>
                            <Avatar>
                                <img style={{width: '100%', cursor: "pointer"}} src={avatar} alt="avatar"/>
                            </Avatar>
                        </Link>
                    )
                }
                action={
                    loading ? null : (
                        <IconButton aria-label="settings">
                            <MoreHorizIcon/>
                        </IconButton>
                    )
                }
                title={
                    loading ? (
                        <Skeleton
                            animation="wave"
                            height={10}
                            width="80%"
                            style={{marginBottom: 6}}
                        />
                    ) : (
                        <Link style={{color: "#333"}} to={user}>
                            <b onClick={() => console.log('clicked')}>{user}</b>
                        </Link>
                    )
                }

            />
        </>
    );
}

export default Header;