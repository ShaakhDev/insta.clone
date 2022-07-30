import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { result } from 'lodash';
const BASE_URL = process.env.REACT_APP_BASE_URL;



export const usersApi = createApi({
    reducerPath: 'usersApi',
    tagTypes: ['Users', "Profiles"],
    keepUnusedDataFor: 60,
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,

    }),


    endpoints: (build) => ({
        getCurrentUser: build.query({
            query: () => ({
                url: 'profile',
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                }
            }),
            keepUnusedDataFor: 300,
            providesTags: ["Users"],
        }),
        getProfileSubscriptions: build.mutation({
            query: () => ({
                url: 'my_subscriptions',
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                }
            }),
            providesTags: [{ type: 'Profiles', id: 'Subs' }]

        }),
        signUp: build.mutation({
            query: (formData) => ({
                url: 'user',
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: [{ type: 'Users', id: 'LIST' }],
        }),

        //user/all endpoint 

        //
        saveAvatarUrl: build.mutation({
            query: (data) => ({
                url: 'user/image',
                method: 'POST',
                body: data
            }),
        }),

        getProfileDetails: build.query({
            query: (username) => ({
                url: username,
                method: "GET",
            }),
            providesTags: [{ type: 'Profiles', id: 'List' }],
        }),


        updateUser: build.mutation({
            query: (data) => ({
                url: 'update',
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                },
                body: data,
            }),
            invalidatesTags: (result, error, arg) => [{ type: 'Profiles', id: arg.id }],
        }),

        //{username}/subscribe endpoint

        /////////

        //delete endpoint 

        /////////

        login: build.mutation({
            query: (formData) => ({
                url: 'login',
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: [{ type: 'Users', id: 'LIST' }],
        }),
    })

})

export const {
    useSignUpMutation,
    useLoginMutation,
    useGetCurrentUserQuery,
    useSaveAvatarUrlMutation,
    useUpdateUserMutation,
    useGetProfileDetailsQuery,
    useGetProfileSubscriptionsMutation,
} = usersApi;