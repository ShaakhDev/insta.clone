import FormInputs from "../components/FormInputs";
import styles from '../styles/Auth.module.css'
import {Link} from 'react-router-dom'

function SignUp() {

    return (
        <form className={styles.auth}>
            <div style={{height: "95%"}} className={styles.box}>
                <img src={process.env.PUBLIC_URL + '/brand.webp'}
                     className={styles.brand} alt="brand"/>
                <FormInputs authType='SIGNUP' button="sign up" />
            </div>
            <p className={styles.questionText} >Already have an account? <Link to='/'>Login</Link></p>
        </form>
    );
}

export default SignUp;