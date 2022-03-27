import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import {useEffect, useRef} from "react";

const Input = styled('input')({
    display: 'none',
});

export default function UploadButton({getValue}) {
    const imgRef = useRef();

   const onFileChange = (e)=>{
        getValue(e.target.files[0])
   }
    return (
        <Stack direction="row" alignItems="center" spacing={2}>

            <label htmlFor="icon-button-file">
                <Input ref={imgRef} onChange={onFileChange} accept="image/*" id="icon-button-file" type="file" />
                <IconButton size="large" color="primary" aria-label="upload picture" component="span">
                    <PhotoCamera fontSize='large'/>
                </IconButton>
            </label>
        </Stack>
    );
}