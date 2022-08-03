import React, { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import Box from "@mui/material/Box";
import { customModalStyle } from "./customMiuStyles";
import Typography from "@mui/material/Typography";
import SelectPostImage from "./selectPostImage";
import { Button } from '@mui/material';
import { postActions } from "../../store/reducers/postReducer";
import { useDispatch } from "react-redux";
import { createPost } from "../../store/actions/postActions";
import { useSavePostImageMutation, useCreatePostMutation } from "../../rtk/postsApi";

function CreatePostModal({ open, setOpen }) {
    const [savePostImage, { data: postImagePath, isLoading: imageLoading, isSuccess }] = useSavePostImageMutation();
    const [createPost] = useCreatePostMutation();
    const [caption, setCaption] = useState("");
    const [img, setImg] = useState(null);


    useEffect(() => {
        if (isSuccess) {
            const body = {
                caption: caption,
                image_url: postImagePath?.path
            }
            createPost(body)
            setImg(null)
            setCaption("")
        }
    }, [isSuccess])

    const handleCreatePost = (img) => {
        const imageForm = new FormData();
        imageForm.append('file', img);
        savePostImage(imageForm);

    }

    return (
        <div>

            <Modal
                open={open}
                BackdropProps={{ background: 'rgba(255,255,255,1)' }}
                closeAfterTransition={true}
                disableScrollLock={true}
                onBackdropClick={(e) => setOpen(false)}
            >
                <Box {...customModalStyle.box}>
                    <Box {...customModalStyle.headerBox}>
                        <Typography
                            {...customModalStyle.modalTitle}
                            variant="h4"
                        >
                            Create new post
                        </Typography>
                        {img !== null && (<Button
                            {...customModalStyle.shareBtn}
                            onClick={() => handleCreatePost(img)}>
                            Share
                        </Button>)}

                    </Box>
                    {imageLoading && <img alt="loading gif" src={process.env.PUBLIC_URL + 'loader.gif'} />}

                    <SelectPostImage getImg={(image) => setImg(image)} getCaption={data => setCaption(data)} />
                </Box>
            </Modal>

        </div>
    );
}

export default CreatePostModal;