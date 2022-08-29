import React from 'react';
import styles from './styles/Auth.module.css';
function Brand({ size }) {
    return (
        <p style={{ fontSize: `${size}rem` }} className={styles.brand}>
            Instaclone
        </p>
    );
}

export default Brand;
