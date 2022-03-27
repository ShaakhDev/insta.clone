import {useState} from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {profileImgModalStyle} from "./customMiuStyles";
import styles from '../../styles/Modal.module.css'
import {useSelector} from "react-redux";
import UploadButton from "./uploadBtn";
import {Button} from "@mui/material";
import {useDispatch} from 'react-redux';
import {updateProfile} from "../../store/actions/userActions";

export default function BasicModal({open, setOpen,}) {
    const dispatch = useDispatch()
    const {profile} = useSelector(state => state?.profile)
    const [username, setUsername] = useState(profile?.username)
    const [password, setPassword] = useState()
    const [email, setEmail] = useState(profile?.email);
    const [img,setImg]= useState(null)

    const handleClose = () => setOpen(false);//close modal.

    const handleUpload = (e)=>{
       const data = {
           username,
           email,
           password
       }
       console.log(img)
       dispatch(updateProfile(data,img))

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
                        <h2>Edit your profile</h2>
                        <p>You can edit and update your profile details.</p>
                    </div>
                    <label>
                        username:
                        <input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            type='text'
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type='text'
                        />
                    </label>
                    <label>
                        Password:
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type='text'/>
                    </label>
                    <label >
                        Upload profile photo:
                        <span>{img?.name}</span>
                        <UploadButton getValue={data=>setImg(data)}/>
                    </label>
                    <Button sx={{width:"100%",fontSize:"1.6rem",marginTop:'4rem'}} variant="contained" onClick={handleUpload}>Update profile</Button>
                </Box>
            </Modal>
        </div>
    );
}




