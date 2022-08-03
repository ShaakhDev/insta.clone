import React, { useEffect } from 'react';
import Layout from "../components/layout/MainHeader";
import { useParams } from "react-router-dom";
import CurrentPostCard from "../components/currentPost/currentPostCard";
import SkeletonCurrentPost from "../components/currentPost/skeletonCurrentPost";
import { useGetPostQuery } from '../rtk';
import nprogress from 'nprogress';

function CurrentPost() {

    const params = useParams();
    const { data, isLoading } = useGetPostQuery(params.postId);

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
                    id={data?.id}
                />
            )}
        </Layout>
    );
}

export default CurrentPost;