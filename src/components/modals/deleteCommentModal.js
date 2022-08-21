import React from 'react'
import {
    Modal,
    Box,
    Button
} from '@mui/material';
import { customStyles } from './customMiuStyles';



function DeleteCommentModal({
    open,
    setOpen,
    handleDeleteComment
}) {

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <>
            <Modal
                open={open}
                BackdropProps={{ background: 'rgba(255,255,255,1)' }}
                onBackdropClick={handleClose}
            >
                <Box {...customStyles.box}>
                    <Button
                        onClick={handleDeleteComment}
                        variant="text"
                        color="error"
                        {...customStyles.dbutton}>
                        Delete comment
                    </Button>

                    <Button
                        onClick={handleClose}
                        variant="text"
                        color="inherit"
                        {...customStyles.button}>
                        Cancel
                    </Button>
                </Box>
            </Modal>
        </>
    )
}

export default DeleteCommentModal