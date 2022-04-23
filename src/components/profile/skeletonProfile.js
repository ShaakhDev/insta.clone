import React from 'react';
import Box from "@mui/material/Box";
import styles from "../../styles/Profile.module.css";
import {Stack} from "@mui/material";
import {Skeleton} from "@mui/material";

function SkeletonProfile(props) {

    return (
        <>
            <Box className={styles.header}>
                <div className={styles.photo}>
                    <button>
                        <Skeleton variant="circular" width={'15rem'} height={"15rem"}/>
                    </button>
                </div>
                <section className={styles.info}>
                    <Stack direction="row" spacing={4}>
                        <Skeleton variant="text" height={50} width={400}/>
                    </Stack>
                    <Stack direction="row" mt={'2rem'} spacing={5}>
                        <Skeleton variant="text" width={350}/>
                    </Stack>
                </section>
            </Box>
        </>
    );
}

export default SkeletonProfile;