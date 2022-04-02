import React, {useState} from 'react';
import {Button, Stack} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import {muiStyles} from "../customMuiStyles";
import styles from '../../../styles/Card.module.css'

function AddComment(props) {
    const [inputValue,setInputValue]=useState('');

    const handleInput = (e)=>{
        setInputValue(e.target.value)
    }
    return (
        <>
            <CardContent className={styles.addComment} >
                <Stack {...muiStyles.stack}>
                    <input onChange={e=>handleInput(e)} value={inputValue} type="text" placeholder="Add a comment..."/>
                    <Button className={styles.post} disabled={inputValue===''} disableRipple={true} variant="text">Post</Button>
                </Stack>
            </CardContent>
        </>
    );
}

export default AddComment;