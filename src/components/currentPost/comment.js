import React from 'react';
import {Avatar} from "@mui/material";
import {Link} from "react-router-dom";
import styles from '../../styles/CurrentPost.module.css'
import Typography from "@mui/material/Typography";


function Comment({id,user,time,text}) {
    return (
        <div className={styles.commentWrapper}>
            <Avatar
                alt={user?.username}
                src={process.env.PUBLIC_URL + '/img.jpg'}
                sx={{marginRight:"2rem",width: 32, height: 32}}

            />
            <div className={styles.comment}>

                <Link style={{color: "#333"}} to='/shakhzod'>
                    <b onClick={() => console.log('clicked')}>shakhzod</b>
                </Link>
                <Typography className={styles.caption} variant="caption">
                        hello everyone how are you doing now and what's going on guys let's talk about recent work on your life
                </Typography>
            </div>


        </div>
    );
}

export default Comment;