import React from 'react';
import Card from '@mui/material/Card'
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import styles from "../../styles/CurrentPost.module.css";
import CardHeader from '@mui/material/CardHeader';
import {Link} from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import useCalculateTime from "../../hooks/useCalculateTime";
import Actions from "../posts/card/actions";
import AddComment from "../posts/card/addComment";
import {useSelector} from "react-redux";
import Comment from "./comment";

function CurrentPostCard({time,likes,caption,user,comments}) {
    const postedTime = useCalculateTime(time);
    const {token} = useSelector(state=>state?.user)

    return (
        <>
            <div className={styles.home}>
                <div className={styles.box}>
                    <Card sx={{maxHeight: 580,display:'flex'}}>
                        <Box sx={{maxWidth: 600, display: 'flex', flexDirection: 'column',flexBasis:600}}>

                            <CardMedia
                                component="img"
                                height="598rem"
                                image={process.env.PUBLIC_URL + '/img.jpg'}
                                alt="post"
                            />
                        </Box>
                        <Box sx={{width:'auto',display:'flex',flexDirection:'column',flexBasis:350}}>
                            <CardHeader
                                sx={{borderBottom:'.5px solid #dbdbdb',padding:'1rem 1.2rem',display:'flex', alignItems:'center'}}
                                avatar={

                                        <Link style={{color: "#333"}} to='/shakhzod'>
                                            <Avatar sx={{width: 32, height: 32}}>
                                                <img style={{width: '100%', cursor: "pointer"}} src={process.env.PUBLIC_URL + '/img.jpg'} alt="avatar"/>
                                            </Avatar>
                                        </Link>

                                }
                                action={

                                        <IconButton  aria-label="settings">
                                            <MoreHorizIcon fontSize='large'/>
                                        </IconButton>

                                }
                                title={

                                        <Link style={{color: "#333"}} to='/shakhzod'>
                                            <b onClick={() => console.log('clicked')}>shakhzod</b>
                                        </Link>

                                }

                            />

                            <Box className={styles.comments}>
                                <Comment/>
                                <Comment/>
                                <Comment/>
                                <Comment/>
                                <Comment/>
                                <Comment/>
                                <Comment/>
                                <Comment/>
                                <Comment/>
                                <Comment/>
                                <Comment/>
                                <Comment/>
                            </Box>
                            <CardContent className={styles.content}>
                            <Actions/>

                                {likes> 0 ? (
                                    <Typography variant="body1">
                                        <b>{likes} likes</b>
                                    </Typography>
                                ) : null}
                                {
                                    <Typography className={styles.time} variant="body1" color='info'>
                                        {postedTime}
                                    </Typography>
                                }
                            </CardContent>
                            {token ? <AddComment/>:(
                                <Typography className={styles.noComment}>
                                    <Link to="/accounts/login">
                                        Log in
                                    </Link>
                                  &nbsp; to like or comment.
                                </Typography>
                            )}
                        </Box>

                    </Card>
                </div>
            </div>


        </>
    );
}

export default CurrentPostCard;