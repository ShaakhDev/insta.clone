import {createSlice} from "@reduxjs/toolkit";

const postReducer = createSlice({
    name: 'post',
    initialState: {
        posts:[],
        profile:null,
        loading: false,
    },
    reducers: {
        setPosts(state, action) {
            state.posts = action.payload;
            state.loading=false
        },
        setProfileDetails(state,action){
          state.profile = action.payload;
          state.loading = false
        },
        loading(state,action){
            state.loading = action.payload
        }

    }
})

export const postActions = postReducer.actions;
export default postReducer.reducer;