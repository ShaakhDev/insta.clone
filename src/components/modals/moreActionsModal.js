import React, { useState } from 'react';
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom'
import { customStyles } from "./customMiuStyles";
import EditPostModal from "./editPostModal";
import Popup from "../popup";
import { useCopyOnClick } from '../../hooks/useCopyOnClick'
import ConfirmModal from './confirmModal';
import { useDeletePostMutation } from '../../rtk/postsApi'

function MoreActionsModal({ open, setOpen, isMyPost, id, user, caption }) {
    const navigate = useNavigate()
    const [editModalOpen, setEditModalOpen] = useState(false)
    const [isCopied, handleCopyClick] = useCopyOnClick(id);
    const [confirmModalOpen, setConfirmModalOpen] = useState(false)
    const [deletePost] = useDeletePostMutation()

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
        deletePost(id);
        setConfirmModalOpen(false)
        setTimeout(() => {
            navigate('/',)

        }, 1500)
    }

    return (
        <>
            {isCopied && <Popup text='Link copied to clipboard' />}
            <EditPostModal
                prevCaption={caption}
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
                    <Link {...customStyles.button} to={`/post/${id}`}>
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