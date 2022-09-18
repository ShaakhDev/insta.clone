import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CardHeader from '@mui/material/CardHeader';
import { Link } from 'react-router-dom';
import { Skeleton } from '@mui/material';
import MoreActionsModal from '../../modals/moreActionsModal';

function Header({ avatar, user: postUser, id, caption }) {
    const user = localStorage.getItem('user');
    const isMyPost = user === postUser?.username;
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(true);
    };
    console.log(avatar);
    return (
        <>
            <MoreActionsModal
                caption={caption}
                user={postUser}
                id={id}
                isMyPost={isMyPost}
                open={openModal}
                setOpen={setOpenModal}
            />

            <CardHeader
                sx={{ padding: '1.2rem 1.5rem' }}
                avatar={
                    false ? (
                        <Skeleton
                            animation="wave"
                            variant="circular"
                            width={40}
                            height={40}
                        />
                    ) : (
                        <Link style={{ color: '#333' }} to={postUser?.username}>
                            <Avatar
                                alt={`${postUser?.username}'s avatar`}
                                src={avatar || '/avatar.webp'}
                            />
                        </Link>
                    )
                }
                action={
                    false ? null : (
                        <IconButton onClick={handleOpenModal}>
                            <MoreVertIcon fontSize="large" />
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
                        <Link style={{ color: '#333' }} to={postUser?.username}>
                            <b>{postUser?.username}</b>
                        </Link>
                    )
                }
            />
        </>
    );
}

export default Header;
