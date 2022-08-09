import { useState, useEffect } from 'react';
import { useLoginMutation, useSignUpMutation } from '../../rtk/usersApi';
import { Button } from "@mui/material";
import Username from "./username";
import Password from "./password";
import Email from "./email";
import { useNavigate } from 'react-router-dom'
import { WhiteSpinner } from '../spinner';




function FormInputs({ authType, button }) {
    const [login, { data: loginData, isSuccess: loginIsSuccess, isLoading: loginIsLoading }] = useLoginMutation();
    const [signUp, { isSuccess: signUpIsSuccess, isLoading: signUpIsLoading }] = useSignUpMutation();
    const [isDisableButton, setIsDisableButton] = useState(true)
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()

    const navigate = useNavigate()

    useEffect(() => {
        if (
            (username && password?.length > 7 && email) ||
            (username && password?.length > 7)
        ) setIsDisableButton(false);
        else setIsDisableButton(true);
    }, [username, password, email])

    useEffect(() => {
        if (signUpIsSuccess) {
            loginHandle()
        }
    }, [signUpIsSuccess])

    useEffect(() => {
        if (loginIsSuccess) {
            localStorage.setItem('access_token', loginData?.access_token)
            localStorage.setItem('user', loginData?.username)
            localStorage.setItem('user_id', loginData?.user_id)
            console.log(loginData)
            navigate('/')
        }
    })

    const signUpHandle = () => {

        const formData = {
            username,
            email,
            password,
            avatar_url: ""
        }
        console.log(formData)
        signUp(formData)
    }

    const loginHandle = () => {
        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);
        login(formData)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (authType === "SIGNUP") signUpHandle();
        else loginHandle();
    }

    return (
        <>
            <Username getValue={data => setUsername(data)} />

            {authType === 'SIGNUP' ? <Email getValue={data => setEmail(data)} /> : ""}

            <Password getValue={data => setPassword(data)} />



            <Button
                fullWidth
                disabled={isDisableButton}
                onClick={handleSubmit}
                variant="contained"
            >
                {loginIsLoading || signUpIsLoading ? (<WhiteSpinner />) : button}
            </Button>
        </>
    );
}

export default FormInputs;