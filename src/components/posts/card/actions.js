import React, { useState, useEffect } from 'react';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '../../postIcons/favoriteIcon';
import CommentIcon from '../../postIcons/commentIcon';
import ShareIcon from '../../postIcons/shareIcon';
import { muiStyles } from '../customMuiStyles';
import { Link } from 'react-router-dom';
import { BrowserView, MobileView } from 'react-device-detect';

function Actions({
    postId,
    liked_users,
    onClickToShareIcon,
    onClickToLikeIcon,
    onClickToCommentIcon,
}) {
    const user_id = localStorage.getItem('user_id');
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        if (
            liked_users !== null &&
            liked_users?.some((id) => id === +user_id)
        ) {
            setIsLiked(true);
        }
    }, [liked_users, user_id]);

    useEffect(() => {
        onClickToLikeIcon(isLiked);
    }, [isLiked]);

    return (
        <>
            <CardActions sx={{ paddingBottom: '0' }} disableSpacing>
                <IconButton {...muiStyles.actions}>
                    <FavoriteIcon
                        setIsLiked={setIsLiked}
                        isLiked={isLiked}
                        likedUsers={liked_users}
                        postId={postId}
                    />
                </IconButton>
                <BrowserView>
                    <IconButton
                        onClick={onClickToCommentIcon}
                        {...muiStyles.actions}
                    >
                        <CommentIcon />
                    </IconButton>
                </BrowserView>
                <MobileView>
                    <IconButton {...muiStyles.actions}>
                        <Link to={`/post/${postId}`}>
                            <CommentIcon />
                        </Link>
                    </IconButton>
                </MobileView>
                <IconButton onClick={onClickToShareIcon} {...muiStyles.actions}>
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </>
    );
}

export default Actions;
