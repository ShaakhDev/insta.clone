import React, { useEffect } from 'react';
import Layout from '../components/layout/MainHeader';
import { useParams } from "react-router-dom";
import ProfileHeader from "../components/profile/profileHeader";
import ProfileBody from "../components/profile/profileBody";
import styles from '../styles/Profile.module.css'
import { useSelector } from "react-redux";

import SkeletonProfile from "../components/profile/skeletonProfile";
import {
    useGetProfileDetailsQuery,
    useGetProfileSubscriptionsMutation
} from '../rtk/usersApi';



function Profile() {
    const params = useParams()
    const { token } = useSelector(state => state?.auth);
    const { user } = useSelector(state => state?.auth);
    const [getProfileSubscriptions, { data: mySubscriptions, isLoading: subsIsLoading }] = useGetProfileSubscriptionsMutation(1);
    // const [getProfileDetails, { data: profile, isLoading: profileIsLoading }] = useGetProfileDetailsMutation(1);
    const { data: profile, isLoading: profileIsLoading } = useGetProfileDetailsQuery(params?.user, 1)

    useEffect(() => {
        if (token && user) {
            getProfileSubscriptions()
        }
    }, [token, getProfileSubscriptions, user]);





    // if (error > 499) {
    //     return (
    //         <h1>
    //             Serverda xatolik yuz berdi!!!
    //         </h1>
    //     )
    // }

    return (
        <Layout>
            <main className={styles.profile}>
                {profileIsLoading || subsIsLoading ? (<SkeletonProfile />
                ) : (<>
                    <ProfileHeader mySubscriptions={mySubscriptions} profile={profile} />
                    <ProfileBody profile={profile} />
                </>)}
            </main>
        </Layout>
    );
}

export default Profile;