import {useEffect} from 'react';
import PostCard from "../components/posts/card/card";
import MainHeader from "../components/layout/MainHeader";
import styles from '../styles/Home.module.css'
import {useSelector,useDispatch} from "react-redux";
import {getPosts} from "../store/actions/postActions";
function Home() {
    const {posts}= useSelector(state=>state?.post);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPosts())
    },[dispatch])
        console.log(posts)
    return (
        <>
            <MainHeader/>
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

export default Home;