import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const BASE_URL = process.env.REACT_APP_BASE_URL;



export const usersApi = createApi({
    reducerPath: 'usersApi',
    tagTypes: ['Users',],
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.token || localStorage.getItem('access_token');
            if (token) {
                headers.Authorization = `Bearer ${token}`;
            }
        }
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
        getCurrentUser: build.query({
            query: () => ({
                url: 'profile',
                method: 'GET',
            }),
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({ id }) => ({ type: 'Users', id })),
                        { type: 'Users', id: 'LIST' },
                    ]
                    : [{ type: 'Users', id: 'LIST' }],
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
    useGetCurrentUserQuery,
    useSaveAvatarUrlMutation,
    useUpdateUserMutation
} = usersApi;