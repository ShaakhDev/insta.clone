import React, { useEffect, useMemo, useState } from 'react';
import CardMedia from "@mui/material/CardMedia";

function Media({ img }) {
    const [url, setUrl] = useState('')

    useEffect(() => {
        setUrl(img)
    }, [img])
    return (
        <>
            {useMemo(() => {
                return (
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
                )
            }, [url])

            }
        </>
    );
}

export default Media;