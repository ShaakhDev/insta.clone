import {createSlice} from "@reduxjs/toolkit";

const userReducer = createSlice({
    name: 'user',
    initialState: {
        user: null,
        registered: false,
        loading: false,
        token: localStorage.getItem('token') ,
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
            state.registered = true
        },
        loading(state, action) {
            state.loading = action.payload;
        }
    }
})

export const userActions = userReducer.actions;
export default userReducer.reducer;