import {useState} from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {profileImgModalStyle} from "./customMiuStyles";
import styles from '../../styles/Modal.module.css'
import {useSelector} from "react-redux";
import UploadButton from "./uploadBtn";
// import {useDispatch} from 'react-redux';

export default function BasicModal({open, setOpen,}) {
    const {profile}=useSelector(state=>state?.profile)
    const [avatar_url, setAvatarUrl] = useState()
    const [_username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [_email, setEmail] = useState()
    const handleClose = () => setOpen(false);


    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                BackdropProps={{background: 'rgba(0,0,0,0.65)'}}
            >
                <Box {...profileImgModalStyle.box} className={styles.box}>
                    <div className={styles.heading}>
                        <h2>Edit your profile</h2>
                    </div>
                   <input value={_username} onChange={(e)=> setUsername(e.target.value)} type='text' defaultValue={profile.username} />
                   <input value={_email} onChange={(e)=> setEmail(e.target.value)} type='text' defaultValue={profile.email}/>
                   <input value={password} onChange={(e)=> setPassword(e.target.value)} type='text' />
                    <UploadButton/>
                </Box>
            </Modal>
        </div>
    );
}




