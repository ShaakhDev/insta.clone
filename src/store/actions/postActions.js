import {postActions} from "../reducers/postReducer";
import api from "../../service/axios";
import {login} from "./userActions";

const unAuthorized = (error)=>{
    if(error.status===401){
        const formData = new FormData();
        formData.append('username', 'shakhzod');
        formData.append('password', 'shakhzod123');
        login(formData)
    }
}

export const getAllPosts = () => {
    return async (dispatch) => {
        try {
            dispatch(postActions.loading(true))
            const postData = await api.get('/post/all')
            dispatch(postActions.setPosts(postData.data));
            console.log(postData)
            dispatch(postActions.loading(false))
        } catch (error) {
            dispatch(postActions.loading(false))
            console.log(error)
            unAuthorized(error?.response)
            dispatch(postActions.setError(error.response.status))
        }
    }
}

export const getCurrentPost  = (id) => async (dispatch)=>{
    try {
        dispatch(postActions.loading(true));
        const currentPost = await api.get(`/post/${id}`);
        dispatch(postActions.setCurrentPost(currentPost?.data));
        dispatch(postActions.loading(false));
    }catch(error){
        console.log(error.response)
        unAuthorized(error?.response)
        dispatch(postActions.setError(error.response.statusText))
    }
}


export const uploadImage = (image) => async dispatch =>{
    try{
        const token = localStorage.getItem('token')
        const head = {
            'Authorization': `Bearer ${token}`,
            "Content-Type":"multipart/form-data"
        };
        const config = {
            headers: head,
        }
        const imgForm = new FormData()
        imgForm.append('file',image);
        const imagePath = await api.post('/post/image',imgForm,config);
        console.log(imagePath)
        dispatch(postActions.setPostImagePath(imagePath.data.path))

    }catch(error){
        unAuthorized(error?.response)
        console.log(error.response)
    }
}

export const createPost = data => async (dispatch)=>{
    try{
        dispatch(postActions.loading(true));
        dispatch(postActions.setStatus("PENDING"))
        const token = localStorage.getItem('token')
        const config = {
            headers:{ 'Authorization': `Bearer ${token}`},
        };
       const newPost = await api.post('/post/',data,config);
       dispatch(postActions.setNewPost(newPost.data));
        dispatch(postActions.setStatus("SUCCESS"))
        dispatch(postActions.loading(false));
       console.log(newPost)

    }catch(error){
        dispatch(postActions.setError(error?.response.status));
        dispatch(postActions.loading(false));
        dispatch(postActions.setStatus("ERROR"))
        unAuthorized(error?.response)
        console.log(error.response)
    }
}

export const deletePost = (id)=>async(dispatch)=>{
    try{
        dispatch(postActions.loading(true));
        const token = localStorage.getItem('token')
        const config = {
            headers:{ 'Authorization': `Bearer ${token}`},
        };
        const response = await api.delete(`/post/delete/${id}`,config);
        console.log(response)
        dispatch(postActions.loading(false));

    }catch(error){
        console.log(error.response)
        unAuthorized(error?.response)
        dispatch(postActions.setError(error?.response.status));
        dispatch(postActions.loading(false));

    }
}

export const like = (id,status)=> async(dispatch)=>{
    try{
        const token = localStorage.getItem('token')
        const config = {
            headers:{ 'Authorization': `Bearer ${token}`},
            params:status
        };
        const res  = await api.post(`/post/${id}/like`,config );

        console.log('like response:',res)
    }catch(error){
        console.log(error?.response)
    }
}