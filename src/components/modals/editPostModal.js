import { useState, useEffect } from "react";
import Modal from '@mui/material/Modal';
import Box from "@mui/material/Box";
import { updateCustomStyles } from "./customMiuStyles";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import CaptionBox from "./captionBox";
import styles from "../../styles/Modal.module.css";

import { useUpdatePostMutation } from "../../rtk/postsApi";

function EditPostModal({ open, setOpen, id, user, prevCaption }) {
    const [updatePost, { isLoading, isSuccess }] = useUpdatePostMutation()
    const [caption, setCaption] = useState("");
    const handleClose = () => {
        setOpen(false)
    };
    const handleUpdatePost = () => {
        const data = {
            id,
            body: {
                caption
            }
        }
        updatePost(data)
    }

    useEffect(() => {
        if (isSuccess) {
            setTimeout(() => {
                handleClose()
            }, 3000)
        }
    }, [isSuccess])

    return (
        <>
            <Modal
                open={open}
                BackdropProps={{ background: 'rgba(255,255,255,1)' }}
                onBackdropClick={handleClose}
            >
                <Box {...updateCustomStyles.box}>
                    <Box {...updateCustomStyles.headerBox}>
                        <Typography
                            {...updateCustomStyles.modalTitle}
                            variant="h4"
                        >
                            Edit Info
                        </Typography>
                        {
                            (!isSuccess && !isLoading) ? (
                                <Button
                                    {...updateCustomStyles.shareBtn}
                                    onClick={handleUpdatePost}>
                                    Done
                                </Button>
                            ) : (
                                <Button
                                    {...updateCustomStyles.shareBtn}
                                    onClick={() => setOpen(false)}>
                                    Close
                                </Button>
                            )
                        }


                    </Box>
                    {isLoading
                        && <img
                            className={styles.loadingGif}
                            alt="loading gif"
                            src={process.env.PUBLIC_URL + '/loader.gif'}
                        />}

                    {isSuccess && (
                        <>
                            <img
                                className={styles.loadingGif}
                                alt="loading done"
                                src={process.env.PUBLIC_URL + '/done.gif'}
                            />
                            <Typography {...updateCustomStyles.successMsg} variant="h4">
                                Your post has been updated.
                            </Typography>
                        </>
                    )}
                    {(!isSuccess && !isLoading)
                        && <CaptionBox
                            prevCaption={prevCaption}
                            user={user}
                            getCaption={caption => setCaption(caption)}
                        />}

                </Box>
            </Modal>

        </>
    );
}

export default EditPostModal;