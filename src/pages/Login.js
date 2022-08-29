import FormInputs from '../components/auth/FormInputs';
import styles from '../styles/Auth.module.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Brand from 'brand';
import nprogress from 'nprogress';

function Login() {
    useEffect(() => {
        setTimeout(() => {
            nprogress.done();
        }, 1000);
    }, []);

    return (
        <form className={styles.auth}>
            <div style={{ height: '65%' }} className={styles.box}>
                <Brand size={8} />
                <FormInputs authType="LOGIN" button="login" />
            </div>
            <p className={styles.questionText}>
                Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
        </form>
    );
}

export default Login;
