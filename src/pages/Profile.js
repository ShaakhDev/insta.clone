import React from 'react';
import ProfileHeader from "../components/profile/profileHeader";
import ProfileBody from "../components/profile/profileBody";
import styles from '../styles/Profile.module.css'
function Profile() {

    return (
        <main className={styles.profile}>
            <ProfileHeader/>
            <ProfileBody/>
        </main>
    );
}

export default Profile;