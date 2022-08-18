import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const BASE_URL = process.env.REACT_APP_BASE_URL;

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL })
const baseQueryWithLoggedOut = async (args, api) => {
    let result = await baseQuery(args, api)
    if (result?.error && result?.error.status === 401) {
        localStorage.removeItem('access_token')
        localStorage.removeItem('user')
    }
    else if (result?.error && result?.error.status === 404) {
        window.location.href = '/404'
    }
    else {

        return result
    }
}


export const usersApi = createApi({
    reducerPath: 'usersApi',
    tagTypes: ['Users', "Profiles"],
    keepUnusedDataFor: 60,
    baseQuery: baseQueryWithLoggedOut,



    endpoints: (build) => ({
        getCurrentUser: build.query({
            query: () => {
                return {
                    url: 'profile',
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                    }
                }

            },




            keepUnusedDataFor: 300,
            providesTags: [{ type: 'Users', id: 'special' }, { type: "Profiles", id: 'special' }],
        }),
        getProfileSubscriptions: build.query({
            query: () => {
                if (localStorage.getItem('access_token')) {
                    return {
                        url: 'my_subscriptions',
                        method: "GET",
                        headers: {
                            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                        }
                    }
                } else {
                    return null
                }
            },
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
            providesTags: [{ type: 'Profiles', id: 'profile' }],
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
        subscribe: build.mutation({
            query: (username) => ({
                url: `${username}/subscribe`,
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                }
            }),
            invalidatesTags: [{ type: 'Profiles', id: 'Subs' }, { type: 'Profiles', id: 'profile' }],
        }),
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
    useGetProfileSubscriptionsQuery,
    useSubscribeMutation,
} = usersApi;