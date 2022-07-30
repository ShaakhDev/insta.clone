import React, { useEffect, useState } from 'react';
import Box from "@mui/material/Box";
import CreatePostIcon from "./createPostIcon";
import Typography from "@mui/material/Typography";
import { Button, Input, Stack, TextareaAutosize } from "@mui/material";
import { customModalStyle } from "./customMiuStyles";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage } from "../../store/actions/postActions";
import CardHeader from "@mui/material/CardHeader";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { muiStyles } from "../currentPost/customMuiStyles";
import EmojiBtn from "../emojiBtn";
import EmojiPicker from "emoji-picker-react";
import { useGetCurrentUserQuery } from '../../rtk/usersApi'
import { useSavePostImageMutation } from '../../rtk/postsApi'



function SelectPostImage({ getCaption }) {
    const dispatch = useDispatch();
    // const { postImagePath } = useSelector(state => state?.post);
    // const { user } = useSelector(state => state?.user);
    const { data: user } = useGetCurrentUserQuery(1);
    const [savePostImage, { data: postImagePath, isLoading: imageLoading }] = useSavePostImageMutation();
    const [img, setImg] = useState(null);
    const [input, setInput] = useState('')
    const [click, setClick] = useState(false);

    const handleChoseEmoji = (event, emojiObject) => {
        setInput(input + emojiObject.emoji);
    }

    const handleCaption = (e) => {
        setInput(e.target.value);
    }

    const handleImage = (e) => {
        setImg(e.target.files[0])
    }

    useEffect(() => {
        if (img !== null) {
            console.log(img)
            const imageForm = new FormData();
            imageForm.append('file', img);
            savePostImage(imageForm)
        }
    }, [img, savePostImage]);

    useEffect(() => {
        getCaption(input)
    }, [input, getCaption]);

    return (<>
        {postImagePath && (<Box
            {...customModalStyle.overviewBox}
        >
            <Box
                {...customModalStyle.imgBox}
            >
                <img style={{ width: '100%' }} src={postImagePath} alt="img" />
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
                        </Link>}
                    title={
                        <Link style={{ color: "#000", fontSize: '1.5rem' }} to={`/${user?.username}`}>
                            <b>{user?.username}</b>
                        </Link>}
                />
                <TextareaAutosize
                    {...customModalStyle.textarea}
                    placeholder="Write a caption..."
                    maxLength={2200}
                    autoComplete="off"
                    value={input}
                    onChange={(e) => handleCaption(e)}
                />

                <Stack direction="row" justifyContent="space-between">
                    <EmojiBtn click={() => setClick(!click)} />

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
        </Box>)}

        {!postImagePath && (<Box
            {...customModalStyle.uploadBox}
        >
            <CreatePostIcon />
            <Typography variant="h3">
                Upload Photo
            </Typography>
            <label htmlFor="contained-button-file">
                <Input onChange={e => handleImage(e)} sx={{ display: "none" }} accept="image/*"
                    id="contained-button-file" type="file" />
                <Button {...customModalStyle.selectBtn} variant="contained" component="span">
                    Select from computer
                </Button>
            </label>
        </Box>)}
    </>);
}

export default SelectPostImage;