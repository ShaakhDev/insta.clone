import Card from '@mui/material/Card';
import Divider from "@mui/material/Divider";
import {muiStyles} from '../customMuiStyles'
import styles from '../../../styles/Card.module.css'
import Header from "./header";
import Media from "./media";
import Actions from "./actions";
import Content from "./content";
import AddComment from "./addComment";
import {useSelector} from "react-redux";

function PostCard({postData}) {
    const {token} =useSelector(state=>state.user);
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

            {token&& <AddComment/>}
        </Card>
    );
}

export default PostCard