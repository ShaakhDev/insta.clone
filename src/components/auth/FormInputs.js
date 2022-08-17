import { useState, useEffect } from 'react';
import { useLoginMutation, useSignUpMutation } from '../../rtk/usersApi';
import Button from "./button";
import Username from "./username";
import Password from "./password";
import Email from "./email";
import { useNavigate } from 'react-router-dom'
import { WhiteSpinner } from '../spinner';
import styles from '../../styles/Auth.module.css'


function FormInputs({ authType, button }) {
    const [login, {
        data: loginData,
        isSuccess: loginIsSuccess,
        isLoading: loginIsLoading,
        isError: loginIsError,
        error: loginError
    }] = useLoginMutation();
    const [signUp, { isSuccess: signUpIsSuccess, isLoading: signUpIsLoading }] = useSignUpMutation();
    const [isDisableButton, setIsDisableButton] = useState(true)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('');
    const [showWarning, setShowWarning] = useState(false);
    const [warningMessage, setWarningMessage] = useState('');

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
    }, [loginIsSuccess])

    useEffect(() => {
        if (loginIsError) {
            setShowWarning(true)
            console.log(loginError)
            setWarningMessage(loginError?.data?.detail)
        }
    }, [loginIsError])


    const signUpHandle = () => {

        const formData = {
            username,
            email,
            password,
            avatar_url: ""
        }
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
            <Username showWarning={showWarning} getValue={data => setUsername(data)} />

            {authType === 'SIGNUP' ? <Email showWarning={showWarning} getValue={data => setEmail(data)} /> : ""}

            <Password showWarning={showWarning} getValue={data => setPassword(data)} />

            {showWarning ? <Warning message={warningMessage} /> : ""}

            <Button
                loginIsLoading={loginIsLoading}
                signUpIsLoading={signUpIsLoading}
                button={button}
                isDisable={isDisableButton}
                handleSubmit={handleSubmit}
            >
                {loginIsLoading || signUpIsLoading ? (<WhiteSpinner />) : button}
            </Button>
        </>
    );
}


const Warning = ({ message }) => {

    return (
        <div className={styles.warning}>
            <p>{message}</p>
        </div>
    )
}
export default FormInputs;