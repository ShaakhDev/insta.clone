import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from './usersApi'
import { postsApi } from './postsApi'
import authReducer from './authSlice'
import { rtkQueryErrorLogger } from './errorHandler'



export const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer,
        [postsApi.reducerPath]: postsApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddlware) =>
        getDefaultMiddlware()
            .concat([
                usersApi.middleware,
                postsApi.middleware,
                // rtkQueryErrorLogger(usersApi),
                usersApi.middleware
            ])

})