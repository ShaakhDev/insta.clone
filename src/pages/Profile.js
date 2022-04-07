import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import ProfileHeader from "../components/profile/profileHeader";
import ProfileBody from "../components/profile/profileBody";
import styles from '../styles/Profile.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getCurrentUser} from "../store/actions/userActions";
import {getProfileDetails} from "../store/actions/profileActions";
import {userActions} from "../store/reducers/userReducer";
import {profileActions} from "../store/reducers/profileReducer";

const CURRENT_USER = [];
const CURRENT_PROFILE = []

function Profile() {
    const params = useParams()
    const dispatch = useDispatch();
    const {user, token} = useSelector(state => state?.user);
    const {error, profile} = useSelector(state => state?.profile);

    useEffect(() => {
        // if (CURRENT_USER.length===0&&user) {
        //     CURRENT_USER.push(user)
        //     userActions.setUser(CURRENT_USER[0])
        // } else if (CURRENT_USER.length!==0) {
        //     userActions.setUser(CURRENT_USER[0])
        // }else if(CURRENT_USER.length===0&&!user){
        //     dispatch(getCurrentUser());
        //     if(user)
        //         CURRENT_USER.push(user);
        // }

        if (user) {
            userActions.setUser(user)
        } else {
            dispatch(getCurrentUser());
        }
    }, [dispatch, user])

    useEffect(() => {
        if (profile&&profile.username===params.user) {
            profileActions.setProfile(profile)
        } else {
            dispatch(getProfileDetails(params?.user))
        }
    }, [dispatch, params,profile])

    if (error > 499) {
        return (
            <h1>
                Serverda xatolik yuz berdi!!!
            </h1>
        )
    }

    return (
        <main className={styles.profile}>
            <ProfileHeader/>
            <ProfileBody/>
        </main>
    );
}

export default Profile;