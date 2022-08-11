import React, { useEffect, useRef, useState } from 'react';
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import styles from '../../styles/Auth.module.css'


function Password({ getValue, showWarning }) {
    const passRef = useRef();
    const password = passRef.current?.value
    const [values, setValues] = useState({
        password: '',
        showPassword: false,
    });

    useEffect(() => {
        getValue(password)
    })

    const handlePasswordChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = (e) => {
        e.preventDefault()
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    return (
        <>
            <div className={styles.passwordBox}>
                <input
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handlePasswordChange('password')}
                    ref={passRef}
                    required
                    className={showWarning ? styles.warnInput : ""}
                    placeholder="Password"
                />
                <button
                    onClick={handleClickShowPassword}
                    className={styles.showPassword}
                >
                    {values.showPassword
                        ? <VisibilityOff
                            fontSize='large'
                            color="action"
                        />
                        : <Visibility
                            fontSize='large'
                            color="action"
                        />}
                </button>
            </div>
        </>
    );
}

export default Password;