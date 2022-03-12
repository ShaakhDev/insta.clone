import React from 'react';
import Box from "@mui/material/Box";
import styles from '../../styles/Profile.module.css'
import {profileMuiStyles} from "./customMuiStyles";
import {Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import PostsIcon from "./postsIcon";
import Posts from "./Posts";

function ProfileBody(props) {
    return (
        <>
            <Box className={styles.body}>
                <div className={styles.divider}>
                    <div className={styles.bodyLine}/>
                </div>
                <Stack  {...profileMuiStyles.bodyStack}>
                    <PostsIcon/>
                    <Typography variant='h5'>
                        POSTS
                    </Typography>
                </Stack>
                <Posts/>
            </Box>
        </>
    );
}

export default ProfileBody;