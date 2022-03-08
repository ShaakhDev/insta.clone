import {Link,useNavigate} from 'react-router-dom'
import styles from '../../styles/MainHeader.module.css'
import HomeFilled from "../icons/homeFilled";
import HomeOutlined from "../icons/homeOutlined";
import AddPostFilled from "../icons/addPostFilled";
import AddPostOutlined from "../icons/addPostOutlined";
import AvatarDropdown from "../icons/avatarDropdown";
import {useSelector} from "react-redux";
import {Button} from "@mui/material";

function MainHeader(props) {
    const navigate = useNavigate()
    const token = useSelector(state => state.user.token);
    return (
        <>

        <nav className={styles.nav}>
            <div className={styles.box}>
                    <div className={styles.brand}>
                        <a href="/">
                            <img src={process.env.PUBLIC_URL + '/brand.webp'} alt="brand"/>
                        </a>
                    </div>
                    <div className={styles.search}></div>
                {token&&(
                    <div className={styles.icons}>
                        <HomeFilled/>
                        {/*<HomeOutlined/>*/}
                        <AddPostOutlined/>
                        {/*<AddPostFilled/>*/}
                        {/*<ProfileAvatar/>*/}
                        <AvatarDropdown/>
                    </div>
                )}
                {!token&&(
                    <div className={styles.buttons}>
                        <Button onClick={()=>navigate('/accounts/login')} variant="contained">
                                Log In
                        </Button>
                        <Button onClick={()=>navigate('/accounts/signup')} variant="outlined">
                                Sign Up
                        </Button>
                    </div>
                )}
            </div>
        </nav>
            <div className={styles.behind}></div>
        </>
    );
}

export default MainHeader;