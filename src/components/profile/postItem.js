import React from 'react';
import Box from "@mui/material/Box";
import styles from '../../styles/Profile.module.css'
import LikeIcon from "./profile icons/likeIcon";
import CommentIcon from "./profile icons/commentIcon";
import {Link} from 'react-router-dom'

function PostItem({image,likes,comments,id}) {

    return (
        <>
            <Box className={styles.postItem}>
                <Link to={`/p/${id}`}>
                    <div  className={styles.overlay}>
                        <LikeIcon likes={likes}/>
                        <CommentIcon comments={comments}/>
                    </div>
                    <img src={image} alt="post item"/>
                </Link>
            </Box>
        </>);
}

export default PostItem;