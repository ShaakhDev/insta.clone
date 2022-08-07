import React, { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import Box from "@mui/material/Box";
import { customModalStyle } from "./customMiuStyles";
import Typography from "@mui/material/Typography";
import SelectPostImage from "./selectPostImage";
import { Button } from '@mui/material';
import { useSavePostImageMutation, useCreatePostMutation } from "../../rtk/postsApi";
import styles from "../../styles/Modal.module.css";



function CreatePostModal({ open, setOpen }) {
    const [savePostImage, { data: postImagePath, isLoading: imageLoading, isSuccess: isImageSuccess }] = useSavePostImageMutation();
    const [createPost, { isLoading, isSuccess }] = useCreatePostMutation();
    const [caption, setCaption] = useState("");
    const [img, setImg] = useState(null);
    const [hideSelectImage, setHideSelectImage] = useState(false);


    useEffect(() => {
        if (isImageSuccess) {
            const body = {
                caption: caption,
                image_url: postImagePath?.path
            }
            createPost(body)
            setImg(null)
            setCaption("")
        }
    }, [isImageSuccess])

    const handleCreatePost = (img) => {
        setHideSelectImage(true)
        const imageForm = new FormData();
        imageForm.append('file', img);
        savePostImage(imageForm);

    }
    const handleClose = () => {
        setOpen(false);
        setImg(null)
        setCaption("")
        setHideSelectImage(false)

    }


    return (


        <Modal
            open={open}
            BackdropProps={{ background: 'rgba(255,255,255,1)' }}
            closeAfterTransition={true}
            disableScrollLock={true}
            onBackdropClick={handleClose}
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
                {(imageLoading || isLoading) && <img className={styles.loadingGif} alt="loading gif" src={process.env.PUBLIC_URL + 'loader.gif'} />}
                {isSuccess && (
                    <>
                        <img className={styles.loadingGif} alt="loading done" src={process.env.PUBLIC_URL + 'done.gif'} />
                        <Typography {...customModalStyle.successMsg} variant="h4">
                            Your post has been shared.
                        </Typography>
                    </>
                )}

                {!hideSelectImage && (
                    <SelectPostImage
                        getImg={(image) => setImg(image)}
                        getCaption={data => setCaption(data)}
                    />
                )}
            </Box>
        </Modal>


    );
}

export default CreatePostModal;