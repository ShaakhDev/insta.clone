import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const postsApi = createApi({
    reducerPath: 'postsApi',
    tagTypes: ['Posts'],
    keepUnusedDataFor: 60,
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders: (headers) => {
            if (localStorage.getItem('access_token')) {
                headers['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`
                return headers
            }
            return headers
        }
    }),
    endpoints: (build) => ({
        getAllPosts: build.query({
            query: () => 'post/all',
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({ id }) => ({ type: 'Posts', id })),
                        { type: 'Posts', id: 'LIST' },
                    ]
                    : [{ type: 'Posts', id: 'LIST' }],
            transformResponse: (result) => {
                return result.sort((a, b) => b.id - a.id)
            }
        }),

        //post/some endpoint

        //////////

        getPost: build.query({
            query: (id) => `post/${id}`,
            providesTags: [{ type: 'Posts', id: 'single' }],
        }),

        //post/{id} PATCH endpoint for update post

        //////////

        createPost: build.mutation({
            query: (data) => ({
                url: 'post',
                method: 'POST',
                body: data,

            }),
            invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
        }),

        savePostImage: build.mutation({
            query: (formData) => ({
                url: 'post/image',
                method: 'POST',
                body: formData,

            }),
        }),

        setLikeToPost: build.mutation({
            query: (data) => ({
                url: `post/${data.id}/like`,
                method: 'POST',
                params: {
                    status: data.status
                },
            }),
            invalidatesTags: [{ type: 'Posts', id: 'single' }],
        }),

        deletePost: build.mutation({
            query: (id) => ({
                url: `post/delete/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
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

} = postsApi