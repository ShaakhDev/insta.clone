import React from 'react';
import Box from "@mui/material/Box";
import {profileMuiStyles} from "./customMuiStyles";
import styles from '../../styles/Profile.module.css'
import {Button, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";

function ProfileHeader({user}) {
    return (
        <>
            <Box className={styles.header}>
                <div className={styles.photo}>
                    <button>
                        <img  src={process.env.PUBLIC_URL + 'avatar.webp'} alt='profile phot'/>
                    </button>
                </div>
                <section className={styles.info}>
                    <Stack direction="row" spacing={4}>
                        <Typography variant='h2'>
                            username
                        </Typography>
                        <Button {...profileMuiStyles.editButton} >
                            edit profile
                        </Button>
                    </Stack>
                    <Stack direction="row" mt={'2rem'} spacing={5}>
                        <Typography variant='h5'>
                            <b>1</b> post
                        </Typography>
                        <Typography variant='h5'>
                            <b>93</b> followers
                        </Typography>
                        {/*<Typography variant='h5'>*/}
                        {/*    <b>123</b> following*/}
                        {/*</Typography>*/}
                    </Stack>
                </section>


            </Box>
        </>
    );
}

export default ProfileHeader;