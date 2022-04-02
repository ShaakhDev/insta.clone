import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
// import {getAllPosts} from "../store/actions/postActions";
import CurrentPostCard from "../components/currentPost/currentPostCard";

function CurrentPost() {
    // const dispatch = useDispatch()
    const [post]=useState({
        "id": 6,
        "image_url": "https://insta-clone.deta.dev/post/download/cute-cats-4_IYSJAa.jpg",
        "caption": "Such a cute cat🙂",
        "timestamp": "2022-01-16T07:13:23.427571",
        "likes": 1,
        "user": {
            "username": "ixtiyor",
            "avatar_url": "https://insta-clone.deta.dev/profile/ixtiyor_hyuWgb.jpg"
        },
        "comments": [
            {
                "id": 4,
                "text": "Yeah, it is really pretty.",
                "user": {
                    "username": "azamat",
                    "avatar_url": "https://insta-clone.deta.dev/profile/azamat_HWqOCu.jpg"
                },
                "timestamp": "2022-01-16T07:36:39.277724"
            },
            {
                "id": 8,
                "text": "It looks like to my cat😂",
                "user": {
                    "username": "sardor",
                    "avatar_url": "https://insta-clone.deta.dev/profile/Arsenal-1024x1024_UDjLdP.jpg"
                },
                "timestamp": "2022-01-16T07:42:25.978187"
            }
        ]
    })
    const params = useParams()
    const {posts} = useSelector(state => state?.post);



    return (
        <div>
          <CurrentPostCard user={post.user} caption={post.caption} comments={post.comments} time={post.timestamp} likes={5}/>
        </div>
    );
}

export default CurrentPost;