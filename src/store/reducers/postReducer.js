import {createSlice} from "@reduxjs/toolkit";

const postReducer = createSlice({
    name: 'post',
    initialState: {
        posts:[],
        loading: false,
    },
    reducers: {
        setPosts(state, action) {
            state.posts = action.payload;
            state.loading=false
        },
        loading(state,action){
            state.loading = action.payload
        }

    }
})

export const postActions = postReducer.actions;
export default postReducer.reducer;