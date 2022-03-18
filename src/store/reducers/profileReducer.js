import {createSlice} from "@reduxjs/toolkit";

const profileReducer = createSlice({
    name: 'profile',
    initialState: {
        profile:{},
        loading: false,
    },
    reducers: {
        setProfile(state, action) {
            state.profile = action.payload;
            state.loading=false
        },
        loading(state,action){
            state.loading = action.payload
        }

    }
})

export const profileActions = profileReducer.actions;
export default profileReducer.reducer;