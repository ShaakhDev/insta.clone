import {useState,useEffect}from 'react';
import Box from '@mui/material/Box';
import {Avatar} from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import {Link,useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from "react-redux";
import {getCurrentUser} from "../../store/actions/userActions";

export default function AvatarDropdown() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const { user} = useSelector(state => state?.user);


    const logOutHandle = (e)=>{
        localStorage.removeItem('token');
        localStorage.removeItem('token_type');
        console.log('logged out')
        window.location.reload(true)
    }
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Box sx={{display: 'flex', alignItems: 'center', textAlign: 'center'}}>
                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar src={user?.avatar_url || (process.env.PUBLIC_URL + '/avatar.webp')}
                                sx={{width: 32, height: 32}}/>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 1px 4px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        ml: 5,
                        width: 150,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 45,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
            >
                <MenuItem sx={{fontSize: "1.5rem"}}>
                    <Link style={{textDecoration: "none", color: "inherit"}} to={user?.username}>
                        Profile
                    </Link>
                </MenuItem>
                <Divider/>
                <MenuItem onClick={()=>logOutHandle()} sx={{fontSize: "1.5rem"}}>
                    Log Out
                </MenuItem>
            </Menu>
        </>
    );
}
