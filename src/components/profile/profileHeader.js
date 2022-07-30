import React, { useEffect, useState } from 'react';
import Box from "@mui/material/Box";
import { profileMuiStyles } from "./customMuiStyles";
import styles from '../../styles/Profile.module.css'
import { Button, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import BasicModal from "../modals/editProfileModal";
import Popup from "../popup";
// import { useGetProfileDetailsMutation } from '../../rtk/profilesApi'

function ProfileHeader({ mySubscriptions, profile }) {
    const [showPopup, setShowPopup] = useState(false)
    const [isMyProfile, setIsMyProfile] = useState(false)
    const { token } = useSelector(state => state?.auth);
    const { user } = useSelector(state => state?.auth);
    const [openModal, setOpenModal] = useState(false);
    const isFollowed = mySubscriptions?.some(sub => sub.username === profile?.username)



    const handleOpenModal = () => setOpenModal(true);
    const handleFollow = () => {
        if (!token) {
            setShowPopup(true);
            setTimeout(() => {
                setShowPopup(false)
            }, 3500)
        }
    }

    useEffect(() => {
        if (user === profile?.username)
            setIsMyProfile(true);
        else setIsMyProfile(false)
        return () => setIsMyProfile(false);

    }, [user, profile?.username]);



    return (
        <>
            {showPopup && <Popup text="Login or signup to follow " />}
            <BasicModal open={openModal} setOpen={setOpenModal} profile={profile} />
            <Box className={styles.header}>
                <div className={styles.photo}>
                    <button onClick={isMyProfile ? handleOpenModal : null} title="Change profile image">
                        <img src={profile?.avatar_url || (process.env.PUBLIC_URL + 'avatar.webp')} alt='profile' />
                    </button>
                </div>
                <section className={styles.info}>
                    <Stack direction="row" spacing={4}>
                        <Typography variant='h3'>
                            {profile?.username}
                        </Typography>
                        {isMyProfile && (
                            <Button onClick={handleOpenModal}
                                title="edit your profile" {...profileMuiStyles.editButton} >
                                edit profile
                            </Button>
                        )}
                        {!isMyProfile && (
                            isFollowed ? (
                                <Button
                                    title="edit your profile" {...profileMuiStyles.editButton} >
                                    followed
                                </Button>
                            ) : (
                                <Button onClick={handleFollow} {...profileMuiStyles.followButton}>
                                    follow
                                </Button>
                            )
                        )}
                    </Stack>
                    <Stack direction="row" mt={'2rem'} spacing={5}>
                        <Typography variant='h5'>
                            <b>{profile?.items?.length}</b> post
                        </Typography>
                        <Typography variant='h5'>
                            <b>{profile?.subscribers}</b> followers
                        </Typography>
                        {isMyProfile && <Typography variant='h5'>
                            <b>{mySubscriptions?.length || 0}</b> following
                        </Typography>}

                    </Stack>
                    <Stack direction="row" mt={'2rem'}>
                        <Typography variant='h6'>
                            {profile?.full_name && profile?.full_name}
                        </Typography>
                    </Stack>
                    <Stack direction="row" mt={'2rem'}>
                        <Typography variant='h5'>
                            {profile?.bio && profile?.bio}
                        </Typography>
                    </Stack>
                </section>


            </Box>
        </>
    );
}

export default ProfileHeader;