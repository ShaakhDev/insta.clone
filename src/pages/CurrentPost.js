import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MetaLayout from '../components/layout/MetaLayout';
import CurrentPostCard from '../components/currentPost/currentPostCard';
import SkeletonCurrentPost from '../components/currentPost/skeletonCurrentPost';
import { useGetCurrentUserQuery, useGetPostQuery } from '../rtk';
import nprogress from 'nprogress';
import styles from '../styles/CurrentPost.module.css';

function CurrentPost() {
    const params = useParams();
    const { data, isLoading } = useGetPostQuery(params.postId, 1);
    const { data: currentUser } = useGetCurrentUserQuery(1);

    useEffect(() => {
        setInterval(() => {
            nprogress.done();
        }, 1000);
    }, []);

    const _description = data?.caption
        ? `${data?.user?.username} shared a post on Instaclone: "${data?.caption}. Follow their account to see more posts"`
        : `${data?.user?.username} shared a photo on Instaclone. Follow their account to see more posts.`;

    const _title = data?.caption
        ? `${data?.user?.username} on Instaclone: "${data?.caption}"`
        : `Instaclone photo by ${data?.user?.username}`;

    const meta = {
        title: _title,
        description: _description,
        image: data?.image_url,
        ogTitle: _title,
        ogDescription: _description,
    };

    return (
        <MetaLayout {...meta}>
            {isLoading ? (
                <SkeletonCurrentPost />
            ) : (
                <div className={styles.home}>
                    <div className={styles.box}>
                        <CurrentPostCard
                            user={data?.user}
                            caption={data?.caption}
                            comments={data?.comments}
                            time={data?.timestamp}
                            image={data?.image_url}
                            likes={data?.likes}
                            liked_users={data?.liked_users}
                            id={data?.id}
                            currentUser={currentUser}
                        />
                    </div>
                </div>
            )}
        </MetaLayout>
    );
}

export default CurrentPost;
