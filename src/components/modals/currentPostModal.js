import { memo } from 'react';
import { Modal, Button } from '@mui/material';
import CurrentPostCard from 'components/currentPost/currentPostCard';
import { useGetCurrentUserQuery } from '../../rtk/usersApi';
import styles from '../../styles/CurrentPost.module.css';
import ClearIcon from '@mui/icons-material/Clear';

const CurrentPostModal = memo(({ open, setOpen, postData }) => {
    const { data: currentUser } = useGetCurrentUserQuery(1);

    const {
        likes,
        caption,
        comments,
        image_url,
        id,
        liked_users,
        timestamp,
        user,
    } = postData;
    const handleClose = () => setOpen(false);
    return (
        <>
            <Modal
                open={open}
                BackdropProps={{ background: 'rgba(255,255,255,1)' }}
                onBackdropClick={handleClose}
            >
                <div className={styles.modal}>
                    <CurrentPostCard
                        time={timestamp}
                        likes={likes}
                        caption={caption}
                        user={user}
                        comments={comments}
                        image={image_url}
                        id={id}
                        liked_users={liked_users}
                        currentUser={currentUser}
                    />
                    <Button onClick={handleClose} className={styles.close}>
                        <ClearIcon />
                    </Button>
                </div>
            </Modal>
        </>
    );
});

export default CurrentPostModal;
