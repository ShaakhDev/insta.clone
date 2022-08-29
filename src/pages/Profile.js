// import React, { useEffect, memo } from 'react';
import MetaLayout from '../components/layout/MetaLayout';
import { useParams } from 'react-router-dom';
import ProfileHeader from '../components/profile/profileHeader';
import ProfileBody from '../components/profile/profileBody';
import styles from '../styles/Profile.module.css';
import SkeletonProfile from '../components/profile/skeletonProfile';
import { useGetProfileDetailsQuery } from '../rtk/usersApi';

function Profile() {
    const params = useParams();
    const { data: profile, isLoading: profileIsLoading } =
        useGetProfileDetailsQuery(params?.user, 1);

    const _title = profile?.full_name
        ? `${profile?.full_name} (@${profile?.username}) • Instaclone photos`
        : `${profile?.username} • Instaclone photos`;

    const _description = profile?.bio
        ? `${profile?.bio}`
        : `${profile?.username} on Instaclone. Follow their account to see more posts.`;

    const meta = {
        title: _title,
        description: _description,
        image: profile?.avatar_url,
        ogTitle: _title,
        ogDescription: _description,
    };

    return (
        <MetaLayout {...meta}>
            <main className={styles.profile}>
                {profileIsLoading ? (
                    <SkeletonProfile />
                ) : (
                    <>
                        <ProfileHeader profile={profile} />
                        <ProfileBody profile={profile} />
                    </>
                )}
            </main>
        </MetaLayout>
    );
}

export default Profile;
