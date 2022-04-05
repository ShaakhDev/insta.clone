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
import {Skeleton} from "@mui/material";

function PostCard({postData}) {
    const {token} = useSelector(state => state?.user);
    const {image_url, user, id, caption, comments, timestamp, likes} = postData;
    const {loading} = useSelector(state => state?.post);


    const LoaderSkeleton = () => {
        return (
            <div style={{padding:"0 1.6rem"}}>
                <Skeleton animation="wave" height={22} width={150} style={{marginBottom: 6}}/>
                <Skeleton animation="wave" height={22} style={{marginBottom: 6}}/>
                <Skeleton animation="wave" height={22} width={140} style={{marginBottom: 10}}/>
                <Skeleton animation="wave" height={22} width={70} style={{marginBottom: 10}}/>
            </div>
        )
    }
    return (
        <Card {...muiStyles.card} className={styles.card}>
            <Header avatar={user?.avatar_url} user={user?.username}/>
            {loading ? <Skeleton sx={{height: 614}} animation="wave" variant="rectangular"/> : (
                <Media className={styles.media} img={image_url} id={id} alt='post'/>
            )}
            <Actions postId={id}/>
            {loading ? <LoaderSkeleton/> : (
                <Content
                    likes={likes}
                    comments={comments}
                    time={timestamp}
                    user={user?.username}
                    caption={caption}
                    postId={id}
                />
            )}
            <Divider/>
            {token && <AddComment/>}
        </Card>
    );
}

export default PostCard