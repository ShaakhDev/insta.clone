import {postActions} from "../reducers/postReducer";
import api from "../../service/axios";
import {getConfig} from "./authConfig";

const unAuthorized = (error) => {
    if (error.status === 401) {
        localStorage.removeItem('token')
        window.location.reload(false)
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

export const getCurrentPost = (id) => async (dispatch) => {
    try {
        dispatch(postActions.loading(true));
        const currentPost = await api.get(`/post/${id}`);
        dispatch(postActions.setCurrentPost(currentPost?.data));
        dispatch(postActions.loading(false));
    } catch (error) {
        console.log(error.response)
        unAuthorized(error?.response)
        dispatch(postActions.setError(error.response.statusText))
    }
}

export const uploadImage = (image) => async dispatch => {
    try {
        const token = localStorage.getItem('token')
        const head = {
            'Authorization': `Bearer ${token}`,
            "Content-Type": "multipart/form-data"
        };
        const config = {
            headers: head,
        }
        const imgForm = new FormData()
        imgForm.append('file', image);
        const imagePath = await api.post('/post/image', imgForm, config);
        console.log(imagePath)
        dispatch(postActions.setPostImagePath(imagePath.data.path))

    } catch (error) {
        unAuthorized(error?.response)
        console.log(error.response)
    }
}

export const createPost = data => async (dispatch) => {
    try {
        dispatch(postActions.loading(true));
        dispatch(postActions.setStatus("PENDING"))

        const config = getConfig()
        const newPost = await api.post('/post/', data, config);
        dispatch(postActions.setNewPost(newPost.data));
        dispatch(postActions.setStatus("SUCCESS"))
        dispatch(postActions.loading(false));
        console.log(newPost)

    } catch (error) {
        dispatch(postActions.setError(error?.response.status));
        dispatch(postActions.loading(false));
        dispatch(postActions.setStatus("ERROR"))
        unAuthorized(error?.response)
        console.log(error.response)
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        dispatch(postActions.loading(true));
        const config = getConfig()
        const response = await api.delete(`/post/delete/${id}`, config);
        console.log(response);
        dispatch(postActions.deletePost(id))
        dispatch(postActions.loading(false));

    } catch (error) {
        console.log(error.response)
        dispatch(postActions.loading(false));
        dispatch(postActions.setError(error?.response.status));
        unAuthorized(error?.response)

    }
}

export const editPost = (id, postData) => async (dispatch) => {
    try {
        const config = getConfig()
        const post = await api.patch(`/post/${id}`, postData, config);
        dispatch(postActions.editPost(post.data))

    } catch (error) {
        console.log(error?.response)
    }
}

export const like = (id, status) => async (dispatch) => {
    try {
        const token = localStorage.getItem('token')
        const config = {
            headers: {'Authorization': `Bearer ${token}`},
            params: {
                status: status
            }
        };

        const res = await api.post(`/post/${id}/like`, null, config);
        dispatch(postActions.setLike(res.data))
        console.log('like response:', res)
    } catch (error) {
        console.log(error?.response)
    }
}


export const comment = (data)=> async (dispatch)=>{
    try{
        const config = getConfig();
        dispatch(postActions.setCommentLoading(true))
        const resComment = await api.post('/comment/',data,config);
        console.log(resComment)
        dispatch(postActions.setCurrentPostComment(resComment?.data));
        dispatch(postActions.setCommentLoading(false));

    }
    catch(error){
        console.log(error?.response)
    }
}