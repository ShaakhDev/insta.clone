import React from 'react';
import styles from "../../styles/CurrentPost.module.css";
import Card from "@mui/material/Card";
import { muiStyles } from "./customMuiStyles";
import Box from "@mui/material/Box";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { Skeleton } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import { BrowserView, MobileView } from 'react-device-detect';


function SkeletonCurrentPost() {
    return (
        <>
            <BrowserView>
                <div className={styles.home}>
                    <div className={styles.box}>
                        <Card {...muiStyles.card}>
                            <Box {...muiStyles.box1}>
                                <Skeleton variant='rectangular' height="598rem" />
                            </Box>
                            <Box {...muiStyles.box2}>
                                <CardHeader
                                    {...muiStyles.header}
                                    avatar={<Skeleton variant="circular" width={32} height={32} />}
                                    title={<Skeleton variant="text" />}
                                />

                                <Box className={styles.comments}>
                                    <Skeleton variant="text" />
                                </Box>
                                <CardContent className={styles.content}>
                                    <CardActions sx={{ paddingBottom: '0' }} disableSpacing>
                                        <Skeleton height={40} width={120} style={{ marginLeft: 10 }} />
                                    </CardActions>
                                    <div style={{ padding: "0 1.6rem" }}>
                                        <Skeleton height={22} width={150} style={{ marginBottom: 6 }} />
                                        <Skeleton height={22} style={{ marginBottom: 6 }} />
                                        <Skeleton height={22} width={140} style={{ marginBottom: 10 }} />
                                        <Skeleton height={22} width={70} style={{ marginBottom: 10 }} />
                                    </div>
                                </CardContent>
                            </Box>
                        </Card>
                    </div>
                </div>
            </BrowserView>


            <MobileView>
                <Card {...muiStyles.card}>

                    <Box {...muiStyles.box2}>
                        <CardHeader
                            {...muiStyles.header}
                            avatar={<Skeleton variant="circular" width={32} height={32} />}
                            title={<Skeleton variant="text" />}
                        />

                        <Box className={styles.comments}>
                            <Skeleton variant="text" />
                        </Box>

                    </Box>
                </Card>

            </MobileView>
        </>
    );
}

export default SkeletonCurrentPost;