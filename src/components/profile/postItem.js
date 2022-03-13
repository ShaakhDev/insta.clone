import React from 'react';
import Box from "@mui/material/Box";
import styles from '../../styles/Profile.module.css'
import LikeIcon from "./profile icons/likeIcon";
import CommentIcon from "./profile icons/commentIcon";

function PostItem(props) {
    return (
        <>
            <Box className={styles.postItem}>
                <a href="#">
                    <div className={styles.overlay}>
                        <LikeIcon/>
                        <CommentIcon/>
                    </div>
                    <img src={process.env.PUBLIC_URL + '/avatar.webp'} alt="post item"/>
                </a>
            </Box>
        </>);
}

export default PostItem;