import {profileActions} from "../reducers/profileReducer";
import api from "../../service/axios";
import {getConfig} from "./authConfig";

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
};

export const getSubscriptions = () => async (dispatch) => {
    try {
        const config = getConfig()
        const subs = await api.get('/my_subscriptions', config);
        dispatch(profileActions.setSubscriptions(subs.data))
        console.log(subs)
    } catch (error) {
        console.log(error?.response)
    }
}

