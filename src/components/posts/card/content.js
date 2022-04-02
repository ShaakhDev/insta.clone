import React, {useState} from 'react';
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import styles from '../../../styles/Card.module.css'
import useCalculateTime from "../../../hooks/useCalculateTime";


function Content({user, caption, comments, time, likes}) {
    const postedTime = useCalculateTime(time);
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
                            <a href="#">
                                View all {comments.length} comments
                            </a>
                        ) : (
                            <a href="#">
                                View {comments.length} comment
                            < /a>
                        )}
                    </Typography>
                ) : null}
                {
                    <Typography className={styles.time} variant="body1" color='info'>
                        {postedTime}
                    </Typography>
                }
            </CardContent>
        </>
    );
}

export default Content;