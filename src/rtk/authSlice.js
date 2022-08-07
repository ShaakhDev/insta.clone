import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: localStorage.getItem("user"),
        token: localStorage.getItem("access_token"),
        user_id: localStorage.getItem("user_id"),
    },
})



export default authSlice.reducer;

