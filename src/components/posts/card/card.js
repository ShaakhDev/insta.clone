import Card from '@mui/material/Card';
import Divider from "@mui/material/Divider";
import {muiStyles} from '../customMuiStyles'
import styles from '../../../styles/Card.module.css'
import Header from "./header";
import Media from "./media";
import Actions from "./actions";
import Content from "./content";
import AddComment from "./addComment";

function PostCard({postData}) {
    const {image_url, user, id, caption, comments, timestamp, likes} = postData;
    return (
        <Card {...muiStyles.card} className={styles.card}>
            <Header avatar={user?.avatar_url} user={user?.username}/>
            <Media img={image_url} alt='post'/>
            <Actions/>
            <Content
                likes={likes}
                comments={comments}
                time={timestamp}
                user={user?.username}
                caption={caption}/>
            <Divider/>

            <AddComment/>
        </Card>
    );
}

// eslint-disable-next-line react-hooks/rules-of-hooks
export default PostCard