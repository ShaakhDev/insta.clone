import {userActions} from "../reducers/userReducer";
import api from "../../service/axios";

export const signUp = (formData)=>{
    return async (dispatch) =>{
        dispatch(
           userActions.loading()
        );

        const sendRequest = async ()=>{
            const response = await api.post('/user',formData);
            if(!response.ok){
                throw new Error('couldn\'t fetch data')
            }
            return response;
        }

        try{
            const userData = await sendRequest();
            dispatch(
                userActions.signUp(userData?.data)
            )
        }catch(error){
            console.log(error)
        }
    }
}

export const login=(formData)=>{
    return async (dispatch)=>{
        const sendRequest = async ()=>{
            const response = await api.post('/login',formData);
             console.log(formData)
            if(response.status !== 200){
                throw new Error('couldn\'t fetch data')
            }
            return response;
        }

        try{
            const userData = await sendRequest();
            const _token = userData?.data?.access_token;
            const _token_type = userData?.data?.token_type;
            localStorage.setItem('token', _token)
            localStorage.setItem('token_type', _token_type)
        }catch(error){
            console.log(error)
        }

    }
}