import Card from '@mui/material/Card'
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import CardHeader from '@mui/material/CardHeader';
import IconButton from "@mui/material/IconButton";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styles from "../../styles/CurrentPost.module.css";
import { muiStyles } from './customMuiStyles'
import { Link } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useCalculateDate, useCalculatePostedTime } from "../../hooks/useCalculateTime";
import Actions from "../posts/card/actions";
import AddComment from "../posts/card/addComment";
import { useSelector } from "react-redux";
import Comment from "./comment";
import MoreActionsModal from "../modals/moreActionsModal";
import React, { useCallback, useState } from "react";

function CurrentPostCard({ time, likes, caption, user: postUser, comments, image, id }) {
    const postedTime = useCalculatePostedTime(time)
    const postedDate = useCalculateDate(time)
    const token = localStorage.getItem('access_token')
    const isMyPost = false
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(true)
    }

    const CommentsBox = useCallback(
        () => {
            return (
                <>
                    {
                        comments.map(comment => (
                            <Comment
                                time={comment.timestamp}
                                text={comment.text}
                                user={comment.user}
                                key={comment.id} />
                        ))
                    }
                </>
            )
        },
        [comments],
    );


    return (
        <>
            {/* <MoreActionsModal imgUrl id={id} isMyPost={isMyPost} open={openModal} setOpen={setOpenModal} /> */}
            <div className={styles.home}>
                <div className={styles.box}>
                    <Card {...muiStyles.card}>
                        <Box {...muiStyles.box1}>
                            <CardMedia
                                component="img"
                                height="598rem"
                                image={image}
                                alt="post"
                            />
                        </Box>
                        <Box {...muiStyles.box2}>
                            <CardHeader
                                {...muiStyles.header}
                                avatar={
                                    <Link to={`/${postUser?.username}`}>
                                        <Avatar
                                            {...muiStyles.avatar}
                                            alt={postUser?.username}
                                            src={postUser?.avatar_url}
                                        />
                                    </Link>
                                }
                                action={
                                    <IconButton onClick={handleOpenModal} aria-label="settings">
                                        <MoreHorizIcon fontSize='large' />
                                    </IconButton>
                                }
                                title={
                                    <Link style={{ color: "#333" }} to={`/${postUser?.username}`}>
                                        <b>{postUser?.username}</b>
                                    </Link>
                                }
                            />

                            <Box className={styles.comments}>
                                {caption && <Comment time={time} text={caption} user={postUser} />}
                                {comments?.length ? <CommentsBox /> : null}

                            </Box>
                            <CardContent className={styles.content}>
                                <Actions postId={id} />
                                {likes > 0 ? (
                                    <Typography variant="body1">
                                        <b>{likes} likes</b>
                                    </Typography>
                                ) : null}
                                {
                                    <Typography
                                        title={postedDate}
                                        className={styles.time}
                                        variant="body1"
                                        color='info'
                                    >
                                        {postedTime}
                                    </Typography>
                                }
                            </CardContent>
                            {token ? <AddComment postId={id} /> : (
                                <Typography className={styles.noComment}>
                                    <Link to="/accounts/login">
                                        Log in
                                    </Link>
                                    &nbsp; to like or comment.
                                </Typography>
                            )}
                        </Box>

                    </Card>
                </div>
            </div>

        </>
    );
}

export default CurrentPostCard;