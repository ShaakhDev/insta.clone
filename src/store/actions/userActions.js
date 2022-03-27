import {userActions} from "../reducers/userReducer";
import api from "../../service/axios";
import {profileActions} from "../reducers/profileReducer";

const postRequest = async (endpoint, requestBody) => {
    const response = await api.post(endpoint, requestBody);
    if (response.status !== 200) throw new Error('couldn\'t fetch data')
    return response;
}
const getRequest = async (endpoint, config = null) => {
    const response = await api.get(endpoint, config);
    return response;
}

const patchRequest = async (endpoint,config)=>{
    const response = await api.put(endpoint,config);
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
            console.log('login qilindi:', userData)
            dispatch(userActions.loading(false))
            dispatch(userActions.setUser(userData.data));

        } catch (error) {
            dispatch(userActions.loading(false));
            console.log(error)
        }
    }
}

//login qilgan foydalanuvchining profil ma'lumotlarini olish
export const getCurrentUser = ()=>{
    return async (dispatch) => {
        const token = localStorage.getItem('token')
        const head = {'Authorization': `Bearer ${token}`};
        const config = {
            headers: head,
        }
        try {
            const user = await getRequest('/profile', config);
            dispatch(userActions.setUser(user.data));
        } catch (error) {
            console.log(error?.response)
        }
    }
}

export const updateProfile = (formData,image)=>{
    return async (dispatch)=>{
        try{
            console.log(image)
            let imgForm = new FormData()
            imgForm.append("image",image)
            const imagePath= await postRequest('/user/image', imgForm);
            console.log(imagePath)
            if(imagePath){
                const token = localStorage.getItem('token')
                const head = {'Authorization': `Bearer ${token}`};
                const config = {
                    body: {...formData,avatar_url:imagePath?.path},
                    headers: head,
                }
                const updatedProfile = await patchRequest('/update',config)
                console.log(updatedProfile)
            }
        }catch(error){
            console.log(error.response)
        }
    }
}

