import React from 'react';
import styles from "../styles/Popup.module.css";

function Popup({text}) {
    return (
        <div className={styles.popup}>{text}</div>
    );
}

export default Popup;