import {profileActions} from "../reducers/profileReducer";
import api from "../../service/axios";




export const getProfileDetails = (username)=>{
    return async (dispatch) =>{
        dispatch(profileActions.loading(true));
        try{
            const profileData = await api.get(`/${username}`);
            dispatch(profileActions.setProfile(profileData?.data))
        }catch(error){

            console.error(error.response)
        }
    }
}

