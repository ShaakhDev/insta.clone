import {postActions} from "../reducers/postReducer";
import api from "../../service/axios";

export const getAllPosts = () => {
    return async (dispatch) => {
        try {
            dispatch(postActions.loading(true))
            const postData = await api.get('/post/all')
            const sorted = postData.data.sort((a,b)=>a.id-b.id)
            dispatch(postActions.setPosts(sorted));
            console.log(sorted)
            dispatch(postActions.loading(false))

        } catch (error) {
            console.log(error)
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
        console.log(error.response)
    }
}

const createPost = data => async (dispatch)=>{
    try{
        const token = localStorage.getItem('token')
        const config = {
            headers:{ 'Authorization': `Bearer ${token}`},
        };
       const newPost = await api.post('/post/',data,config);
       console.log(newPost)

    }catch(error){
        console.log(error.response)
    }
}