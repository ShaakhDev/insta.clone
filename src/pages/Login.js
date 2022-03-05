import FormInputs from "../components/FormInputs";
import styles from '../styles/Auth.module.css'
import {Link} from 'react-router-dom'

function Login() {

    return (
        <form className={styles.auth}>
            <div style={{height: '65%'}} className={styles.box}>
                <img src={process.env.PUBLIC_URL + '/brand.webp'}
                     className={styles.brand} alt="brand"/>
                <FormInputs authType="LOGIN" button="login"/>
            </div>
            <p className={styles.questionText} >Don't have an account? <Link to="signup">Sign Up</Link></p>
        </form>
    );
}

export default Login;