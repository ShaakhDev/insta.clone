import React, {useState} from 'react';
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import {Button} from "@mui/material";
import {Link} from 'react-router-dom'
import {customStyles} from "./customMiuStyles";
import {useDispatch} from "react-redux";
import {deletePost} from "../../store/actions/postActions";
import EditPostModal from "./editPostModal";
import Popup from "../popup";

function MoreActionsModal({open, setOpen, isMyPost, id,imgUrl}) {
    const dispatch = useDispatch();
    const [isCopied, setIsCopied] = useState(false);
    const [editModalOpen,setEditModalOpen] =useState(false)
    const linkToPost = `${window.location.origin}/p/${id}`

    async function copyLinkToClipboard(link) {
        if ('clipboard' in navigator) {
            return await navigator.clipboard.writeText(link);
        } else {
            return document.execCommand('copy', true, link);
        }
    }

    const handleCopyClick = () => {
        copyLinkToClipboard(linkToPost)
            .then(() => {
                setIsCopied(true);
                setOpen(false)
                setTimeout(() => {
                    setIsCopied(false)
                }, 3500)
            })
            .catch(err => {
                console.log(err);
            })

    }

    const handleEditModalOpen = () => {
        setOpen(false);
        setEditModalOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    const handleDeletePost = () => {
        dispatch(deletePost(id))
    }

    return (
        <>
            {isCopied &&<Popup text='Link copied to clipboard'/>}
            <EditPostModal imgUrl id={id} open={editModalOpen} setOpen={setEditModalOpen}/>
            <Modal
                open={open}
                onClose={handleClose}
                BackdropProps={{background: 'rgba(255,255,255,1)'}}
            >
                <Box {...customStyles.box} >
                    {isMyPost && <>
                        <Button onClick={handleDeletePost} {...customStyles.button} color="error" variant="text">
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