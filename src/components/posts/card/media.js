import React, { useEffect, useMemo, useState } from 'react';
import CardMedia from "@mui/material/CardMedia";
import { Link } from 'react-router-dom'
import { isMobile } from 'react-device-detect'

function Media({ img, postId }) {
    const [url, setUrl] = useState('')

    useEffect(() => {
        setUrl(img)
    }, [img])
    return (
        <>
            {useMemo(() => {

                return (
                    <Link to={isMobile ? `/post/view/${postId}` : `/post/${postId}`}>
                        <CardMedia
                            component="img"
                            height="auto"
                            image={url}
                            alt="post"
                            sx={{
                                '@media (max-width: 600px)': {
                                    height: '90vw',
                                },
                                '@media (min-width: 600px)': {
                                    maxHeight: '61.4rem',
                                    height: '61.4rem',
                                }

                            }}
                        />
                    </Link>
                )
            }, [url])

            }
        </>
    );
}

export default Media;