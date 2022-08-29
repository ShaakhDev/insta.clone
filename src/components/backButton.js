import React from 'react';
import { Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import styles from '../styles/CurrentPost.module.css';
import { useNavigate } from 'react-router-dom';

function BackButton() {
    const navigate = useNavigate();
    return (
        <Button onClick={() => navigate(-1)} className={styles.backButton}>
            <ArrowBackIosIcon />
        </Button>
    );
}

export default BackButton;
