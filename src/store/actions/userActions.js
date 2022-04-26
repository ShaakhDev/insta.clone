import {userActions} from "../reducers/userReducer";
import api from "../../service/axios";
import {getConfig} from "./authConfig";

const setTokenToLocalstorage = (data) => {
    const _token = data?.data?.access_token;
    localStorage.setItem('token', _token)
    window.location.reload(true)
}

const unAuthorized = (error) => {
    if (error?.status === 401) {

        localStorage.removeItem('token')
        window.location.reload(false)
    }
}

export const signUp = (formData) => {
    return async (dispatch) => {
        dispatch(userActions.loading(true));
        try {
            const userData = await api.post('/user', formData);
            console.log(userData)
            dispatch(userActions.setUser(userData?.data))
            dispatch(userActions.loading(false));
        } catch (error) {
            dispatch(userActions.loading(false));
            dispatch(userActions.setError(error?.response.status))
            console.log(error.response)
        }
    }
}

export const login = (formData) => {
    return async (dispatch) => {
        dispatch(userActions.loading(true));
        try {
            const userData = await api.post('/login', formData);
            setTokenToLocalstorage(userData)
            console.log('login qilindi:', userData)
            dispatch(userActions.loading(false))
            dispatch(userActions.setUser(userData.data));
        } catch (error) {
            dispatch(userActions.loading(false));
            dispatch(userActions.setError(error?.response.status))
            console.log(error)
        }
    }
}

//login qilgan foydalanuvchining profil ma'lumotlarini olish
export const getCurrentUser = () => {
    return async (dispatch) => {
        const config = getConfig()
        try {
            const user = await api.get('/profile', config);
            dispatch(userActions.setUser(user.data));
            localStorage.setItem('user', user.data)
        } catch (error) {
            // unAuthorized(error?.response);
            console.log(error?.response)
        }
    }
}

//Joriy foydalanuvchining profil  ma'lumotlarini o'zgartirish.
export const updateProfile = (formData, image) => {
    return async (dispatch) => {
        try {
            let imagePath;
            if (typeof image === 'string') imagePath = image
            else if (typeof image === 'object') {
                const imgForm = new FormData()
                imgForm.append("file", image);
                const config = {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }
                imagePath = await api.post('/user/image', imgForm, config)
                imagePath = imagePath?.data.path;
                console.log(imagePath)
            }

            if (imagePath) {

                const body = {...formData, avatar_url: imagePath};
                const config = getConfig()
                const updatedProfile = await api.patch('/update', body, config);
                dispatch(userActions.setUser(updatedProfile?.data));
            }

        } catch (error) {
            unAuthorized(error?.response)
            console.log(error.response)
        }
    }
}

