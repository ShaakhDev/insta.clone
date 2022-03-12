import React from 'react';
import Box from "@mui/material/Box";
import styles from '../../styles/Profile.module.css'
import PostItem from "./postItem";


function Posts(props) {
    return (
        <>
            <section className={styles.posts}>
                <PostItem/>
                <PostItem/>
                <PostItem/>
                <PostItem/>
                <PostItem/>
                <PostItem/>
                <PostItem/>
            </section>
        </>
    );
}

export default Posts;