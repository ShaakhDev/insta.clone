import React from 'react';
import {Avatar} from "@mui/material";
import {Link} from "react-router-dom";
import styles from '../../styles/CurrentPost.module.css'
import Typography from "@mui/material/Typography";
import {useCalculateCommentedTime,useCalculateDate} from "../../hooks/useCalculateTime";

function Comment({user,time,text}) {
    const commentedTime=useCalculateCommentedTime(time)
    const commentedDate = useCalculateDate(time)

    return (
        <div className={styles.commentWrapper}>
           <Link to={`/${user?.username}`}>
               <Avatar
                   alt={user?.username}
                   src={user?.avatar_url}
                   sx={{marginRight:"2rem",width: 32, height: 32}}
               />
           </Link>
            <div className={styles.comment}>
                <Link style={{color: "#333"}} to={`/${user?.username}`}>
                    <b>{user?.username}</b>
                </Link>
                <Typography className={styles.caption} variant="caption">
                    {text}
                </Typography>
                <Typography title={commentedDate} className={styles.time} variant="body1" color='info'>
                    {commentedTime}
                </Typography>
            </div>


        </div>
    );
}

export default Comment;