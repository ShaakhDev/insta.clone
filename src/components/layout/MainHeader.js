import {Link, useNavigate} from 'react-router-dom'
import styles from '../../styles/MainHeader.module.css'
import HomeFilled from "../mainHeaderIcons/homeFilled";
import HomeOutlined from "../mainHeaderIcons/homeOutlined";
import AddPostOutlined from "../mainHeaderIcons/addPostOutlined";
import AvatarDropdown from "../mainHeaderIcons/avatarDropdown";
import {useSelector} from "react-redux";
import {Button, IconButton} from "@mui/material";
import {useEffect, useState} from "react";
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
    const {token} = useSelector(state => state?.user);
    const [focused, setFocused] = useState(FOCUSED_BTN.home)

    const handleOpenModal = () => setOpenModal(true);

    useEffect(() => {
            if(!openModal){
                setFocused(FOCUSED_BTN.home)
            }
    }, [openModal]);


    return (
        <>
            <CreatePostModal open={openModal} setOpen={setOpenModal}/>
            <nav className={styles.nav}>
                <div className={styles.box}>
                    <div className={styles.brand}>
                        <Link to="/">
                            <img src={process.env.PUBLIC_URL + '/brand.webp'} alt="brand"/>
                        </Link>
                    </div>
                    <div className={styles.search}>
                        <label htmlFor='search'>
                            <input placeholder="Search"  name="search" type="text"/>
                        </label>
                    </div>
                    {token && (
                        <div className={styles.icons}>
                            <Link to="/">
                                <IconButton onClick={() => setFocused(FOCUSED_BTN.home)} disableRipple>
                                    {
                                        focused === "HOME" ?
                                            <HomeFilled/> :
                                            <HomeOutlined/>
                                    }
                                </IconButton>
                            </Link>
                            <IconButton onClick={() => setFocused(FOCUSED_BTN.addPost)} disableRipple>
                                {
                                    focused === "ADD_POST" ?
                                        <AddPostFilled handleOpenModal={handleOpenModal}/> :
                                        <AddPostOutlined handleOpenModal={handleOpenModal}/>
                                }
                            </IconButton>
                            <AvatarDropdown/>
                        </div>
                    )}
                    { !token && (
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
            <div className={styles.behind}/>
        </>
    );
}

export default MainHeader;