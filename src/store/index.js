import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import postReducer from "./reducers/postReducer";
import profileReducer from "./reducers/profileReducer";

const store = configureStore({
    reducer: {
        user: userReducer,
        post: postReducer,
        profile: profileReducer
    }
});

export default store;