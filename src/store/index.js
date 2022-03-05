import {configureStore} from "@reduxjs/toolkit";
import authSlice from 'reducer/aut-slice'

const store = configureStore({
    reducer:{
        auth: authSlice
    }
})