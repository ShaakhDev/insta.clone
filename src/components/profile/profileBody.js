import React from 'react';
import Box from "@mui/material/Box";
import styles from '../../styles/Profile.module.css'
import {profileMuiStyles} from "./customMuiStyles";
import {Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import PostsIcon from "./profile icons/postsIcon";
import UserPosts from "./userPosts";
import {CameraAltOutlined} from "@mui/icons-material";
import {useSelector} from "react-redux";

function ProfileBody() {
    const {profile}=useSelector(state=>state?.profile);

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
                {!profile?.items?.length&&(
                    <div className={styles.noPosts}>
                        <CameraAltOutlined fontSize="large"/>
                        <Typography variant="h2">
                            No Posts Yet
                        </Typography>
                    </div>
                )}
                <UserPosts/>
            </Box>
        </>
    );
}

export default ProfileBody;