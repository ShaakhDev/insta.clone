import React from 'react';
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "../../postIcons/favoriteIcon";
import CommentIcon from "../../postIcons/commentIcon";
import ShareIcon from "../../postIcons/shareIcon";
import {muiStyles} from '../customMuiStyles'
import {useSelector} from 'react-redux'
import {Skeleton} from "@mui/material";
import {Link} from 'react-router-dom'

function Actions({postId}) {
    const {loading} = useSelector(state => state?.post)

    return (
        <>
            <CardActions disableSpacing>
                {
                    loading ? (
                        <Skeleton animation="wave" height={40} width={120} style={{marginLeft: 10}} />
                    ) : (
                        <>
                            <IconButton {...muiStyles.actions} aria-label="add to favorites">
                                <FavoriteIcon/>
                            </IconButton>
                            <IconButton  {...muiStyles.actions} aria-label="share">
                                <Link to={`/p/${postId}`}>
                                    <CommentIcon/>
                                </Link>
                            </IconButton>
                            <IconButton {...muiStyles.actions} aria-label="comment">
                                <ShareIcon/>
                            </IconButton>
                        </>
                    )
                }

            </CardActions>
        </>
    );
}

export default Actions;