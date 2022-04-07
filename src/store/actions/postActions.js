import {postActions} from "../reducers/postReducer";
import api from "../../service/axios";

export const getAllPosts = () => {
    return async (dispatch) => {
        try {
            dispatch(postActions.loading(true))
            const postData = await api.get('/post/all')
            console.log(postData)
            dispatch(postActions.setPosts(postData?.data))
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