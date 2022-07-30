import React, { useState } from 'react';
import { Button, Stack } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import { muiStyles } from "../customMuiStyles";
import styles from '../../../styles/Card.module.css'
import EmojiPicker from "emoji-picker-react";
import EmojiBtn from "../../emojiBtn";
import { useDispatch } from "react-redux";
import { comment } from "../../../store/actions/postActions";

function AddComment({ postId }) {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');
    const [click, setClick] = useState(false);
    const handleInput = (e) => {
        setInputValue(e.target.value)
    }

    const handleEmojiClick = (event) => {
        setClick(!click)
    }

    const handleChosenEmoji = (event, emojiObject) => {
        setInputValue(inputValue + emojiObject.emoji);
    }

    const handleComment = () => {
        console.log(inputValue)
        const data = {
            text: inputValue,
            post_id: postId
        }
        dispatch(comment(data));
        setInputValue('')
    }

    return (
        <>
            <CardContent className={styles.addComment}>
                {click && <EmojiPicker

                    pickerStyle={{ position: 'absolute', bottom: '7rem' }}
                    // native
                    disableSearchBar={true}
                    onEmojiClick={handleChosenEmoji} />}
                <Stack {...muiStyles.stack}>
                    <button onClick={handleEmojiClick}>
                        <EmojiBtn />
                    </button>
                    <input onChange={e => handleInput(e)} value={inputValue} type="text"
                        placeholder="Add a comment..." />
                    <Button onClick={handleComment} className={styles.post} disabled={inputValue === ''} disableRipple={true}
                        variant="text">Post</Button>
                </Stack>
            </CardContent>
        </>
    );
}

export default AddComment;