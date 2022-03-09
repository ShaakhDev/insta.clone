import React from 'react';
import {Button, Stack} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import {muiStyles} from "../customMuiStyles";

function AddComment(props) {
    return (
        <>
            <CardContent>
                <Stack {...muiStyles.stack}>
                    <input style={{width:'100%',border:"none", outline:"none"}} type="text" placeholder="Add a comment..."/>
                    <Button  disableRipple={true} variant="text">Post</Button>
                </Stack>
            </CardContent>
        </>
    );
}

export default AddComment;