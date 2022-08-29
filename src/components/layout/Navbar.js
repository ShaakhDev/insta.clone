import { Link, useNavigate } from 'react-router-dom';
import styles from '../../styles/MainHeader.module.css';
import HomeFilled from '../mainHeaderIcons/homeFilled';
import HomeOutlined from '../mainHeaderIcons/homeOutlined';
import AddPostOutlined from '../mainHeaderIcons/addPostOutlined';
import AvatarDropdown from '../mainHeaderIcons/avatarDropdown';
import { Button, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CreatePostModal from '../modals/createPostModal';
import AddPostFilled from '../mainHeaderIcons/addPostFilled';

import Brand from 'brand';
import Warning from 'components/warning';
import { BrowserView, MobileView } from 'react-device-detect';

const FOCUSED_BTN = {
    home: 'HOME',
    addPost: 'ADD_POST',
    profile: 'PROFILE',
};

function Navbar() {
    const [openModal, setOpenModal] = useState(false);
    const [focused, setFocused] = useState(FOCUSED_BTN.home);
    const token = localStorage.getItem('access_token');
    const [wasWarned, setWasWarned] = useState(false);
    const navigate = useNavigate();

    const handleWarning = (e) => {
        e.stopPropagation();
        setWasWarned(true);
        sessionStorage.setItem('wasWarned', true);
    };
    const handleOpenModal = () => setOpenModal(true);

    useEffect(() => {
        if (!openModal) setFocused(FOCUSED_BTN.home);
    }, [openModal]);

    return (
        <React.Fragment>
            <CreatePostModal open={openModal} setOpen={setOpenModal} />
            <nav className={styles.nav}>
                {!wasWarned && sessionStorage.wasWarned === 'false' && (
                    <Warning onClick={handleWarning} />
                )}
                <div className={styles.box}>
                    <BrowserView>
                        <Link to="/">
                            <Brand size={5} />
                        </Link>
                    </BrowserView>
                    <MobileView>
                        <Link to="/">
                            <Brand size={3.5} />
                        </Link>
                    </MobileView>

                    <div className={styles.secondPart}>
                        <div className={styles.search}>
                            <label htmlFor="search">
                                <input
                                    placeholder="Search"
                                    name="search"
                                    type="text"
                                />
                            </label>
                        </div>
                        {token && (
                            <div className={styles.icons}>
                                <Link to="/">
                                    <IconButton
                                        onClick={() =>
                                            setFocused(FOCUSED_BTN.home)
                                        }
                                        disableRipple
                                    >
                                        {focused === FOCUSED_BTN.home ? (
                                            <HomeFilled />
                                        ) : (
                                            <HomeOutlined />
                                        )}
                                    </IconButton>
                                </Link>
                                <IconButton
                                    onClick={() =>
                                        setFocused(FOCUSED_BTN.addPost)
                                    }
                                    disableRipple
                                >
                                    {focused === FOCUSED_BTN.addPost ? (
                                        <AddPostFilled
                                            handleOpenModal={handleOpenModal}
                                        />
                                    ) : (
                                        <AddPostOutlined
                                            handleOpenModal={handleOpenModal}
                                        />
                                    )}
                                </IconButton>
                                <AvatarDropdown
                                    setFocused={(icon) => setFocused(icon)}
                                    focused={focused}
                                    onClick={() =>
                                        setFocused(FOCUSED_BTN.profile)
                                    }
                                />
                            </div>
                        )}
                    </div>
                    {!token && (
                        <div className={styles.buttons}>
                            <Button
                                onClick={() => navigate('/login')}
                                variant="contained"
                            >
                                Log In
                            </Button>
                            <Button
                                onClick={() => navigate('/signup')}
                                variant="outlined"
                            >
                                Sign Up
                            </Button>
                        </div>
                    )}
                </div>
            </nav>
        </React.Fragment>
    );
}

export default Navbar;
