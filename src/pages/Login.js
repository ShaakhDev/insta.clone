import FormInputs from "../components/auth/FormInputs";
import styles from '../styles/Auth.module.css'
import {Link, useNavigate} from 'react-router-dom'
import {useEffect} from "react";
import {useSelector} from "react-redux";

function Login() {
    const {token,error} = useSelector(state => state?.user)
    const navigate = useNavigate();

    useEffect(() => {
        if (token) navigate('/', {replace: true})
    }, [token])


    return (
        <form className={styles.auth}>
            {
                error>499&&(
                    <div className={styles.error}>
                        <p>Serverda xatolik yuzaga keldi</p>
                    </div>
                )
            }
            <div style={{height: '65%'}} className={styles.box}>
                <img src={process.env.PUBLIC_URL + '/brand.webp'}
                     className={styles.brand} alt="brand"/>
                <FormInputs authType="LOGIN" button="login"/>
            </div>
            <p className={styles.questionText}>Don't have an account? <Link to="/accounts/signup">Sign Up</Link></p>
        </form>
    );
}

export default Login;