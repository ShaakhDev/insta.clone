import React from 'react';
import styles from "../../../styles/Profile.module.css";

function CommentIcon({comments}) {
    return (
        <>
            <div className={styles.icon}>
                <svg aria-label="AddComment" color="#333" fill="#333" height="24"
                     role="img"
                     viewBox="0 0 24 24" width="24">
                    <path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="#fff"
                    />
                </svg>
                <span>{comments}</span>
            </div>

        </>
    );
}

export default CommentIcon;