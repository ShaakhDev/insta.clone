import {createSlice} from "@reduxjs/toolkit";

const userReducer = createSlice({
    name: 'user',
    initialState: {
        user: null,
        registered: false,
        loading: false,
        token: localStorage.getItem('token') ,
        error:0
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload
        },
        loading(state, action) {
            state.loading = action.payload;
        },
        setError(state,action){
            state.error = action.payload
        },

    }
})

export const userActions = userReducer.actions;
export default userReducer.reducer;