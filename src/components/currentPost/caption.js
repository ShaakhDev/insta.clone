import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styles from '../../styles/CurrentPost.module.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useDeleteCommentMutation } from '../../rtk/postsApi';
import DeleteCommentModal from '../modals/deleteCommentModal';
import {
    useCalculateCommentedTime,
    useCalculateDate
} from "../../hooks/useCalculateTime";
import {
    Avatar,
    IconButton,
    Typography
} from "@mui/material";

function Caption({
    user,
    time,
    text,
    id,
    currentUser
}) {
    const commentedTime = useCalculateCommentedTime(time)
    const commentedDate = useCalculateDate(time)
    const isMyComment = user?.username === currentUser?.username
    const [openModal, setOpenModal] = useState(false)
    const [deleteComment, { isSuccess }] = useDeleteCommentMutation();

    const handleDeleteComment = () => deleteComment(id);

    useEffect(() => {
        if (isSuccess) {
            setTimeout(() => {
                setOpenModal(false)
            }, 3000)
        }
        return () => {
            setOpenModal(false)
        }
    }, [isSuccess]);


    return (
        <div className={styles.commentWrapper}>
            <DeleteCommentModal
                open={openModal}
                setOpen={setOpenModal}
                handleDeleteComment={handleDeleteComment}

            />
            <Link to={`/${user?.username}`}>
                <Avatar
                    alt={user?.username}
                    src={user?.avatar_url}
                    sx={{ marginRight: "2rem", width: 32, height: 32 }}
                />
            </Link>
            <div className={styles.comment}>
                <Link style={{ color: "#333" }} to={`/${user?.username}`}>
                    <b>{user?.username}</b>
                </Link>
                <Typography
                    className={styles.caption}
                    variant="caption">
                    {text}
                </Typography>
                <Typography
                    title={commentedDate}
                    className={styles.time}
                    variant="body1"
                    color='info'>
                    {commentedTime}
                    {
                        isMyComment && (
                            <IconButton
                                disableRipple={true}
                                onClick={() => setOpenModal(true)}
                            >
                                <MoreHorizIcon
                                    fontSize='medium'
                                />
                            </IconButton>)
                    }
                </Typography>

            </div>
        </div>
    );
}

export default Caption;