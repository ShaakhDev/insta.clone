import {postActions} from "../reducers/postReducer";
import api from "../../service/axios";

const sendRequest = async (endpoint)=>{
    const response = await api.get(endpoint);
    if (response.status !== 200) throw new Error('couldn\'t fetch data')
    return response;
}


export const getPosts = () => {
    return async (dispatch) => {

        try {
            const postData = await sendRequest('/post/all');
            // console.log(postData?.data)
            dispatch(postActions.setPosts(postData?.data))
        } catch (error) {
            console.log(error)
        }
    }
}

export const getProfileDetails = (username)=>{
    return async (dispatch) =>{
        dispatch(postActions.loading(true));
        try{
            const profileData = await sendRequest(username);
            console.log(profileData)
            dispatch(postActions.setProfileDetails(profileData?.data))
        }catch(error){
            console.log(error)
        }
    }
}