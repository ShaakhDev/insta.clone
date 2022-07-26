import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        token: localStorage.getItem("access_token"),
    },
    reducers: {
        setCredentials: (state, action) => {
            localStorage.setItem("access_token", action.payload.access_token);
            state.user = action.payload.username;
        }
    }
})

export const { setCredentials } = authSlice.actions;

export default authSlice.reducer;

export const CurrentUser = state => state?.auth?.user
export const GetToken = state => state?.auth?.token