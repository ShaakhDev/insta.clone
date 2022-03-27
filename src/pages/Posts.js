import React, {useEffect,memo} from 'react';
import styles from "../styles/Home.module.css";
import PostCard from "../components/posts/card/postCard";
import {useDispatch, useSelector} from "react-redux";
import {getAllPosts} from "../store/actions/postActions";

function Posts() {

    const {posts} = useSelector(state => state?.post);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPosts())
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

export default memo(Posts);