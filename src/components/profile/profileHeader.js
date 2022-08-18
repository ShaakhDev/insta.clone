import React, { useEffect, useState } from 'react';
import Box from "@mui/material/Box";
import { profileMuiStyles } from "./customMuiStyles";
import styles from '../../styles/Profile.module.css'
import { Button, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import BasicModal from "../modals/editProfileModal";
import Popup from "../popup";
import nprogress from 'nprogress';
import { WhiteSpinner, GraySpinner } from '../spinner';
import { isMobile, isDesktop } from 'react-device-detect';
import {
    useSubscribeMutation,
    useGetProfileSubscriptionsQuery
} from '../../rtk/usersApi'

function ProfileHeader({ profile }) {
    const { data: mySubscriptions, isLoading: subsIsLoading } = useGetProfileSubscriptionsQuery(1);
    const [subscribe, { isLoading }] = useSubscribeMutation();
    const [showPopup, setShowPopup] = useState(false)
    const [isMyProfile, setIsMyProfile] = useState(false)
    const [openModal, setOpenModal] = useState(false);
    const token = localStorage.getItem('access_token')
    const user = localStorage.getItem('user');




    const handleOpenModal = () => setOpenModal(true);

    const handleFollow = () => {
        if (!token) {
            setShowPopup(true);
            setTimeout(() => {
                setShowPopup(false)
            }, 3500)
        } else {
            subscribe(profile?.username)
        }
    }
    const handleUnfollow = () => {
        subscribe(profile?.username)

    }
    useEffect(() => {
        setTimeout(() => {
            nprogress.done()
        }, 1000);
    }, [])



    useEffect(() => {
        if (user === profile?.username)
            setIsMyProfile(true);
        else setIsMyProfile(false)


    }, [user, profile]);



    return (
        <>
            {showPopup && <Popup text="Login or signup to follow " />}
            <BasicModal
                open={openModal}
                setOpen={setOpenModal}
                profile={profile}
            />
            <Box
                className={styles.header}>

                <div className={styles.photo}>
                    <button
                        onClick={
                            isMyProfile
                                ? handleOpenModal
                                : null
                        }
                        title="Change profile image">
                        <img
                            src={profile?.avatar_url || (process.env.PUBLIC_URL + 'avatar.webp')}
                            alt='profile' />
                    </button>
                </div>
                {isDesktop &&
                    <section className={styles.info}>
                        <Stack
                            direction="row"
                            spacing={4}>
                            <Typography
                                variant='h3'>
                                {profile?.username}
                            </Typography>
                            {isMyProfile && (
                                <Button
                                    onClick={handleOpenModal}
                                    title="edit your profile" {...profileMuiStyles.editButton} >
                                    edit profile
                                </Button>
                            )}
                            {!isMyProfile && (
                                mySubscriptions
                                    ?.some(sub => sub.username === profile.username)
                                    ? (
                                        <Button
                                            onClick={handleUnfollow}
                                            {...profileMuiStyles.editButton} >
                                            {(isLoading || subsIsLoading)
                                                ? <GraySpinner />
                                                : 'followed'}

                                        </Button>
                                    )
                                    : (
                                        <Button
                                            onClick={handleFollow}
                                            {...profileMuiStyles.followButton}>
                                            {(isLoading || subsIsLoading)
                                                ? <WhiteSpinner />
                                                : 'follow'}
                                        </Button>
                                    )
                            )}
                        </Stack>
                        <Stack
                            direction="row"
                            mt={'2rem'}
                            spacing={5}>
                            <Typography
                                variant='h5'
                            >
                                <b>{profile?.items?.length}</b> post
                            </Typography>
                            <Typography
                                variant='h5'>
                                <b>{profile?.subscribers}</b> followers
                            </Typography>
                            {isMyProfile
                                && <Typography
                                    variant='h5'
                                >
                                    <b>{mySubscriptions?.length || 0}</b> following
                                </Typography>}

                        </Stack>
                        <Stack
                            direction="row"
                            mt={'2rem'}>
                            <Typography
                                variant='h6'>
                                {profile?.full_name && profile?.full_name}
                            </Typography>
                        </Stack>
                        <Stack
                            direction="row"
                            mt={'2rem'}>
                            <Typography
                                variant='h5'>
                                {profile?.bio && profile?.bio}
                            </Typography>
                        </Stack>
                    </section>
                }

                {/* The section for MOBILE view */}

                {isMobile &&
                    <section className={styles.info}>
                        <Stack
                            direction="column"
                            spacing={4}>
                            <Typography
                                variant='h3'>
                                {profile?.username}
                            </Typography>
                            {isMyProfile && (
                                <Button
                                    onClick={handleOpenModal}
                                    title="edit your profile" {...profileMuiStyles.editButton} >
                                    edit profile
                                </Button>
                            )}
                            {!isMyProfile && (
                                mySubscriptions
                                    ?.some(sub => sub.username === profile.username)
                                    ? (
                                        <Button
                                            onClick={handleUnfollow}
                                            {...profileMuiStyles.editButton} >
                                            {(isLoading || subsIsLoading)
                                                ? <GraySpinner />
                                                : 'followed'}

                                        </Button>
                                    )
                                    : (
                                        <Button
                                            onClick={handleFollow}
                                            {...profileMuiStyles.followButton}>
                                            {(isLoading || subsIsLoading)
                                                ? <WhiteSpinner />
                                                : 'follow'}
                                        </Button>
                                    )
                            )}
                        </Stack>

                        <Stack
                            direction="row"
                            mt={'2rem'}>
                            <Typography
                                variant='h6'>
                                {profile?.full_name && profile?.full_name}
                            </Typography>
                        </Stack>
                        <Stack
                            direction="row"
                            mt={'2rem'}>
                            <Typography
                                variant='h5'>
                                {profile?.bio && profile?.bio}
                            </Typography>
                        </Stack>

                    </section>
                }
                {isMobile
                    && <Stack
                        direction="row"
                        mt={'2rem'}
                        spacing={5}
                        width='100%'
                        sx={{
                            display: 'flex',
                            borderTop: '1.5px solid #dbdbdb',
                            justifyContent: 'space-evenly',
                            textAlign: 'center',
                            padding: '1rem 0  0'
                        }}
                    >

                        <Typography
                            variant='h5'
                        >
                            <b>{profile?.items?.length}</b>
                            <p style={{ color: 'rgb(142,142,142)' }}>post</p>
                        </Typography>
                        <Typography
                            variant='h5'>
                            <b>{profile?.subscribers}</b>
                            <p style={{ color: 'rgb(142,142,142)' }}>followers</p>
                        </Typography>
                        {isMyProfile
                            && <Typography
                                variant='h5'
                            >
                                <b>{mySubscriptions?.length || 0}</b>
                                <p style={{ color: 'rgb(142,142,142)' }}>following</p>
                            </Typography>}

                    </Stack>
                }
            </Box>
        </>
    );
}

export default ProfileHeader;


