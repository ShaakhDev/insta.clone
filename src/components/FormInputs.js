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
import {customStyles} from './customMuiStyles';
import {useDispatch} from "react-redux";
import {signUp,login} from "../store/actions/userActions";


function FormInputs({authType, button}) {
    const [isDisableButton, setIsDisableButton] = useState(true)
    const dispatch = useDispatch()
    const usernameRef = useRef();
    const passRef = useRef();
    const emailRef = useRef();
    const avatarUrlRef = useRef();
    const username = usernameRef.current?.value
    const password = passRef.current?.value
    const email = emailRef.current?.value
    const avatar_url = avatarUrlRef.current?.value

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

    const signUpHandle = ()=>{
        const formData = {
            username,
            email,
            password,
            avatar_url,
        }
        dispatch(signUp(formData))
        loginHandle()
    }

    const loginHandle = ()=>{
        const formData = new FormData();
        formData.append('username',username);
        formData.append('password',password);
        dispatch(login(formData))
    }
    const handleSubmit = () => {
        if (authType === "SIGNUP") {
          signUpHandle()
        } else {
          loginHandle()
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