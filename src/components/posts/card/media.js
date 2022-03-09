import React from 'react';
import CardMedia from "@mui/material/CardMedia";

function Media({img}) {
    return (
        <>
            <CardMedia
                component="img"
                height="100%"
                image={img || process.env.PUBLIC_URL + "/avatar.webp"}
                alt="post"
            />
        </>
    );
}

export default Media;