import {createSlice} from "@reduxjs/toolkit";

const profileReducer = createSlice({
    name: 'profile',
    initialState: {
        profile: {},
        mySubscriptions: [],
        loading: false,
        error: 0
    },
    reducers: {
        setProfile(state, action) {
            state.profile = action.payload;
        },
        loading(state, action) {
            state.loading = action.payload
        },
        setError(state, action) {
            state.error = action.payload;
        },
        setSubscriptions(state, action) {
            state.mySubscriptions = action.payload;
        }

    }
})

export const profileActions = profileReducer.actions;
export default profileReducer.reducer;