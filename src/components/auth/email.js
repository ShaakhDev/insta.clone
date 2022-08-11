import React, { useEffect, useRef } from 'react';
import styles from '../../styles/Auth.module.css'

function Email({ getValue, showWarning }) {
    const emailRef = useRef();
    const email = emailRef.current?.value;

    useEffect(() => {
        getValue(email)
    })

    return (
        <>

            <input
                type="text"
                placeholder='Email'
                ref={emailRef}
                required
                className={showWarning ? styles.warnInput : ''}
            />
        </>
    );
}

export default Email;