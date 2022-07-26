import React, { useEffect, memo, useCallback } from 'react';
import styles from "../styles/Home.module.css";
import PostCard from "../components/posts/card/postCard";
// import {useDispatch, useSelector} from "react-redux";
import { useGetAllPostsQuery } from '../rtk';
// import {getAllPosts} from "../store/actions/postActions";
import SkeletonCard from "../components/posts/card/skeletonCard";

function Posts() {
    const { data: posts, isSuccess, isLoading } = useGetAllPostsQuery(1);
    // const {posts, loading} = useSelector(state => state?.post);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     if (posts.length === 0) {
    //         dispatch(getAllPosts());
    //     }
    // }, [dispatch, posts]);

    useEffect(() => {
        if (posts) {
            console.log(posts);
        }
    }, [isSuccess, posts])


    const AllPosts = useCallback(() => {
        return (
            <>
                {posts?.map(post => (
                    <PostCard postData={post} key={post.id} />
                ))}
            </>
        )
    }, [posts])
    return (
        <>
            <main className={styles.home}>
                <div className={styles.box}>
                    {isLoading ? <SkeletonCard /> : <AllPosts />}
                </div>
            </main>
        </>
    );
}

export default memo(Posts);