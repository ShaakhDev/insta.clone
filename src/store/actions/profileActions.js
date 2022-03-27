import {profileActions} from "../reducers/profileReducer";
import api from "../../service/axios";

const sendRequest = async (endpoint)=>{
    const response = await api.get(endpoint);
    if (response.status !== 200 && response.status === 401) throw new Error('couldn\'t fetch data')
    return response;
}


export const getProfileDetails = (username)=>{
    return async (dispatch) =>{
        dispatch(profileActions.loading(true));
        try{
            const profileData = await sendRequest(`/${username}`);
            dispatch(profileActions.setProfile(profileData?.data))
        }catch(error){
            console.error(error.response)
        }
    }
}

