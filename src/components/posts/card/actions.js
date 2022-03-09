import React from 'react';
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "../favoriteIcon";
import CommentIcon from "../commentIcon";
import ShareIcon from "../shareIcon";

function Actions(props) {
    return (
        <>
            <CardActions disableSpacing>
                <IconButton disableRipple={true} aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <CommentIcon />
                </IconButton>
                <IconButton aria-label="comment">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </>
    );
}

export default Actions;