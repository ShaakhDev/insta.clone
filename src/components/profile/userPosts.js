import React from 'react';
import Box from "@mui/material/Box";
import styles from '../../styles/Profile.module.css'
import PostItem from "./postItem";
import {useSelector} from "react-redux";
import {CameraAltOutlined} from "@mui/icons-material";
import Typography from "@mui/material/Typography";


function UserPosts() {
    const {profile}=useSelector(state=>state?.profile);

    return (
        <>
            <section className={styles.posts}>
                {profile?.items?.map(post=>{
                    const {id,image_url,likes,comments}=post;
                  return  <PostItem key={id} id={id} comments={comments?.length} likes={likes} image={image_url} />
                })}

            </section>
        </>
    );
}

export default UserPosts;