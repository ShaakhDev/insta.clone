import React, {useEffect, useRef} from 'react';
import {TextField} from "@mui/material";
import {customStyles} from "./customMuiStyles";

function AvatarUrl({getValue}) {
    const avatarUrlRef = useRef();
    const avatar_url = avatarUrlRef.current?.value;

    useEffect(() => {
        getValue(avatar_url)
    })

    return (
        <>
            <TextField
                {...customStyles.avatarUrlInput}
                inputRef={avatarUrlRef}
                label='Avatar Url'
            />
        </>
    );
}

export default AvatarUrl;