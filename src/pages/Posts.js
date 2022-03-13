import React, {useEffect} from 'react';
import styles from "../styles/Home.module.css";
import PostCard from "../components/posts/card/card";
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../store/actions/postActions";

function Posts() {
    const {posts} = useSelector(state => state?.post);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts())
    }, []);


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

export default Posts;