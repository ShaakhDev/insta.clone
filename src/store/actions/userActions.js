import {userActions} from "../reducers/userReducer";
import api from "../../service/axios";

const postRequest = async (endpoint, requestBody) => {
    const response = await api.post(endpoint, requestBody);
    if (response.status !== 200) throw new Error('couldn\'t fetch data')
    return response;
}
const getRequest = async (endpoint, config = null) => {
    const response = await api.get(endpoint, config);
    console.log(response.status)
    if(response.status===401){
        localStorage.removeItem('token');
        window.location.reload(true)
    }

    return response;
}

const setTokenToLocalstorage = (data) => {
    const _token = data?.data?.access_token;
    localStorage.setItem('token', _token)
    window.location.reload(true)
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
            setTokenToLocalstorage(userData)
            dispatch(userActions.loading(false))
        } catch (error) {
            dispatch(userActions.loading(false));
            console.log(error)
        }
    }
}

export const getCurrentUser = (token) => {
    return async (dispatch) => {

        const head = {'Authorization': `bearer ${token}`}
        const config = {
            headers: head,
        }
        try {
            const user = await getRequest('/profile', config);
            console.log(user);
            dispatch(userActions.setUser(user?.data));

        } catch (error) {

            console.log(error.status)

        }
    }
}

export const getUserPosts = (username) => {
    return async (dispatch) => {
        try {
            console.log(username)
            const userPosts = await getRequest(`/${username}`);
            console.log(userPosts);
            dispatch(userActions.setUserPosts(userPosts?.data));
        } catch (error) {
            console.log(error)

        }
    }
}