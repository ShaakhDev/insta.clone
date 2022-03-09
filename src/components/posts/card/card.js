import Card from '@mui/material/Card';
import Divider from "@mui/material/Divider";
import {muiStyles} from '../customMuiStyles'
import Header from "./header";
import Media from "./media";
import Actions from "./actions";
import Content from "./content";
import AddComment from "./addComment";

export default function PostCard({postData}) {
    const {image_url,user,id,caption}=postData
    return (
        <Card {...muiStyles.card}>
            <Header avatar={user?.avatar_url} user={user?.username}/>
            <Media img={image_url} alt='post'/>
            <Actions />
            <Content user={user?.username} caption={caption}/>
            <Divider/>

            <AddComment/>
        </Card>
    );
}