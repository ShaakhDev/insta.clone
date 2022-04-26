import React from 'react';
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "../../postIcons/favoriteIcon";
import CommentIcon from "../../postIcons/commentIcon";
import ShareIcon from "../../postIcons/shareIcon";
import {muiStyles} from '../customMuiStyles'
import {Link} from 'react-router-dom'

function Actions({postId}) {

    return (
        <>
            <CardActions sx={{paddingBottom: '0'}} disableSpacing>
                    <IconButton {...muiStyles.actions} >
                        <FavoriteIcon postId={postId}/>
                    </IconButton>
                    <IconButton  {...muiStyles.actions} >
                        <Link to={`/p/${postId}`}>
                            <CommentIcon/>
                        </Link>
                    </IconButton>
                    <IconButton {...muiStyles.actions} >
                        <ShareIcon/>
                    </IconButton>
            </CardActions>
        </>
    );
}

export default Actions;