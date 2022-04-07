import {profileActions} from "../reducers/profileReducer";
import api from "../../service/axios";

export const getProfileDetails = (username) => {
    return async (dispatch) => {
        try {
            dispatch(profileActions.loading(true));
            const profileData = await api.get(`/${username}`);
            dispatch(profileActions.setProfile(profileData?.data))
            dispatch(profileActions.loading(false));
        } catch (error) {
            dispatch(profileActions.setError(error.response.status))
            console.error(error.response)
        }
    }
}

