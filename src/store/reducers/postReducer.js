import {createSlice} from "@reduxjs/toolkit";

const postReducer = createSlice({
    name: 'post',
    initialState: {
        posts:[],
        currentPost: {},
        loading: false,
        error: 0
    },
    reducers: {
        setPosts(state, action) {
            state.posts = action.payload;
        },
        loading(state,action){
            state.loading = action.payload
        },
        setCurrentPost(state,action){
            state.currentPost=action.payload
        },
        setError(state,action){
            state.error = action.payload
        }

    }
})

export const postActions = postReducer.actions;
export default postReducer.reducer;