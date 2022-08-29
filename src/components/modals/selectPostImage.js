import React, { useEffect, useState, useRef } from 'react';
import { isMobile } from 'react-device-detect';
import Box from '@mui/material/Box';
import CreatePostIcon from './createPostIcon';
import Typography from '@mui/material/Typography';
import { Button, Stack, TextareaAutosize } from '@mui/material';
import { customModalStyle } from './customMiuStyles';
import CardHeader from '@mui/material/CardHeader';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import { muiStyles } from '../currentPost/customMuiStyles';
import EmojiBtn from '../emojiBtn';
import EmojiPicker from 'emoji-picker-react';
import { useGetCurrentUserQuery } from '../../rtk/usersApi';

function SelectPostImage({ getCaption, getImg }) {
    const { data: user } = useGetCurrentUserQuery(1);
    const [img, setImg] = useState(null);
    const [input, setInput] = useState('');
    const [click, setClick] = useState(false);
    const stackRef = useRef();

    const handleChoseEmoji = (event, emojiObject) => {
        setInput(input + emojiObject.emoji);
    };

    const handleCaption = (e) => {
        setInput(e.target.value);
    };

    const handleImage = (e) => {
        const url = URL.createObjectURL(e.target.files[0]);
        setImg(url);
        getImg(e.target.files[0]);
    };
    const handleEmojiClick = () => setClick(true);

    useEffect(() => {
        getCaption(input);
    }, [input, getCaption]);

    useEffect(() => {
        window.addEventListener('click', (event) => {
            if (stackRef?.current?.contains(event.target)) {
                return;
            }
            setClick(false);
        });
    }, []);
    return (
        <>
            {img && (
                <Box {...customModalStyle.overview}>
                    <Box {...customModalStyle.imgBox}>
                        <div
                            style={{
                                // width: '100%',
                                height: '100%',
                                backgroundImage: `url(${img})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                // objectFit: 'contain',
                            }}
                            // src={img}
                            // alt="img"
                        />
                    </Box>
                    <Box //caption box
                        {...customModalStyle.captionBox}
                    >
                        <CardHeader
                            sx={{ padding: 0 }}
                            avatar={
                                <Link to={`/${user?.username}`}>
                                    <Avatar
                                        {...muiStyles.avatar}
                                        alt={user?.username}
                                        src={user?.avatar_url}
                                    />
                                </Link>
                            }
                            title={
                                <Link
                                    style={{
                                        color: '#000',
                                        fontSize: '1.5rem',
                                    }}
                                    to={`/${user?.username}`}
                                >
                                    <b>{user?.username}</b>
                                </Link>
                            }
                        />
                        <TextareaAutosize
                            {...customModalStyle.textarea}
                            placeholder="Write a caption..."
                            maxLength={2200}
                            autoComplete="off"
                            value={input}
                            onChange={handleCaption}
                        />

                        <Stack
                            ref={stackRef}
                            direction="row"
                            justifyContent="space-between"
                            sx={{
                                position: 'relative',
                            }}
                        >
                            {!isMobile && <EmojiBtn click={handleEmojiClick} />}

                            {click && (
                                <EmojiPicker
                                    pickerStyle={{
                                        position: 'absolute',
                                        top: '0',
                                        left: '3rem',

                                        height: '20rem',
                                    }}
                                    disableSearchBar={true}
                                    onEmojiClick={handleChoseEmoji}
                                />
                            )}

                            <Typography variant="body1">
                                {`${input.length}/2,200`}
                            </Typography>
                        </Stack>
                    </Box>
                </Box>
            )}

            {!img && (
                <Box {...customModalStyle.uploadBox}>
                    <CreatePostIcon />
                    <Typography variant="h3">Upload Photo</Typography>
                    <label htmlFor="contained-button-file">
                        <input
                            onChange={(e) => handleImage(e)}
                            style={{ display: 'none' }}
                            accept="image/*"
                            id="contained-button-file"
                            type="file"
                        />
                        <Button
                            {...customModalStyle.selectBtn}
                            variant="contained"
                            component="span"
                        >
                            Select from device
                        </Button>
                    </label>
                </Box>
            )}
        </>
    );
}

export default SelectPostImage;
