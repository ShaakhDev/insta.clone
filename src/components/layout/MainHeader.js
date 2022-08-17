import { Link, useNavigate } from 'react-router-dom'
import styles from '../../styles/MainHeader.module.css'
import HomeFilled from "../mainHeaderIcons/homeFilled";
import HomeOutlined from "../mainHeaderIcons/homeOutlined";
import AddPostOutlined from "../mainHeaderIcons/addPostOutlined";
import AvatarDropdown from "../mainHeaderIcons/avatarDropdown";
import { Button, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import CreatePostModal from "../modals/createPostModal";
import AddPostFilled from "../mainHeaderIcons/addPostFilled";

const FOCUSED_BTN = {
    home: "HOME",
    addPost: "ADD_POST",
    profile: "PROFILE"
}

function MainHeader(props) {
    const [openModal, setOpenModal] = useState(false)
    const navigate = useNavigate()
    const token = localStorage.getItem('access_token')
    const [focused, setFocused] = useState(FOCUSED_BTN.home)

    const handleOpenModal = () => {
        // if (typeof window != 'undefined' && window.document) {
        // document.body.style.overflow = 'hidden !important'
        // }
        setOpenModal(true)
    };



    useEffect(() => {
        if (!openModal) {
            setFocused(FOCUSED_BTN.home)
        }
    }, [openModal]);


    return (
        <>
            <CreatePostModal open={openModal} setOpen={setOpenModal} />
            <nav className={styles.nav}>
                <div className={styles.box}>
                    <div className={styles.brand}>
                        <Link to="/">
                            <img src={process.env.PUBLIC_URL + '/brand.webp'} alt="brand" />
                        </Link>
                    </div>
                    <div className={styles.secondPart} >
                        <div className={styles.search}>
                            <label htmlFor='search'>
                                <input placeholder="Search" name="search" type="text" />
                            </label>
                        </div>
                        {token && (
                            <div className={styles.icons}>
                                <Link to="/">
                                    <IconButton onClick={() => setFocused(FOCUSED_BTN.home)} disableRipple>
                                        {
                                            focused === FOCUSED_BTN.home ?
                                                <HomeFilled /> :
                                                <HomeOutlined />
                                        }
                                    </IconButton>
                                </Link>
                                <IconButton onClick={() => setFocused(FOCUSED_BTN.addPost)} disableRipple>
                                    {
                                        focused === FOCUSED_BTN.addPost ?
                                            <AddPostFilled handleOpenModal={handleOpenModal} /> :
                                            <AddPostOutlined handleOpenModal={handleOpenModal} />
                                    }
                                </IconButton>
                                <AvatarDropdown setFocused={(icon) => setFocused(icon)} focused={focused} onClick={() => setFocused(FOCUSED_BTN.profile)} />
                            </div>
                        )}
                    </div>
                    {!token && (
                        <div className={styles.buttons}>
                            <Button onClick={() => navigate('/accounts/login')} variant="contained">
                                Log In
                            </Button>
                            <Button onClick={() => navigate('/accounts/signup')} variant="outlined">
                                Sign Up
                            </Button>
                        </div>
                    )}
                </div>
            </nav>

            {props.children}
        </>
    );
}

export default MainHeader;