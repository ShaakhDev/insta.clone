import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import styles from '../../../styles/Card.module.css';
import {
    useCalculateDate,
    useCalculatePostedTime,
} from '../../../hooks/useCalculateTime';

function Content({ postId, user, caption, comments, time, likes }) {
    const postedTime = useCalculatePostedTime(time);
    const postedDate = useCalculateDate(time);
    const [more, setMore] = useState(false);
    const CAPTION_CHAR_LIMIT = 65;

    return (
        <>
            <CardContent className={styles.content}>
                {likes > 0 ? (
                    <Typography variant="body1">
                        <b>{likes} likes</b>
                    </Typography>
                ) : null}
                {
                    <Typography variant="body1">
                        <Link to={`/${user}/`}>
                            <b className={styles.user}>{user}</b>
                        </Link>
                        {caption.length > CAPTION_CHAR_LIMIT
                            ? more
                                ? caption
                                : ` ${caption.substring(
                                      0,
                                      CAPTION_CHAR_LIMIT
                                  )}... `
                            : caption}
                        <span
                            className={styles.more}
                            onClick={() => setMore(!more)}
                        >
                            {caption.length > CAPTION_CHAR_LIMIT &&
                                !more &&
                                'more'}
                        </span>
                    </Typography>
                }
                {comments.length > 0 ? (
                    <Typography variant="body1">
                        {comments.length > 1 ? (
                            <Link to={`/post/${postId}/`}>
                                View all {comments.length} comments
                            </Link>
                        ) : (
                            <Link to={`/post/${postId}/`}>
                                View {comments.length} comment
                            </Link>
                        )}
                    </Typography>
                ) : null}
                {
                    <Typography
                        title={postedDate}
                        className={styles.time}
                        variant="body1"
                        color="info"
                    >
                        {postedTime}
                    </Typography>
                }
            </CardContent>
        </>
    );
}

export default Content;
