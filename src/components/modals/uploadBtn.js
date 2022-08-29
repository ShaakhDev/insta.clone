import * as React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

const Input = styled('input')({
    display: 'none',
});

export default function UploadButton({ getValue }) {
    const onFileChange = (e) => {
        getValue(e.target.files[0]);
    };
    return (
        <Stack direction="row" alignItems="center" spacing={2}>
            <label htmlFor="icon-button-file">
                <Input
                    onChange={onFileChange}
                    accept="image/*"
                    id="icon-button-file"
                    type="file"
                />
                <IconButton
                    size="large"
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                >
                    <PhotoCamera fontSize="large" />
                </IconButton>
            </label>
        </Stack>
    );
}
