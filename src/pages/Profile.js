import React from 'react';
import ProfileHeader from "../components/profile/profileHeader";
import ProfileBody from "../components/profile/profileBody";
import styles from '../styles/Profile.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getProfileDetails} from "../store/actions/postActions";

function Profile() {
    const dispatch = useDispatch();
   const {token} = useSelector(state=>state.user);
   console.log(token)
    return (
        <main className={styles.profile}>
            <ProfileHeader />
            <ProfileBody/>
        </main>
    );
}

export default Profile;