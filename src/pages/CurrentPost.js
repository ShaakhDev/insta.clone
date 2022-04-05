import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import CurrentPostCard from "../components/currentPost/currentPostCard";
import {postActions} from "../store/reducers/postReducer";
import {getCurrentPost} from "../store/actions/postActions";

const CURRENT_POST = [];

function CurrentPost() {
    const dispatch = useDispatch()
    const params = useParams();
    const {currentPost,error} = useSelector(state => state?.post);
    console.log(currentPost)

    useEffect(() => {
     if(CURRENT_POST.length===0){
         dispatch(getCurrentPost(params.postId))
         if(currentPost)
             CURRENT_POST.push(currentPost)

     } else if(CURRENT_POST[0].id===params.postId){
         postActions.setCurrentPost(CURRENT_POST[0]);
     }else{
         dispatch(getCurrentPost(params.postId))
         CURRENT_POST.length = 0;
         if(currentPost)
             CURRENT_POST.push(currentPost)
     }
    }, [dispatch,params.postId])



    if(error){
        return <h1>{error}</h1>
    }


    return (
        <div>
            <CurrentPostCard
                user={currentPost?.user}
                caption={currentPost?.caption}
                comments={currentPost?.comments}
                time={currentPost?.timestamp}
                image={currentPost?.image_url}
                likes={currentPost?.likes}
            />
        </div>
    );
}

export default CurrentPost;