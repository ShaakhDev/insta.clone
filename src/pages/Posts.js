import React, {
    memo,
    useCallback,
    useEffect,
    useRef,
    useState
} from 'react';
import styles from "../styles/Home.module.css";
import PostCard from "../components/posts/card/postCard";
// import { useGetAllPostsQuery } from '../rtk';
import SkeletonCard from "../components/posts/card/skeletonCard";
import useFetch from '../hooks/useFetch';

function Posts() {
    const [page, setPage] = useState(1);
    const { posts, isLoading, error } = useFetch(page);
    const boxRef = useRef();

    const handleObserver = useCallback((entries) => {

        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setPage((prev) => prev + 1)
                // console.log('intersecting')
            }
        })
    }, []);


    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        }
        const observer = new IntersectionObserver(handleObserver, options);

        if (boxRef.current) {
            observer.observe(boxRef.current);
        }
        // console.log(boxRef.current)

    }, [handleObserver, boxRef?.current, posts])





    const AllPosts = useCallback(() => {
        return (
            <>
                {posts?.map((post, index) => {
                    // if (index === posts.length - 1) {
                    return <PostCard ref={boxRef} postData={post} key={post.id} />

                    // } else return <PostCard postData={post} key={post.id} />
                })}
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