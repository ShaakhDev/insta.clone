import { useEffect } from 'react';
import nprogress from 'nprogress';



function FancyRoute(props) {

    useEffect(() => {
        nprogress.start();
    }, [])

    return (
        <>
            {props.children}
        </>
    );
}

export default FancyRoute;