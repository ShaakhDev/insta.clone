import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import {profileMuiStyles} from "./customMuiStyles";
import styles from '../../styles/Profile.module.css'
import {Button, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useSelector} from "react-redux";
import BasicModal from "../modals/editProfile";

function ProfileHeader() {
    const [isMyProfile,setIsMyProfile]=useState(false)
    const {profile,loading}=useSelector(state=>state?.profile);
    const {user}= useSelector(state=>state?.user)
    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => setOpenModal(true);

    useEffect(() => {
       if(user?.username===profile?.username)
           setIsMyProfile(true);
       else setIsMyProfile(false)
    }, [user?.username,profile?.username]);


    return (
        <>
            <BasicModal open={openModal} setOpen={setOpenModal}/>
            <Box className={styles.header}>
                <div className={styles.photo}>
                    <button onClick={isMyProfile? handleOpenModal:null} title="Change profile image">
                        <img  src={profile?.avatar_url||(process.env.PUBLIC_URL + 'avatar.webp')} alt='profile'/>
                    </button>
                </div>
                <section className={styles.info}>
                    <Stack  direction="row" spacing={4}>
                        <Typography variant='h2'>
                            {profile?.username}
                        </Typography>
                        {isMyProfile&&(
                            <Button onClick={handleOpenModal}   title="edit your profile" {...profileMuiStyles.editButton} >
                                edit profile
                            </Button>
                        )}
                        {!isMyProfile&&(
                            <Button {...profileMuiStyles.followButton}>
                                follow
                            </Button>
                        )}
                    </Stack>
                    <Stack direction="row" mt={'2rem'} spacing={5}>
                        <Typography variant='h5'>
                            <b>{profile?.items?.length}</b> post
                        </Typography>
                        <Typography variant='h5'>
                            <b>{profile?.subscribers}</b> followers
                        </Typography>

                    </Stack>
                </section>


            </Box>
        </>
    );
}

export default ProfileHeader;