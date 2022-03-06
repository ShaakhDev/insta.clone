import {createSlice} from "@reduxjs/toolkit";

const userReducer = createSlice({
    name: 'user',
    initialState: {
        user: null,
        loading: false,
        token: localStorage.getItem('token') || null,
        token_type: localStorage.getItem('token_type'),
        user_id: null,
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
            state.loading = false;
        },
        setUserId(state, action) {
            state.user_id = action.payload
        },
        loading(state){
            state.loading = true
        }
    }
})

export const userActions = userReducer.actions;
export default userReducer.reducer;