import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { customModalStyle } from "./customMiuStyles";
import styles from '../../styles/Modal.module.css'
import UploadButton from "./uploadBtn";
import { Button } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { MobileView } from "react-device-detect";
import { useSaveAvatarUrlMutation, useUpdateUserMutation } from "../../rtk/usersApi";


export default function BasicModal({ open, setOpen, profile }) {

    const [saveAvatarUrl, { isSuccess: imgUrlIsSuccess, data: imgUrl, isLoading: saveAvatarUrlLoading }] = useSaveAvatarUrlMutation();
    const [updateUser, { isLoading: updateUserLoading }] = useUpdateUserMutation();
    const [username, setUsername] = useState('');
    const [fullName, setFullName] = useState('');
    const [bio, setBio] = useState('');
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('');
    const [img, setImg] = useState(null)


    useEffect(() => {

        //filling the fields with the profile data

        setUsername(profile?.username)
        setEmail(profile?.email)
        setFullName(profile?.full_name === null ? '' : profile?.full_name)
        setBio(profile?.bio === null ? '' : profile?.bio)
    }, [profile]);

    useEffect(() => {
        if (imgUrlIsSuccess) {

            //if image is uploaded successfully and get the url 
            //then update the user profile 

            const body = getChangedProfileData()
            body.avatar_url = imgUrl?.path
            updateUser(body)
            setOpen(false)
        }
    }, [imgUrlIsSuccess])

    const handleClose = () => setOpen(false);//close modal.

    const handleUpload = async (e) => {
        if (img !== null) {

            //if image was changed - upload it to server and get the image url back

            const imgForm = new FormData()
            imgForm.append('file', img)
            console.log(imgForm)
            await saveAvatarUrl(imgForm).unwrap();
            setImg(null)
            setOpen(false)
        }
        else {

            //if image was not changed and other data was changed - 
            //update user data without sending image url

            const body = getChangedProfileData()
            await updateUser(body)
            setOpen(false)
        }
    }

    const getChangedProfileData = () => {

        //getting only changed data into one object

        const data = {}
        if (username !== profile?.username) data.username = username;
        if (fullName !== '' && fullName !== profile?.full_name) data.full_name = fullName;
        if (bio !== '' && bio !== profile?.bio) data.bio = bio;
        if (password !== '') data.password = password;
        if (email !== profile?.email) data.email = email;
        return data;
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                BackdropProps={{ background: 'rgba(0,0,0,0.65)' }}
            >

                <Box
                    {...customModalStyle.box}
                    className={styles.box}>
                    <MobileView>
                        <Button
                            className={styles.backButton}
                            onClick={handleClose}
                        >
                            <ClearIcon />
                        </Button>
                    </MobileView>
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
                            placeholder={username}
                        />
                    </label>
                    <label>
                        Full name:
                        <input
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            type='text'
                            placeholder="Full name"
                        />
                    </label>
                    <label>
                        Bio:
                        <textarea
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            maxLength="100"
                            rows={3}
                            placeholder="Bio"
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
                            type='text'
                            placeholder="New password..."
                        />
                    </label>
                    <label className={styles.uploadLabel}>
                        Upload profile photo:
                        <span className={styles.upload}>{img?.name}</span>
                        <UploadButton getValue={data => setImg(data)} />
                    </label>
                    <Button
                        sx={{ width: "100%", fontSize: "1.6rem", marginTop: '4rem' }}
                        disabled={saveAvatarUrlLoading || updateUserLoading} variant="contained"
                        onClick={handleUpload}>{updateUserLoading || saveAvatarUrlLoading ? "sending..." : 'update'}</Button>
                </Box>
            </Modal>
        </div>
    );
}




