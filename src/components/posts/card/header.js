import React, { useState } from 'react';
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CardHeader from '@mui/material/CardHeader';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { Skeleton } from "@mui/material";
import MoreActionsModal from "../../modals/moreActionsModal";

function Header({ avatar, user: postUser, id, imgUrl }) {
    // const {user} = useSelector(state=>state?.user)
    // const {loading} = useSelector(state => state?.post)
    // const isMyPost = user?.username === postUser
    const isMyPost = false
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(true)
    }

    return (
        <>
            {/* <MoreActionsModal imgUrl id={id} isMyPost={isMyPost} open={openModal} setOpen={setOpenModal} /> */}
            <CardHeader
                sx={{ padding: "1.2rem 1.5rem" }}
                avatar={
                    false ? (
                        <Skeleton animation="wave" variant="circular" width={40} height={40} />
                    ) : (
                        <Link style={{ color: "#333" }} to={postUser}>
                            <Avatar>
                                <img style={{ width: '100%', cursor: "pointer" }} src={avatar} alt="avatar" />
                            </Avatar>
                        </Link>
                    )
                }
                action={
                    false ? null : (
                        <IconButton onClick={handleOpenModal}>
                            <MoreHorizIcon fontSize="large" />
                        </IconButton>
                    )
                }
                title={
                    false ? (
                        <Skeleton
                            animation="wave"
                            height={10}
                            width="80%"
                            style={{ marginBottom: 6 }}
                        />
                    ) : (
                        <Link style={{ color: "#333" }} to={postUser}>
                            <b onClick={() => console.log('clicked')}>{postUser}</b>
                        </Link>
                    )
                }

            />
        </>
    );
}

export default Header;