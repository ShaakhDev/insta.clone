import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from "@mui/material/Box";
import { customModalStyle } from "./customMiuStyles";
import Typography from "@mui/material/Typography";
import SelectPostImage from "./selectPostImage";
import { Button } from '@mui/material';
import { postActions } from "../../store/reducers/postReducer";
import { useDispatch } from "react-redux";
import { createPost } from "../../store/actions/postActions";
import { useSavePostImageMutation } from "../../rtk/postsApi";

function CreatePostModal({ open, setOpen }) {
    const [savePostImage, { data: postImagePath, isLoading: imageLoading }] = useSavePostImageMutation();
 
    const [caption, setCaption] = useState("");


   

    const handleCreatePost = () => {
        
      
       
    }

    return (
        <div>

            <Modal
                open={open}
                BackdropProps={{ background: 'rgba(255,255,255,1)' }}
                closeAfterTransition={true}
                disableScrollLock={true}
                onBackdropClick={(e)=>setOpen(false)}
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
                    {imageLoading && <img alt="loading gif" src={process.env.PUBLIC_URL + 'loader.gif'} />}

                    <SelectPostImage getCaption={data => setCaption(data)} />
                </Box>
            </Modal>

        </div>
    );
}

export default CreatePostModal;