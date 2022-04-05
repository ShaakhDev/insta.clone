import {userActions} from "../reducers/userReducer";
import api from "../../service/axios";

const setTokenToLocalstorage = (data) => {
    const _token = data?.data?.access_token;
    localStorage.setItem('token', _token)
    window.location.reload(true)
}

export const signUp = (formData) => {
    return async (dispatch) => {
        dispatch(userActions.loading(true));
        try {
            const userData = await api.post('/user', formData);
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
            const userData = await api.post('/login', formData);
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
            const user =  await api.get('/profile', config);
            dispatch(userActions.setUser(user.data));
            localStorage.setItem('user',user.data)
        } catch (error) {
            if(error?.response.status === 401){
                alert('avtorizatsiyadan o\'ting')
            }
            console.log(error?.response)
        }
    }
}


//Joriy foydalanuvchining profil  ma'lumotlarini o'zgartirish.
export const updateProfile = (formData,image)=>{
    return async (dispatch)=>{
        try{
            console.log(image)
            const imgForm = new FormData()
            imgForm.append("file",image);
            const config = {
                headers:{
                    "Content-Type":"multipart/form-data"
                }
            }
            const imagePath= await api.post('/user/image',imgForm,config)
            console.log(imagePath)
            if(imagePath){
                const token = localStorage.getItem('token')
                const body =  {...formData, avatar_url: imagePath?.data.path};
                const config = {
                    headers:{
                        'Authorization': `Bearer ${token}`,
                    },
                }
                console.log(config)
                const updatedProfile = api.patch('/update',body,config);
                dispatch(userActions.setUser(updatedProfile?.data));
                window.location.reload(false)
                console.log(updatedProfile)
            }
        }catch(error){
            console.log(error.response)
        }
    }
}

