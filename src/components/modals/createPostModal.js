import React from 'react';
import Modal from '@mui/material/Modal';
import Box from "@mui/material/Box";
import {customModalStyle} from "./customMiuStyles";
import CreatePostIcon from "./createPostIcon";
import Typography from "@mui/material/Typography";
import {Button, Input} from "@mui/material";

function CreatePostModal({open, setOpen}) {

    const handleClose = () => setOpen(false);//close modal.
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                BackdropProps={{background: 'rgba(255,255,255,1)'}}
            >
                <Box {...customModalStyle.box}>
                    <Box sx={{borderBottom: "1px solid #dbdbdb"}}>
                        <Typography sx={{textAlign:'center'}} variant="h4">
                            Create Post
                        </Typography>
                    </Box>
                    <Box sx={{minHeight: '30rem',display: 'flex', flexDirection:"column",alignItems:"center", justifyContent:"space-around", padding:"3rem "}}>
                        <CreatePostIcon/>
                        <Typography variant="h3">
                            Upload Photo
                        </Typography>
                        <label htmlFor="contained-button-file">
                            <Input sx={{display:"none"}} accept="image/*" id="contained-button-file" multiple type="file"/>
                            <Button variant="contained" component="span">
                                Select from computer
                            </Button>
                        </label>
                    </Box>
                </Box>
            </Modal>

        </div>
    );
}

export default CreatePostModal;