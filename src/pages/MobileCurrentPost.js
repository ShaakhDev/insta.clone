import React, { useEffect } from 'react'
import MobileCurrentPostcard from '../components/currentPost/mobileCurrentPostcard';
import nprogress from 'nprogress'


function MobileCurrentPost() {


    useEffect(() => {
        setInterval(() => {
            nprogress.done()
        }, 1000)
    }, [])
    return (
        <MobileCurrentPostcard />
    )
}

export default MobileCurrentPost