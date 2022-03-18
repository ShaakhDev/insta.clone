import React from 'react';
import Box from "@mui/material/Box";
import styles from '../../styles/Profile.module.css'
import LikeIcon from "./profile icons/likeIcon";
import CommentIcon from "./profile icons/commentIcon";

function PostItem({image,likes,comments,}) {
    return (
        <>
            <Box className={styles.postItem}>
                <a href="#">
                    <div  className={styles.overlay}>
                        <LikeIcon likes={likes}/>
                        <CommentIcon comments={comments}/>
                    </div>
                    <img src={image} alt="post item"/>
                </a>
            </Box>
        </>);
}

export default PostItem;