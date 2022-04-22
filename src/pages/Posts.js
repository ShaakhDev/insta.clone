import React, {useEffect, memo, useState} from 'react';
import styles from "../styles/Home.module.css";
import PostCard from "../components/posts/card/postCard";
import {useDispatch, useSelector} from "react-redux";
import {getAllPosts} from "../store/actions/postActions";
import {postActions} from "../store/reducers/postReducer";
import SkeletonCard from "../components/posts/card/skeletonCard";


function Posts() {
    const {posts,error,loading} = useSelector(state => state?.post);
    const dispatch = useDispatch();





    useEffect(() => {
        if(posts.length!==0){
            postActions.setPosts(posts);
        }else{
            dispatch(getAllPosts());
        }
    }, [dispatch,posts]);




const AllPosts = ()=>{
    return(
        <>
            {posts?.map(post=>(
                <PostCard postData={post} key={post.id}/>
            ))}
        </>
    )
}
    return (
        <>
            <main className={styles.home}>
                <div className={styles.box}>

                    {loading?<SkeletonCard/> :<AllPosts/>}

                </div>
            </main>
        </>
    );
}

export default memo(Posts);