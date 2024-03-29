import React, { useCallback, useState, useEffect } from 'react';
import {
    Card,
    CardMedia,
    Box,
    Avatar,
    CardHeader,
    IconButton,
    CardContent,
    Typography,
} from '@mui/material';
import {
    useCalculateDate,
    useCalculatePostedTime,
} from '../../hooks/useCalculateTime';
import styles from '../../styles/CurrentPost.module.css';
import { muiStyles } from './customMuiStyles';
import { Link } from 'react-router-dom';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useCopyOnClick } from '../../hooks/useCopyOnClick';
import Actions from '../posts/card/actions';
import AddComment from '../posts/card/addComment';
import Caption from './caption';
import MoreActionsModal from '../modals/moreActionsModal';
import Popup from '../popup';
import { MobileView, BrowserView } from 'react-device-detect';
import BackButton from '../backButton';

function CurrentPostCard({
    time,
    likes: like,
    caption,
    user: postUser,
    comments,
    image,
    id,
    liked_users,
    currentUser,
    moreStyle,
}) {
    const postedTime = useCalculatePostedTime(time);

    const postedDate = useCalculateDate(time);
    const token = localStorage.getItem('access_token');
    const isMyPost = localStorage.getItem('user') === postUser?.username;
    const [openModal, setOpenModal] = useState(false);
    const [isCopied, handleCopyClick] = useCopyOnClick(id);
    const [likes, setLikes] = useState(like);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleOpenModal = () => setOpenModal(true);

    const NoComments = () => {
        return (
            <div className={styles.noComments}>
                <h1>No comments yet.</h1>
                <p>Start the conversation.</p>
            </div>
        );
    };

    const CommentsBox = useCallback(
        () => (
            <>
                {comments.map((comment) => (
                    <Caption
                        currentUser={currentUser}
                        time={comment.timestamp}
                        text={comment.text}
                        user={comment.user}
                        id={comment.id}
                        key={comment.id}
                    />
                ))}
            </>
        ),
        [comments, currentUser]
    );

    const onClickToLikeIcon = (isLiked) => {
        if (isLiked) setLikes((likes) => likes + 1);
        else setLikes((likes) => likes - 1);
    };

    return (
        <>
            {/* This section only render on DESKTOP */}
            <BrowserView>
                {isCopied && <Popup text="Link copied to clipboard" />}
                <MoreActionsModal
                    user={postUser}
                    caption={caption}
                    imgUrl={image}
                    id={id}
                    isMyPost={isMyPost}
                    open={openModal}
                    setOpen={setOpenModal}
                />

                <Card className={styles.card}>
                    <Box {...muiStyles.box1}>
                        <CardMedia
                            component="img"
                            height="100%"
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
                                <IconButton
                                    onClick={handleOpenModal}
                                    aria-label="settings"
                                >
                                    <MoreVertIcon fontSize="large" />
                                </IconButton>
                            }
                            title={
                                <Link
                                    style={{ color: '#333' }}
                                    to={`/${postUser?.username}`}
                                >
                                    <b>{postUser?.username}</b>
                                </Link>
                            }
                            subheader={
                                <Typography
                                    title={postedDate}
                                    variant="h5"
                                    {...muiStyles.subheader}
                                >
                                    {caption}
                                </Typography>
                            }
                        />

                        <Box className={styles.comments}>
                            {comments?.length ? (
                                <CommentsBox />
                            ) : (
                                <NoComments />
                            )}
                        </Box>
                        <CardContent className={styles.content}>
                            <Actions
                                onClickToShareIcon={handleCopyClick}
                                postId={id}
                                liked_users={liked_users}
                                onClickToLikeIcon={(isLiked) =>
                                    onClickToLikeIcon(isLiked)
                                }
                            />
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
                                    color="info"
                                >
                                    {postedTime}
                                </Typography>
                            }
                        </CardContent>
                        {token ? (
                            <AddComment postId={id} />
                        ) : (
                            <Typography className={styles.noComment}>
                                <Link to="/login">Log in</Link>
                                &nbsp; to like or comment.
                            </Typography>
                        )}
                    </Box>
                </Card>
                {/* </div>
                </div> */}
            </BrowserView>

            {/*This section will  only render on MOBILE  */}
            <MobileView>
                <BackButton />
                <Card {...muiStyles.card}>
                    <Box {...muiStyles.commentsBox}>
                        <Box {...muiStyles.box2}>
                            {token ? (
                                <AddComment
                                    currentUser={currentUser}
                                    postId={id}
                                />
                            ) : (
                                <Typography className={styles.noComment}>
                                    <Link to="/login">Log in</Link>
                                    &nbsp; to write a comment.
                                </Typography>
                            )}
                        </Box>
                        {caption && (
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
                                title={
                                    <Link
                                        style={{
                                            color: '#333',
                                            fontSize: '1.7rem',
                                        }}
                                        to={`/${postUser?.username}`}
                                    >
                                        <b>{postUser?.username}</b>
                                    </Link>
                                }
                                subheader={
                                    <Typography
                                        title={postedDate}
                                        {...muiStyles.subheader}
                                    >
                                        {caption}
                                    </Typography>
                                }
                            />
                        )}
                        <Box className={styles.comments}>
                            {comments?.length ? (
                                <CommentsBox />
                            ) : (
                                <NoComments />
                            )}
                        </Box>
                    </Box>
                </Card>
            </MobileView>
        </>
    );
}

export default CurrentPostCard;
