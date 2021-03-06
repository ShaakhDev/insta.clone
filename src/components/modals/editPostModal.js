import Modal from '@mui/material/Modal';
import Box from "@mui/material/Box";
import {updateCustomStyles} from "./customMiuStyles";
import Typography from "@mui/material/Typography";
import {Button} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import { editPost} from "../../store/actions/postActions";
import React, {useState} from "react";
import CaptionBox from "./captionBox";

function EditPostModal({open, setOpen,id,imgUrl}) {
    const dispatch = useDispatch();
    const { loading} = useSelector(state => state?.post);
    const [caption, setCaption] = useState("");

    const handleClose = () => {
        setOpen(false)
    };
    const handleUpdatePost = () => {
        const data = {
            image_url: imgUrl,
            caption
        }
        dispatch(editPost(id,data))
        setOpen(false)
    }

    return (
        <>
            <Modal
                open={open}
                BackdropProps={{background: 'rgba(255,255,255,1)'}}
                closeAfterTransition={true}
                disableScrollLock={true}
                onBackdropClick={handleClose}
            >
                <Box {...updateCustomStyles.box}>
                    <Box{...updateCustomStyles.headerBox}>
                        <Typography
                            {...updateCustomStyles.modalTitle}
                            variant="h4"
                        >
                            Edit Info
                        </Typography>
                        <Button
                            {...updateCustomStyles.shareBtn}
                            onClick={handleUpdatePost}>
                            Done
                        </Button>

                    </Box>
                    {loading && <img alt="loading gif" src={process.env.PUBLIC_URL + 'loader.gif'}/>}

                    <CaptionBox getCaption={caption => setCaption(caption)}/>
                </Box>
            </Modal>

        </>
    );
}

export default EditPostModal;