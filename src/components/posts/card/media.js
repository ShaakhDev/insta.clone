import React from 'react';
import CardMedia from "@mui/material/CardMedia";
import {useSelector} from 'react-redux'
import {Skeleton} from "@mui/material";

function Media({img}) {
    const {loading} = useSelector(state=>state?.post)
    return (
        <>
            {
                loading ? (
                    <Skeleton sx={{ height: 614 }} animation="wave" variant="rectangular" />
                ) : (
                    <CardMedia
                        component="img"
                        height="614rem"
                        image={img || process.env.PUBLIC_URL + "/avatar.webp"}
                        alt="post"
                    />
                )
            }
        </>
    );
}

export default Media;