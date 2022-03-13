import {userActions} from "../reducers/userReducer";
import api from "../../service/axios";

const postRequest = async (endpoint, requestBody) => {
    const response = await api.post(endpoint, requestBody);
    if (response.status !== 200) throw new Error('couldn\'t fetch data')
    return response;
}
const getRequest = async (endpoint, config) => {

    const response = await api.get(endpoint, config);
    if (response.status !== 200) throw new Error('couldn\'t fetch data')
    return response;
}

export const signUp = (formData) => {
    return async (dispatch) => {
        dispatch(userActions.loading(true));
        try {
            const userData = await postRequest('/user', formData);
            console.log(userData)
            dispatch(userActions.setUser(userData?.data))
        } catch (error) {
            console.log(error)
        }
    }
}

export const login = (formData) => {
    return async (dispatch) => {
        dispatch(userActions.loading(true));
        try {
            const userData = await postRequest('/login', formData);
            const _token = userData?.data?.access_token;
            const _token_type = userData?.data?.token_type;
            localStorage.setItem('token', _token)
            localStorage.setItem('token_type', _token_type)
            dispatch(userActions.setToken())
            dispatch(userActions.loading(false))
        } catch (error) {
            console.log(error)
        }
    }
}

export const getCurrentUser = (tokenType, token) => {
    return async (dispatch) => {


        const head = {'Authorization': `Bearer ${token}`}
        const config = {headers: head}
        try {
            const user = await getRequest('/profile', config);
            console.log(user);
            dispatch(userActions.setUser(user?.data));

        } catch (error) {
            console.log(error)
        }
    }
}