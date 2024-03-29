import React, { useState, useRef, useEffect } from 'react';
import { Button, Stack, Avatar } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import { muiStyles } from '../customMuiStyles';
import styles from '../../../styles/Card.module.css';
import EmojiPicker from 'emoji-picker-react';
import EmojiBtn from '../../emojiBtn';
import { useSetCommentToPostMutation } from '../../../rtk/postsApi';
import { BrowserView, MobileView } from 'react-device-detect';

function AddComment({ postId, currentUser }) {
    const [setCommentToPost] = useSetCommentToPostMutation();
    const [inputValue, setInputValue] = useState('');
    const [click, setClick] = useState(false);
    const asideRef = useRef();

    const handleInput = (e) => {
        setInputValue(e.target.value);
    };

    const handleEmojiClick = (e) => {
        setClick(!click);
    };

    const handleChosenEmoji = (event, emojiObject) => {
        setInputValue(inputValue + emojiObject.emoji);
    };

    const handleComment = () => {
        const data = {
            text: inputValue,
            post_id: postId,
        };
        setCommentToPost(data);
        setInputValue('');
    };

    useEffect(() => {
        window.addEventListener('click', (e) => {
            if (asideRef?.current?.contains(e.target)) {
                return;
            }
            setClick(false);
        });
    }, []);

    return (
        <>
            <CardContent ref={asideRef} className={styles.addComment}>
                <BrowserView>
                    {click && (
                        <EmojiPicker
                            pickerStyle={{
                                position: 'absolute',
                                bottom: '7rem',
                            }}
                            disableSearchBar={true}
                            preload={true}
                            onEmojiClick={handleChosenEmoji}
                        />
                    )}
                </BrowserView>
                <Stack {...muiStyles.stack}>
                    <BrowserView>
                        <button onClick={handleEmojiClick}>
                            <EmojiBtn />
                        </button>
                    </BrowserView>

                    <MobileView>
                        <Avatar>
                            <img
                                style={{ height: '100%', cursor: 'pointer' }}
                                src={currentUser?.avatar_url}
                                alt="avatar"
                            />
                        </Avatar>
                    </MobileView>

                    <Stack {...muiStyles.innerStack}>
                        <input
                            style={{ fontSize: '1.5rem' }}
                            onChange={(e) => handleInput(e)}
                            value={inputValue}
                            type="text"
                            placeholder="Add a comment..."
                        />
                        <Button
                            onClick={handleComment}
                            className={styles.post}
                            disabled={inputValue === ''}
                            disableRipple={true}
                            variant="text"
                        >
                            Post
                        </Button>
                    </Stack>
                </Stack>
            </CardContent>
        </>
    );
}

export default AddComment;
