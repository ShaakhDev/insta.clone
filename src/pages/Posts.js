import React, {useEffect,memo} from 'react';
import styles from "../styles/Home.module.css";
import PostCard from "../components/posts/card/postCard";
import {useDispatch, useSelector} from "react-redux";
import {getAllPosts} from "../store/actions/postActions";
import {postActions} from "../store/reducers/postReducer";
const POSTS = []

function Posts() {

    const {posts,error} = useSelector(state => state?.post);
    const dispatch = useDispatch();

    useEffect(() => {
        if(POSTS.length!==0){
            postActions.setPosts(POSTS)
        }else{
            dispatch(getAllPosts())
            if(posts)
                POSTS.push((posts));
        }
    }, [dispatch,posts]);


if(error){
    return (
        <h1>
            {error}
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