import React, { useState } from 'react';
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { Link } from 'react-router-dom'
import { customStyles } from "./customMiuStyles";
import { useDispatch } from "react-redux";
import { deletePost } from "../../store/actions/postActions";
import EditPostModal from "./editPostModal";
import Popup from "../popup";
import { useCopyToClick } from '../../hooks/useCopyToClick'
import ConfirmModal from './confirmModal';


function MoreActionsModal({ open, setOpen, isMyPost, id, imgUrl, user, caption }) {
    const dispatch = useDispatch();
    const [editModalOpen, setEditModalOpen] = useState(false)
    const [isCopied, handleCopyClick] = useCopyToClick(id);
    const [confirmModalOpen, setConfirmModalOpen] = useState(false)

    const handleEditModalOpen = () => {
        setOpen(false);
        setEditModalOpen(true)
    }
    const handleConfirmModalOpen = () => {
        setOpen(false);
        setConfirmModalOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    const handleDeletePost = () => {
        dispatch(deletePost(id))
    }

    return (
        <>
            {isCopied && <Popup text='Link copied to clipboard' />}
            <EditPostModal
                prevCaption={caption}
                imgUrl={imgUrl}
                id={id}
                user={user}
                open={editModalOpen}
                setOpen={setEditModalOpen}
            />
            <ConfirmModal
                open={confirmModalOpen}
                setOpen={setConfirmModalOpen}
                handleDeletePost={handleDeletePost}
            />
            <Modal
                open={open}
                onClose={handleClose}
                BackdropProps={{ background: 'rgba(255,255,255,1)' }}
            >
                <Box {...customStyles.box} >
                    {isMyPost && <>
                        <Button onClick={handleConfirmModalOpen} {...customStyles.dbutton} color="error" variant="text">
                            Delete
                        </Button>
                        <Button onClick={handleEditModalOpen} {...customStyles.button} color="inherit" variant="text">
                            Edit
                        </Button>
                    </>}
                    <Link {...customStyles.button} to={`/p/${id}`}>
                        <Button {...customStyles.button} color="inherit" variant="text">
                            Go to post
                        </Button>
                    </Link>
                    <Button onClick={handleCopyClick} {...customStyles.button} color="inherit" variant="text">
                        Copy link
                    </Button>
                    <Button onClick={handleClose} {...customStyles.button} color="inherit" variant="text">
                        Cancel
                    </Button>
                </Box>
            </Modal>
        </>
    );
}

export default MoreActionsModal;