import React from 'react';
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "../favoriteIcon";
import CommentIcon from "../commentIcon";
import ShareIcon from "../shareIcon";
import {muiStyles} from '../customMuiStyles'
function Actions() {

    return (
        <>
            <CardActions disableSpacing>
                <IconButton {...muiStyles.actions} aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton {...muiStyles.actions} aria-label="share">
                    <CommentIcon />
                </IconButton>
                <IconButton {...muiStyles.actions} aria-label="comment">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </>
    );
}

export default Actions;