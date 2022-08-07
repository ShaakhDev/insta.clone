import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { customStyles } from "./customMiuStyles";
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';



function ConfirmModal({ open, setOpen, handleDeletePost }) {

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

                    <Typography
                        {...customStyles.heading}>
                        Delete post?
                    </Typography>

                    <Typography {...customStyles.desc}>
                        Are you sure you want to delete this post?
                    </Typography>

                    <Button
                        onClick={handleDeletePost}
                        variant="text"
                        color="error"
                        {...customStyles.dbutton}>
                        Delete
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

export default ConfirmModal;