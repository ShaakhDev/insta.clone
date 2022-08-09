import React, {
    memo,
    useEffect,
    useRef,
    useState,
    Fragment
} from 'react';
import styles from "../styles/Home.module.css";
import PostCard from "../components/posts/card/postCard";
import { useGetAllPostsQuery } from '../rtk';
import SkeletonCard from "../components/posts/card/skeletonCard";

const PAGES = {
    total_pages: 2,
    total_items: 10,
}


function Posts() {
    const [page, setPage] = useState(1);
    const { data, isLoading } = useGetAllPostsQuery(page, 1);
    const [posts, setPosts] = useState([]);
    const [lastElement, setLastElement] = useState(null);

    //initializing observer
    const observer = useRef(
        new IntersectionObserver(
            entries => {
                const first = entries[0];
                if (first.isIntersecting)
                    setPage(prevPage => prevPage + 1);

            }
        )
    );

    //set total number of pages and items from response 
    useEffect(() => {
        if (data?.total) {
            PAGES.total_items = data.total;
            PAGES.total_pages = Math.ceil(data.total / 10);
        }
    }, [data])

    //set posts from response 
    const filterAndSetData = (postsData) => {
        const all = [...posts, ...postsData.items];
        const uniqueIds = []
        const uniquePosts = all.filter(post => {
            if (!uniqueIds.includes(post.id)) {
                uniqueIds.push(post.id)
                return true
            }
            return false
        })
            .sort((a, b) => b.id - a.id);
        setPosts(uniquePosts);
    };

    //set posts from response
    useEffect(() => {
        if (data) {
            filterAndSetData(data);
        }
    }, [data]);

    //set last element to observer 
    useEffect(() => {
        const currentElement = lastElement;
        const currentObserver = observer.current;
        if (currentElement) currentObserver.observe(currentElement);

        return () => currentElement && currentObserver.unobserve(currentElement);

    }, [lastElement, data]);


    return (
        <main className={styles.home}>
            <div className={styles.box}>
                {isLoading && page === 1 ? <SkeletonCard /> : (
                    <Fragment>
                        {posts.length > 0
                            && posts?.map((post, index) => {

                                //setting the observer to the element one before the last
                                return index === posts.length - 2

                                    //if it's not loading and it's not the last 
                                    //page set the observer to the element one before the last 
                                    && !isLoading
                                    && page <= PAGES.total_pages - 1
                                    ? <div
                                        ref={setLastElement}
                                        key={`${post.user.username}-${post.id}-${index}`}
                                        lenght={`${posts.length}`}
                                    >
                                        <PostCard
                                            postData={post}
                                        />
                                    </div>

                                    // if it is the last page, don't set the observer 
                                    : <PostCard
                                        key={`${post.user.username}-${post.id}-${index}`}
                                        postData={post}
                                    />
                            })}
                    </Fragment>
                )}
            </div>
        </main>

    );
}

export default memo(Posts);