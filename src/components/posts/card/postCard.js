import Card from '@mui/material/Card';
import { forwardRef } from 'react';
import Divider from "@mui/material/Divider";
import { muiStyles } from '../customMuiStyles'
import styles from '../../../styles/Card.module.css'
import Header from "./header";
import Media from "./media";
import Actions from "./actions";
import Content from "./content";
import AddComment from "./addComment";
import { useSelector } from 'react-redux'
import { useCopyToClick } from '../../../hooks/useCopyToClick';
import Popup from '../../popup';

const PostCard = forwardRef(({ postData }, ref) => {
    const token = useSelector(state => state?.auth?.token)
    const { image_url, user, id, caption, comments, timestamp, likes, liked_users } = postData;
    const [isCopied, handleCopyClick] = useCopyToClick(id)

    return (
        <>
            {isCopied && <Popup text='Link copied to clipboard' />}
            <Card ref={ref} {...muiStyles.card} className={styles.card}>

                <Header caption={caption} id={id} avatar={user?.avatar_url} user={user} />

                <Media className={styles.media} img={image_url} id={id} alt='post' />

                <Actions liked_users={liked_users} onClickToShareIcon={handleCopyClick} postId={id} />

                <Content
                    likes={likes}
                    comments={comments}
                    time={timestamp}
                    user={user?.username}
                    caption={caption}
                    postId={id}
                />

                <Divider />
                {token !== undefined && <AddComment postId={id} />}
            </Card>
        </>

    );
});

export default PostCard