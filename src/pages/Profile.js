import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import ProfileHeader from "../components/profile/profileHeader";
import ProfileBody from "../components/profile/profileBody";
import styles from '../styles/Profile.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getCurrentUser} from "../store/actions/userActions";
import {getProfileDetails} from "../store/actions/profileActions";


function Profile() {
    const params = useParams()
    console.log('params: ',params);
    const dispatch = useDispatch();
    const {user, token, token_type} = useSelector(state => state?.user);

    useEffect(() => {
        dispatch(getCurrentUser(token_type, token))
    }, [dispatch, token, token_type])

    useEffect(() => {
        if (user) dispatch(getProfileDetails(params?.user))
    }, [user, dispatch,params])

    return (
        <main className={styles.profile}>
            <ProfileHeader/>
            <ProfileBody/>
        </main>
    );
}

export default Profile;