import {postActions} from "../reducers/postReducer";
import api from "../../service/axios";

const sendRequest = async (endpoint)=>{
    const response = await api.get(endpoint);
    if (response.status !== 200) throw new Error('couldn\'t fetch data')
    return response;
}


export const getAllPosts = () => {
    return async (dispatch) => {

        try {
            dispatch(postActions.loading(true))
            const postData = await sendRequest('/post/all');
            dispatch(postActions.setPosts(postData?.data))
        } catch (error) {
            console.log(error)
        }
    }
}

