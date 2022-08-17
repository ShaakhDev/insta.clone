import React, { useEffect } from 'react';
import Layout from "../components/layout/MainHeader";
import { useParams } from "react-router-dom";
import CurrentPostCard from "../components/currentPost/currentPostCard";
import SkeletonCurrentPost from "../components/currentPost/skeletonCurrentPost";
import { useGetCurrentUserQuery, useGetPostQuery } from '../rtk';
import nprogress from 'nprogress';

function CurrentPost() {

    const params = useParams();
    const { data, isLoading } = useGetPostQuery(params.postId, 1);
    const { data: currentUser } = useGetCurrentUserQuery(1);
    useEffect(() => {
        setInterval(() => {
            nprogress.done()
        }, 1000)
    }, [])

    return (
        <Layout>
            {isLoading ? (<SkeletonCurrentPost />) : (
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
            )}
        </Layout>
    );
}

export default CurrentPost;