import React from 'react';
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

function Content({user,caption}) {
    return (
        <>
            <CardContent>
                <Typography  variant="body1" color="text.secondary">
                     <b>{user}</b> {caption}
                </Typography>
            </CardContent>
        </>
    );
}

export default Content;