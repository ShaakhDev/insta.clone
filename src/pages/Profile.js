import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import ProfileHeader from "../components/profile/profileHeader";
import ProfileBody from "../components/profile/profileBody";
import styles from '../styles/Profile.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getCurrentUser} from "../store/actions/userActions";
import {getProfileDetails, getSubscriptions} from "../store/actions/profileActions";
import {userActions} from "../store/reducers/userReducer";
import {profileActions} from "../store/reducers/profileReducer";
import SkeletonProfile from "../components/profile/skeletonProfile";



function Profile() {
    const params = useParams()
    const dispatch = useDispatch();
    const {user, token,} = useSelector(state => state?.user);
    const {error, profile, loading} = useSelector(state => state?.profile);

    useEffect(() => {
        if (token) {
            dispatch(getSubscriptions())
        }
    },[token,dispatch])

    useEffect(() => {

        if (user) {
            userActions.setUser(user)
        } else if(token) {
            dispatch(getCurrentUser());
        }
    }, [dispatch, user,token])

    useEffect(() => {
        if (profile && profile.username === params.user) {
            profileActions.setProfile(profile)
        } else {
            dispatch(getProfileDetails(params?.user))
        }
    }, [dispatch, params, profile])

    if (error > 499) {
        return (
            <h1>
                Serverda xatolik yuz berdi!!!
            </h1>
        )
    }

    return (
        <main className={styles.profile}>
            {loading ? (<SkeletonProfile/>
            ) : (<>
                <ProfileHeader/>
                <ProfileBody/>
            </>)}
        </main>
    );
}

export default Profile;