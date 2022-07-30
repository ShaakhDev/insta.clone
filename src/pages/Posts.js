import React, { memo, useCallback } from 'react';
import styles from "../styles/Home.module.css";
import PostCard from "../components/posts/card/postCard";
import { useGetAllPostsQuery } from '../rtk';
import SkeletonCard from "../components/posts/card/skeletonCard";

function Posts() {
    const { data: posts, isLoading } = useGetAllPostsQuery(1);






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

        <main className={styles.home}>
            <div className={styles.box}>
                {isLoading ? <SkeletonCard /> : <AllPosts />}
            </div>
        </main>

    );
}

export default memo(Posts);