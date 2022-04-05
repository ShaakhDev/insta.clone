import React, {useRef, useState} from 'react';
import {Button, Stack} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import {muiStyles} from "../customMuiStyles";
import styles from '../../../styles/Card.module.css'
import EmojiPicker from "emoji-picker-react";
import emojiBtn from "./emojiBtn";
import EmojiBtn from "./emojiBtn";

function AddComment(props) {

    const [inputValue, setInputValue] = useState('');
    const [click, setClick] = useState(false);
    const [chosenEmoji, setChoseEmoji] = useState(null);
    const handleInput = (e) => {
        setInputValue(e.target.value)
    }

    const handleEmojiClick = (event) => {
        setClick( !click)

    }

    const handleChoseEmoji = (event, emojiObject) => {
        setChoseEmoji(emojiObject)
    }

    return (
        <>
            <CardContent className={styles.addComment}>
                {click && <EmojiPicker

                    pickerStyle={{position: 'absolute', bottom: '7rem'}}
                    // native
                    disableSearchBar={true}
                    onEmojiClick={handleChoseEmoji}/>}
                <Stack {...muiStyles.stack}>
                    <button onClick={handleEmojiClick}>
                        <EmojiBtn/>
                    </button>
                    <input onChange={e => handleInput(e)} value={inputValue} type="text"
                           placeholder="Add a comment..."/>
                    <Button className={styles.post} disabled={inputValue === ''} disableRipple={true}
                            variant="text">Post</Button>
                </Stack>
            </CardContent>
        </>
    );
}

export default AddComment;