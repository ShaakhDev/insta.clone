import FormInputs from "../components/auth/FormInputs";
import styles from '../styles/Auth.module.css'
import {Link, useNavigate} from 'react-router-dom'
import {useSelector} from "react-redux";
import {useEffect} from "react";


function SignUp() {
    const {token} =useSelector(state=>state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if(token )navigate('/',{replace:true})

    },[token,navigate])

    return (
        <form className={styles.auth}>
            <div style={{height: "95%"}} className={styles.box}>
                <img src={process.env.PUBLIC_URL + '/brand.webp'}
                     className={styles.brand} alt="brand"/>
                <FormInputs authType='SIGNUP' button="sign up" />
            </div>
            <p className={styles.questionText} >Already have an account? <Link to="/accounts/login">Login</Link></p>
        </form>
    );
}

export default SignUp;