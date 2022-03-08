import {createSlice} from "@reduxjs/toolkit";

const userReducer = createSlice({
    name: 'user',
    initialState: {
        user: null,
        registered: false,
        loading: false,
        token: localStorage.getItem('token') || null,
        token_type: localStorage.getItem('token_type'),
        user_id: null,
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
            state.registered = true
        },
        setUserId(state, action) {
            state.user_id = action.payload;
        },
        loading(state,action) {
            state.loading = action.payload;
        }
    }
})

export const userActions = userReducer.actions;
export default userReducer.reducer;