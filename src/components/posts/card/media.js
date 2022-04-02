import React, {useEffect, useMemo, useState} from 'react';
import CardMedia from "@mui/material/CardMedia";

function Media({img}) {
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
                        height="614rem"
                        image={url}
                        alt="post"
                    />
                )
            }, [url])
                // <Memo/>
            }
        </>
    );
}

export default Media;