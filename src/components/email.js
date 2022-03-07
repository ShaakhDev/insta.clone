import React, {useEffect, useRef} from 'react';
import {customStyles} from "./customMuiStyles";
import {TextField} from "@mui/material";

function Email({getValue}) {
    const emailRef = useRef();
    const email = emailRef.current?.value;

    useEffect(() => {
        getValue(email)
    })

    return (
        <>
            <TextField
                {...customStyles.userNameInput}
                inputRef={emailRef}
                label='Email'
            />
        </>
    );
}

export default Email;