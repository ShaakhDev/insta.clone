import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const BASE_URL = process.env.REACT_APP_BASE_URL;



export const usersApi = createApi({
    reducerPath: 'usersApi',
    tagTypes: ['Users',],
    keepUnusedDataFor: 60,
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,

    }),


    endpoints: (build) => ({
        signUp: build.mutation({

            query: (formData) => ({
                url: 'user',
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: [{ type: 'Users', id: 'LIST' }],
        }),
        login: build.mutation({
            query: (formData) => ({
                url: 'login',
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: [{ type: 'Users', id: 'LIST' }],
        }),
        // getCurrentUser: build.query({
        //     query: () => ({
        //         url: 'profile',
        //         method: 'GET',
        //         headers: {
        //             'Authorization': `Bearer ${localStorage.getItem('token')}`
        //         }
        //     }),
        //     providesTags: [{ type: 'Users', id: 'LIST' }],
        // }),

        getCurrentUser: build.mutation({
            query: () => ({
                url: 'profile',
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                }
            }),
            providesTags: [{ type: 'Users', id: 'LIST' }],
        }),

        saveAvatarUrl: build.mutation({
            query: (image) => ({
                url: 'user/image',
                method: 'POST',
                body: image
            })
        }),
        updateUser: build.mutation({
            query: (formData) => ({
                url: 'update',
                method: 'PUT',
                body: formData,
            }),
            invalidatesTags: [{ type: 'Users', id: 'LIST' }],
        })
    })

})

export const {
    useSignUpMutation,
    useLoginMutation,
    useGetCurrentUserMutation,
    useSaveAvatarUrlMutation,
    useUpdateUserMutation
} = usersApi;