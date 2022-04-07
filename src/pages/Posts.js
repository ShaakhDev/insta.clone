import React, {useEffect, memo, useState} from 'react';
import styles from "../styles/Home.module.css";
import PostCard from "../components/posts/card/postCard";
import {useDispatch, useSelector} from "react-redux";
import {getAllPosts} from "../store/actions/postActions";
import {postActions} from "../store/reducers/postReducer";

function Posts() {
    const {posts,error} = useSelector(state => state?.post);
    const dispatch = useDispatch();

    useEffect(() => {
        if(posts.length!==0){
            postActions.setPosts(posts);
        }else{
            dispatch(getAllPosts());
        }
    }, [dispatch,posts]);


if(error>499){
    return (
        <h1>
            Serverda xatolik yuz berdi!!!
        </h1>
    )
}
    return (
        <>
            <main className={styles.home}>
                <div className={styles.box}>
                    {posts.map(post=>(
                        <PostCard postData={post} key={post.id}/>
                    ))}
                </div>
            </main>
        </>
    );
}

export default memo(Posts);