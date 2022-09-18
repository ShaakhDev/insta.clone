import React, { useEffect, useRef } from 'react';
import styles from '../../styles/Auth.module.css';

function Username({ getValue, showWarning }) {
    const usernameRef = useRef();
    const username = usernameRef.current?.value
        ?.toLowerCase()
        .trim()
        .replace(/\s/g, '_');

    useEffect(() => {
        getValue(username);
    });
    return (
        <>
            <input
                type="text"
                ref={usernameRef}
                required
                placeholder="Username"
                className={showWarning ? styles.warnInput : ''}
            />
        </>
    );
}

export default Username;
