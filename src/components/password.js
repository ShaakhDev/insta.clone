import React, {useEffect, useRef, useState} from 'react';
import {FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput} from "@mui/material";
import {customStyles} from "./customMuiStyles";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";

function Password({getValue}) {
    const passRef = useRef();
    const password = passRef.current?.value
    const [values, setValues] = useState({
        password: '',
        showPassword: false,
    });

    useEffect(() => {
        getValue(password)
    })

    const handlePasswordChange = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value});
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <>
            <FormControl
                {...customStyles.passwordInput}
                variant="outlined"
            >
                <InputLabel
                    {...customStyles.label}
                    htmlFor="outlined-adornment-password"
                >Password</InputLabel>
                <OutlinedInput
                    {...customStyles.passwordInput}
                    {...customStyles.label}
                    id="outlined-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    inputRef={passRef}
                    onChange={handlePasswordChange('password')}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {values.showPassword ?
                                    <VisibilityOff
                                        fontSize='large'
                                        color="action"
                                    /> :
                                    <Visibility
                                        fontSize='large'
                                        color="action"
                                    />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Password"
                />
            </FormControl>
        </>
    );
}

export default Password;