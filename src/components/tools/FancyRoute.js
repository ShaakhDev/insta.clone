import { useEffect, useState } from 'react';
import nprogress from 'nprogress';



function FancyRoute(props) {
    // const [routePath, setRoutePath] = useState(null);
    useEffect(() => {
        nprogress.start();
        // setRoutePath(props.location.pathname);
        // return () => {
        //     nprogress.done();
        // }
    }, [])


  
    return (
        <>
            {props.children}
        </>
    );
}

export default FancyRoute;