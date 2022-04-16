import React, {useEffect, memo, useState} from 'react';
import styles from "../styles/Home.module.css";
import PostCard from "../components/posts/card/postCard";
import {useDispatch, useSelector} from "react-redux";
import {getAllPosts} from "../store/actions/postActions";
import {postActions} from "../store/reducers/postReducer";
import SkeletonCard from "../components/posts/card/skeletonCard";

function Posts() {
    const {posts,error,loading} = useSelector(state => state?.post);
    const dispatch = useDispatch();
    const [urlLoading,setUrlLoading] = useState(false)


    const cacheImages =async  (array)=>{
        const promises = await array.map(src=>{
            return new Promise((resolve,reject)=>{
                const img = new Image();
                img.src = src;
                img.onload = resolve();
                img.onerror = reject();
            });
        });
        await Promise.all(promises);
        setUrlLoading(false)
    }


    useEffect(()=>{
        if(posts){
            const imgs = posts.map(post=>{
                return post.image_url;
            })
            const avas = posts.map(post=>{
                return post.user.avatar_url
            })
            const urls = [...imgs,...avas];
            setUrlLoading(true)
            cacheImages(urls)
        }
    },[posts])

    useEffect(() => {
        if(posts.length!==0){
            postActions.setPosts(posts);
        }else{
            dispatch(getAllPosts());
        }
    }, [dispatch,posts]);


if(error>499){
    return (
        <h1>
            Serverda xatolik yuz berdi!!!
        </h1>
    )
}

const AllPosts = ()=>{
    return(
        <>
            {posts.map(post=>(
                <PostCard postData={post} key={post.id}/>
            ))}
        </>
    )
}
    return (
        <>
            <main className={styles.home}>
                <div className={styles.box}>
                    {urlLoading&&<h1>urls loading...</h1>}
                    {loading&&urlLoading? <SkeletonCard/> :<AllPosts/>}
                    {/*<SkeletonCard/>*/}
                </div>
            </main>
        </>
    );
}

export default memo(Posts);