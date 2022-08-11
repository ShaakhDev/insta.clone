import React, { useState, useEffect } from 'react';
import { Button, Stack } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import { muiStyles } from "../customMuiStyles";
import styles from '../../../styles/Card.module.css'
import EmojiPicker from "emoji-picker-react";
import EmojiBtn from "../../emojiBtn";
import { useSetCommentToPostMutation } from '../../../rtk/postsApi'


function AddComment({ postId }) {

    const [setCommentToPost] = useSetCommentToPostMutation();
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
        const data = {
            text: inputValue,
            post_id: postId
        }
        setCommentToPost(data)
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
                    <input style={{ fontSize: '1.5rem' }} onChange={e => handleInput(e)} value={inputValue} type="text"
                        placeholder="Add a comment..." />
                    <Button onClick={handleComment} className={styles.post} disabled={inputValue === ''} disableRipple={true}
                        variant="text">Post</Button>
                </Stack>
            </CardContent>
        </>
    );
}

export default AddComment;