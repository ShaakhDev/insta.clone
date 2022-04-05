import React, {useState} from 'react';
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import styles from '../../../styles/Card.module.css'
import {useCalculateDate, useCalculatePostedTime} from "../../../hooks/useCalculateTime";


function Content({postId,user, caption, comments, time, likes}) {
    const postedTime = useCalculatePostedTime(time);
    const postedDate = useCalculateDate(time);
    const [like, setLike] = useState(likes);



    return (
        <>
            <CardContent className={styles.content}>
                {like > 0 ? (
                    <Typography variant="body1">
                        <b>{like} likes</b>
                    </Typography>
                ) : null}
                {
                    <Typography variant="body1">
                        <b>{user}</b> {caption}
                    </Typography>
                }
                {comments.length > 0 ? (
                    <Typography variant="body1">
                        {comments.length > 1 ? (
                            <a href={`/p/${postId}`}>
                                View all {comments.length} comments
                            </a>
                        ) : (
                            <a href={`/p/${postId}`}>
                                View {comments.length} comment
                            < /a>
                        )}
                    </Typography>
                ) : null}
                {
                    <Typography title={postedDate} className={styles.time} variant="body1" color='info'>
                        {postedTime}
                    </Typography>
                }
            </CardContent>
        </>
    );
}

export default Content;