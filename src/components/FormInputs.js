import { useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {signUp, login} from "../store/actions/userActions";
import {Button} from "@mui/material";
import AvatarUrl from "./avatar_url";
import Username from "./username";
import Password from "./password";
import Email from "./email";
import Loader from './loader'

function FormInputs({authType, button}) {
    const [isDisableButton, setIsDisableButton] = useState(true)
    const dispatch = useDispatch()
    const {registered, loading} = useSelector(state => state?.user)
    const [avatar_url, setAvatarUrl] = useState()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()

    useEffect(() => {
        if (
            (username && password?.length > 7 && email) ||
            (username && password?.length > 7)
        ) setIsDisableButton(false);
        else setIsDisableButton(true);
    }, [username, password, email])


    useEffect(() => {
        console.log('loading: ' + loading)
    }, [loading])


    useEffect(() => {
        if (registered) loginHandle()
    }, [registered])


    const signUpHandle = () => {
        const formData = {
            username,
            email,
            password,
            avatar_url,
        }
        dispatch(signUp(formData))
    }

    const loginHandle = () => {
        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);
        dispatch(login(formData))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (authType === "SIGNUP") signUpHandle();
        else loginHandle();
    }

    return (
        <>
            <Username getValue={data => setUsername(data)}/>

            {authType === 'SIGNUP' ? <Email getValue={data => setEmail(data)}/> : ""}

            <Password getValue={data => setPassword(data)}/>

            {authType === 'SIGNUP' ? <AvatarUrl getValue={data => setAvatarUrl(data)}/> : ""}

            <Button
                fullWidth
                disabled={isDisableButton}
                onClick={handleSubmit}
                variant="contained"
            >
                {loading ? (<Loader/>) : button}
            </Button>
        </>
    );
}

export default FormInputs;