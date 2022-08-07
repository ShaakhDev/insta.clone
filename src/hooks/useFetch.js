import { useState, useEffect } from 'react'
import { useGetAllPostsQuery } from '../rtk/postsApi'


function useFetch(page) {
    const { data, isLoading, error, isSuccess } = useGetAllPostsQuery(page, 1);
    const [posts, setPosts] = useState([]);
    // const [formattedPosts, setFormattedPosts] = useState([]);

    useEffect(() => {
        if (isSuccess) {
            setPosts([...posts, ...data])
            console.log('fetched', posts)

        }
    }, [isSuccess, data, posts])

    return { posts, error, isLoading }
}
export default useFetch;