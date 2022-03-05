import React, {useRef, useState, useEffect} from 'react';
import {
    Button,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField
} from "@mui/material";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import api from "../service/axios"

function FormInputs({authType, button}) {
    const [isDisableButton, setIsDisableButton] = useState(true)
    const usernameRef = useRef();
    const passRef = useRef();
    const emailRef = useRef();
    const avatarUrlRef = useRef();
    const username = usernameRef.current?.value
    const password = passRef.current?.value
    const email = emailRef.current?.value

    const [values, setValues] = useState({
        password: '',
        showPassword: false,
    });

    useEffect(() => {
        if ((username&&password.length > 7&&email) || (username&&password.length > 7)
        ) {
            setIsDisableButton(false)
        } else {
            setIsDisableButton(true)
        }
    },[username,password,email])

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
    const customStyles = {
        userNameInput: {
            InputProps: {
                style: {fontSize: '2rem'}
            },
            InputLabelProps: {
                style: {fontSize: '2rem'}
            },
            fullWidth: true,
            error: false,
            required: true
        },
        passwordInput: {
            fullWidth: true,
            error: false,
            required: true
        },
        label: {
            sx: {
                fontSize: '2rem'
            },
        },
        avatarUrlInput: {
            InputProps: {
                style: {fontSize: '2rem'}
            },
            InputLabelProps: {
                style: {fontSize: '2rem'}
            },
            fullWidth: true,
            error: false,
            required: false
        }

    }
    const signup = ()=>{
        const requestOptions = {
            username,
            email,
            password,
            avatar_url: ""
        }
        api.post('/user',requestOptions)
            .then(data=>{
                console.log(data)
                login()
            })
            .catch(err=>console.log(err))
    }
    const login=()=>{

    }
    const handleSubmit = () => {
        if (authType === "SIGNUP") {
            console.log('signup handle')
            signup()
        } else {
            console.log("login handle")

        }
    }

    return (
        <>
            <TextField {...customStyles.userNameInput} inputRef={usernameRef} id="outlined-required"
                       label='Username'/>
            {
                authType === 'SIGNUP' ?
                    <TextField
                        {...customStyles.userNameInput}
                        inputRef={emailRef}
                        label='Email'/> : ""
            }
            <FormControl {...customStyles.passwordInput} variant="outlined">
                <InputLabel {...customStyles.label}
                            htmlFor="outlined-adornment-password">Password</InputLabel>
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
                                {values.showPassword ? <VisibilityOff/> : <Visibility/>}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Password"
                />
            </FormControl>
            {
                authType === 'SIGNUP' ?
                    <TextField
                        {...customStyles.avatarUrlInput}
                        inputRef={avatarUrlRef}
                        label='Avatar Url'/> : ""
            }

            <Button fullWidth disabled={isDisableButton} onClick={handleSubmit} variant="contained">{button}</Button>
        </>
    );
}

export default FormInputs;