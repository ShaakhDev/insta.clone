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
            query: () => 'post/all',
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({ id }) => ({ type: 'Posts', id })),
                        { type: 'Posts', id: 'LIST' },
                    ]
                    : [{ type: 'Posts', id: 'LIST' }],

        }),

        getPost: build.query({
            query: (id) => `post/${id}`,
            providesTags: [{ type: 'Posts', id: 'LIST' }],
        })
    })
})


export const {
    useGetAllPostsQuery,
    useGetPostQuery,
} = postsApi