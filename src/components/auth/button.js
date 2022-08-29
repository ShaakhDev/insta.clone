import { WhiteSpinner } from '../spinner';
import styles from 'styles/Auth.module.css';

function Button({
    button,
    isDisable,
    handleSubmit,
    loginIsLoading,
    signUpIsLoading,
}) {
    return (
        <button
            disabled={isDisable}
            onClick={handleSubmit}
            className={styles.submit}
        >
            {loginIsLoading || signUpIsLoading ? <WhiteSpinner /> : button}
        </button>
    );
}

export default Button;
