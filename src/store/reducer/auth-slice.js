import {createSlice} from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: 'auth',
    initialState:{
        token: localStorage.getItem('token') || "",
        isLoading: false,


    },
    reducers:{
       setToken(state,action){
           state.token = action.payload
       }
    }
})