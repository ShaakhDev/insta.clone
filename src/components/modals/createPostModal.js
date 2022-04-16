import React, {useState} from 'react';
import Modal from '@mui/material/Modal';
import Box from "@mui/material/Box";
import {customModalStyle} from "./customMiuStyles";
import Typography from "@mui/material/Typography";
import SelectPostImage from "./selectPostImage";
import {postActions} from "../../store/reducers/postReducer";
import {Button} from "@mui/material";
import {useSelector} from "react-redux";

function CreatePostModal({open, setOpen}) {
    const {postImagePath} = useSelector(state => state?.post);
    const [caption, setCaption] = useState("")

    const handleClose = () => {
        setOpen(false)
        postActions.setPostImagePath('')
    };//close modal.

    const handleCreatePost = () => {
        console.log(caption)
    }

    return (
        <div>

            <Modal
                open={open}
                onClose={handleClose}
                BackdropProps={{background: 'rgba(255,255,255,1)'}}
                keepMounted
            >
                <Box {...customModalStyle.box}>
                    <Box{...customModalStyle.headerBox}>
                        <Typography
                            {...customModalStyle.modalTitle}
                            variant="h4"
                        >
                            Create new post
                        </Typography>
                        {postImagePath &&
                            <Button
                                {...customModalStyle.shareBtn}
                                onClick={handleCreatePost}>
                                Share
                            </Button>}
                    </Box>
                    {/*<img src={process.env.PUBLIC_URL + 'loader.gif'}/>*/}
                    <SelectPostImage getCaption={data => setCaption(data)}/>
                </Box>
            </Modal>

        </div>
    );
}

export default CreatePostModal;