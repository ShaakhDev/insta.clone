import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const postsApi = createApi({
    reducerPath: 'postsApi',
    tagTypes: ['Posts'],
    keepUnusedDataFor: 60,
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    endpoints: (build) => ({
        getAllPosts: build.query({
            query: (page = 1) => `post/all?page=${page}&size=10`,
            providesTags: () => [{ type: 'Posts', id: 'LIST' }],
            transformResponse: response => {
                const items = response.items.sort((a, b) => b.id - a.id)
                return { ...response, ...items }
            }
        }),

        //post/some endpoint

        //////////

        getPost: build.query({
            query: (id) => `post/${id}`,
            providesTags: [{ type: 'Posts', id: 'single' }],
        }),


        updatePost: build.mutation({
            query: (data) => ({
                url: `post/${data.id}`,
                method: 'PATCH',
                body: data.body,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                }

            }),
            invalidatesTags: [{ type: 'Posts', id: 'LIST' }, { type: 'Posts', id: 'single' }],

        }),


        createPost: build.mutation({
            query: (data) => ({
                url: 'post/',
                method: 'POST',
                body: data,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                }
            }),
            invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
        }),

        savePostImage: build.mutation({
            query: (formData) => ({
                url: 'post/image',
                method: 'POST',
                body: formData,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                }
            }),
        }),

        setLikeToPost: build.mutation({
            query: (id) => ({
                url: `post/${id}/like`,
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                }
            }),
            invalidatesTags: [{ type: 'Posts', id: 'single' }],
        }),

        deletePost: build.mutation({
            query: (id) => ({
                url: `post/delete/${id}`,
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                }
            }),
            invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
        }),

        setCommentToPost: build.mutation({
            query: (data) => ({
                url: `comment/`,
                method: 'POST',
                body: data,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                }
            }),
            invalidatesTags: [{ type: 'Posts', id: 'single' }],

        })
    })
})


export const {
    useGetAllPostsQuery,
    useGetPostQuery,
    useCreatePostMutation,
    useSavePostImageMutation,
    useSetLikeToPostMutation,
    useDeletePostMutation,
    useUpdatePostMutation,
    useSetCommentToPostMutation,
} = postsApi