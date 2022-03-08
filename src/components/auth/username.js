import React, {useEffect, useRef} from 'react';
import {TextField} from "@mui/material";
import {customStyles} from "./customMuiStyles";

function Username({getValue}) {
    const usernameRef = useRef();
    const username = usernameRef.current?.value
    useEffect(() => {
        getValue(username)
    })
    return (
        <>
            <TextField
                {...customStyles.userNameInput}
                inputRef={usernameRef}
                id="outlined-required"
                label='Username'
            />
        </>
    );
}

export default Username;