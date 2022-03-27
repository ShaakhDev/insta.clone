import React, {useState} from 'react';
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import styles from '../../../styles/Card.module.css'
import useCalculateTime from "../../../hooks/useCalculateTime";
import {useSelector} from 'react-redux';
import {Skeleton} from "@mui/material";

function Content({user, caption, comments, time, likes}) {
    const postedTime = useCalculateTime(time);
    const [like, setLike] = useState(likes);
    const {loading} = useSelector(state => state?.post);

    return (
        <>
            <CardContent className={styles.content}>
                {like > 0 ? (
                    loading ? (
                        <Skeleton animation="wave" height={22} width={150} style={{marginBottom: 6}}/>
                    ) : (
                        <Typography variant="body1">
                            <b>{like} likes</b>
                        </Typography>
                    )
                ) : null}
                {
                    loading ? (
                        <Skeleton animation="wave" height={22}  style={{marginBottom: 6}}/>
                    ) : (
                        <Typography variant="body1">
                            <b>{user}</b> {caption}
                        </Typography>
                    )
                }
                {comments.length > 0 ? (
                    loading ? (
                        <Skeleton animation="wave" height={22} width={140} style={{marginBottom: 10}}/>
                        ) : (

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
                        )
                ) : null}
                {
                    loading ? (
                        <Skeleton animation="wave" height={22} width={70} style={{marginBottom: 10}}/>
                    ) : (
                        <Typography className={styles.time} variant="body1" color='info'>
                            {postedTime}
                        </Typography>
                    )
                }
            </CardContent>
        </>
    );
}

export default Content;