import Card from '@mui/material/Card';
import {muiStyles} from '../customMuiStyles'
import styles from '../../../styles/Card.module.css'
import {Skeleton} from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import React from "react";
import CardActions from "@mui/material/CardActions";


function SkeletonCard() {

    const LoaderSkeleton = () => {
        return (
            <div style={{padding: "0 1.6rem"}}>
                <Skeleton animation="wave" height={22} width={150} style={{marginBottom: 6}}/>
                <Skeleton animation="wave" height={22} style={{marginBottom: 6}}/>
                <Skeleton animation="wave" height={22} width={140} style={{marginBottom: 10}}/>
                <Skeleton animation="wave" height={22} width={70} style={{marginBottom: 10}}/>
            </div>
        )
    }
    return (
        <Card {...muiStyles.card} className={styles.card}>
            {/*header section of card*/}
            <CardHeader
                sx={{padding: "1.2rem 1.5rem"}}
                avatar={
                    <Skeleton animation="wave" variant="circular" width={40} height={40}/>
                }
                action={null}
                title={
                    <Skeleton
                        animation="wave"
                        height={10}
                        width="80%"
                        style={{marginBottom: 6}}
                    />}
            />
            {/*media section of card*/}
            <Skeleton sx={{height: 614}} animation="wave" variant="rectangular"/>
            {/*actions section of card*/}
            <CardActions sx={{paddingBottom: '0'}} disableSpacing>
                <Skeleton animation="wave" height={40} width={120} style={{marginLeft: 10}}/>
            </CardActions>
            {/*content section of card*/}
            <LoaderSkeleton/>
        </Card>
    );
}

export default SkeletonCard