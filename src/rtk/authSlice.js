import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: localStorage.getItem("user"),
        token: localStorage.getItem("access_token"),
    },
})



export default authSlice.reducer;

