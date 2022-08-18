import React, { useEffect, useState, useRef } from 'react';
import Box from "@mui/material/Box";
import { updateCustomStyles } from "./customMiuStyles";
import CardHeader from "@mui/material/CardHeader";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { muiStyles } from "../currentPost/customMuiStyles";
import { Stack, TextareaAutosize } from "@mui/material";
import EmojiBtn from "../emojiBtn";
import EmojiPicker from "emoji-picker-react";
import Typography from "@mui/material/Typography";
import { isMobile } from 'react-device-detect';
import { WindowTwoTone } from '@mui/icons-material';

function CaptionBox({ getCaption, user, prevCaption }) {
    const [input, setInput] = useState(prevCaption);
    const [click, setClick] = useState(false);
    const ref = useRef()

    const handleChoseEmoji = (event, emojiObject) => {
        setInput(input + emojiObject.emoji);
    }
    const handleCaption = (e) => {
        setInput(e.target.value);
    }

    useEffect(() => {
        getCaption(input)
    }, [input, getCaption])

    useEffect(() => {
        window.addEventListener('click', (e) => {
            if (ref?.current?.contains(e.target)) {
                return
            }
            setClick(false)
        })
    }, [])

    return (
        <>
            <Box //caption box
                {...updateCustomStyles.captionBox}
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
                        </Link>}
                    title={
                        <Link style={{ color: "#000", fontSize: '1.5rem' }} to={`/${user?.username}`}>
                            <b>{user?.username}</b>
                        </Link>}
                />
                <TextareaAutosize
                    {...updateCustomStyles.textarea}
                    placeholder="Write a caption..."
                    maxLength={2200}
                    autoComplete="off"
                    value={input}
                    onChange={(e) => handleCaption(e)}
                />

                <Stack direction="row" ref={ref} justifyContent="space-between">
                    {!isMobile
                        && <EmojiBtn click={() => setClick(!click)} />
                    }

                    {click && <EmojiPicker
                        pickerStyle={{ position: 'absolute', bottom: '7rem', height: '20rem' }}
                        disableSearchBar={true}
                        onEmojiClick={handleChoseEmoji}
                    />}

                    <Typography variant="body1">
                        {`${input.length}/2,200`}
                    </Typography>

                </Stack>
            </Box>

        </>
    );
}

export default CaptionBox;