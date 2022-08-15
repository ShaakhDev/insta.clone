import React, { useRef, useEffect } from 'react'
import Layout from '../layout/MainHeader'
import PostCard from '../posts/card/postCard'
import { useGetPostQuery } from '../../rtk/postsApi';
import { useParams } from 'react-router-dom';
import BackButton from '../backButton';



function MobileCurrentPostcard() {
    const params = useParams()
    const { data: postData, isSuccess, isLoading } = useGetPostQuery(params.postId, 1);
    const ref = useRef(null)


    useEffect(() => {
        if (isSuccess) {
            console.log(postData)
        }
    }, [isSuccess])

    return (
        <Layout>
            <div style={{ marginTop: '6rem' }}>
                <BackButton />
                {postData
                    && <PostCard postData={postData} />

                }
            </div>
        </Layout>
    )
}

export default MobileCurrentPostcard