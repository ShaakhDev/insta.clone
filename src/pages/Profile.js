import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import ProfileHeader from "../components/profile/profileHeader";
import ProfileBody from "../components/profile/profileBody";
import styles from '../styles/Profile.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getCurrentUser} from "../store/actions/userActions";
import {getProfileDetails} from "../store/actions/profileActions";
import {userActions} from "../store/reducers/userReducer";

const CURRENT_USER = []

function Profile() {
    const params = useParams()
    const dispatch = useDispatch();
    const {user,token} = useSelector(state => state?.user);

    useEffect(() => {
        if (CURRENT_USER[0] !== undefined) {
            userActions.setUser(CURRENT_USER[0])
        } else if (token) {
            dispatch(getCurrentUser())
            if (user)
                CURRENT_USER.push(user)
        }
    }, [dispatch, user,token])

    useEffect(() => {
        dispatch(getProfileDetails(params?.user))
    }, [user, dispatch, params])

    return (
        <main className={styles.profile}>
            <ProfileHeader/>
            <ProfileBody/>
        </main>
    );
}

export default Profile;