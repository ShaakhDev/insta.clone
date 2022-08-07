import React, { useEffect, memo } from 'react';
import Layout from '../components/layout/MainHeader';
import { useParams } from "react-router-dom";
import ProfileHeader from "../components/profile/profileHeader";
import ProfileBody from "../components/profile/profileBody";
import styles from '../styles/Profile.module.css'
import SkeletonProfile from "../components/profile/skeletonProfile";
import {
    useGetProfileDetailsQuery,
} from '../rtk/usersApi';



function Profile() {
    const params = useParams()
    const { data: profile, isLoading: profileIsLoading } = useGetProfileDetailsQuery(params?.user, 1)

    return (
        <Layout>
            <main className={styles.profile}>
                {profileIsLoading ? (<SkeletonProfile />
                ) : (<>
                    <ProfileHeader profile={profile} />
                    <ProfileBody profile={profile} />
                </>)}
            </main>
        </Layout>
    );
}

export default Profile;