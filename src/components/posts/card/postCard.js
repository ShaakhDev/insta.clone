import Card from '@mui/material/Card';
import { forwardRef, useState } from 'react';
import Divider from "@mui/material/Divider";
import { muiStyles } from '../customMuiStyles'
import styles from '../../../styles/Card.module.css'
import Header from "./header";
import Media from "./media";
import Actions from "./actions";
import Content from "./content";
import AddComment from "./addComment";
import { useCopyOnClick } from '../../../hooks/useCopyOnClick';
import Popup from '../../popup';
import { BrowserView } from 'react-device-detect';


const PostCard = forwardRef(({ postData }, ref) => {
    const token = localStorage.getItem('access_token');
    const { image_url, user, id, caption, comments, timestamp, likes: postLikes, liked_users } = postData;
    const [isCopied, handleCopyClick] = useCopyOnClick(id)
    const [likes, setLikes] = useState(postLikes)


    const onClickToLikeIcon = (isLiked) => {
        if (isLiked) setLikes(likes => likes + 1)
        else setLikes(likes => likes - 1)

    }

    return (
        <>
            {isCopied && <Popup text='Link copied to clipboard' />}
            <Card ref={ref} {...muiStyles.card} className={styles.card}>

                <Header caption={caption} id={id} avatar={user?.avatar_url} user={user} />

                <Media className={styles.media} img={image_url} postId={id} alt='post' />

                <Actions
                    liked_users={liked_users}
                    onClickToShareIcon={handleCopyClick}
                    postId={id}
                    onClickToLikeIcon={(isLiked) => onClickToLikeIcon(isLiked)}
                />

                <Content
                    likes={likes}
                    comments={comments}
                    time={timestamp}
                    user={user?.username}
                    caption={caption}
                    postId={id}
                />

                <Divider />
                <BrowserView>
                    {token !== undefined && <AddComment postId={id} />}
                </BrowserView>
            </Card>
        </>

    );
});

export default PostCard