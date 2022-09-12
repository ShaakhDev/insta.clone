import React from 'react';
import WarningIcon from '@mui/icons-material/Warning';
import styles from '../styles/MainHeader.module.css';

function Warning({ onClick }) {
    return (
        <div className={styles.warning}>
            <span>
                <WarningIcon color="warning" />
            </span>
            <div>
                <p className={styles.attention}>Attention!!!</p>
                <p>
                    This website is clone of the Instagram. Please, don't enter
                    your original Instagram credentials!
                </p>
            </div>
            <div>
                <button className={styles.ok} onClick={onClick}>
                    Ok
                </button>
            </div>
        </div>
    );
}

export default Warning;
