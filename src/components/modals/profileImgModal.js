import {useState} from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {profileImgModalStyle} from "./customMiuStyles";
import styles from '../../styles/Modal.module.css'
// import {useDispatch} from 'react-redux';

export default function BasicModal({open, setOpen,}) {
    // const dispatch = useDispatch()
    const [image,setImage]=useState(null)
    const handleClose = () => setOpen(false);

    const handleRemove = () => {

    }
    const handleUpload = () => {
        document.getElementById('selectImage').click()
    }
    const handleChange =(e)=>{
        if(e?.target.files[0]){
            setImage(e?.target.files[0])
            //fetchImage(e?.target.files[0])
        }

    }

    const fetchImage = (img)=>{
        let image = new FormData()
        image.append('image',img)
        //dispatch(uploadProfileAvatar(img))
    }
    return (
        <div>

            <Modal
                open={open}
                onClose={handleClose}
                BackdropProps={{background: 'rgba(0,0,0,0.65)'}}
            >
                <Box {...profileImgModalStyle.box} className={styles.box}>

                    <div className={styles.heading}>
                        <h2>change profile photo</h2>
                    </div>
                    <div className={styles.buttons}>
                        <input onChange={handleChange} id='selectImage' type='file' hidden />
                        <button onClick={handleUpload} className={styles.upload}>upload photo</button>
                        <button onClick={handleRemove} className={styles.remove}>remove current photo</button>
                        <button onClick={handleClose} className={styles.cancel}>cancel</button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}




