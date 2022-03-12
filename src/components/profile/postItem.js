import React from 'react';
import Box from "@mui/material/Box";
import styles from '../../styles/Profile.module.css'

function PostItem(props) {
    return (
        <>
            <Box className={styles.postItem} >
                <a href="#">
                    <img src={process.env.PUBLIC_URL + '/avatar.webp'} alt="post item"/>
                </a>
            </Box>
        </>
    );
}

export default PostItem;