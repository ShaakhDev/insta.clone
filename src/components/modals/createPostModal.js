import React, {useState} from 'react';
import Modal from '@mui/material/Modal';
import Box from "@mui/material/Box";
import {customModalStyle} from "./customMiuStyles";
import Typography from "@mui/material/Typography";
import SelectPostImage from "./selectPostImage";
import {postActions} from "../../store/reducers/postReducer";
import {Button} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {createPost} from "../../store/actions/postActions";

function CreatePostModal({open, setOpen}) {
    const dispatch = useDispatch();
    const {postImagePath, loading} = useSelector(state => state?.post);
    const [caption, setCaption] = useState("");


    const handleClose = () => {
        setOpen(false)
        postActions.setPostImagePath('')
        console.log('click')
    };//close modal.

    const handleCreatePost = () => {

        const data = {
            image_url: postImagePath,
            caption
        }
        dispatch(createPost(data))
        console.log(caption)
    }

    return (
        <div>

            <Modal
                open={open}
                BackdropProps={{background: 'rgba(255,255,255,1)'}}
                closeAfterTransition={true}
                disableScrollLock={true}
                onBackdropClick={handleClose}
            >
                <Box {...customModalStyle.box}>
                    <Box{...customModalStyle.headerBox}>
                        <Typography
                            {...customModalStyle.modalTitle}
                            variant="h4"
                        >
                            Create new post
                        </Typography>
                        {postImagePath && (<Button
                            {...customModalStyle.shareBtn}
                            onClick={handleCreatePost}>
                            Share
                        </Button>)
                        }
                    </Box>
                    {loading && <img alt="loading gif" src={process.env.PUBLIC_URL + 'loader.gif'}/>}

                    <SelectPostImage getCaption={data => setCaption(data)}/>
                </Box>
            </Modal>

        </div>
    );
}

export default CreatePostModal;