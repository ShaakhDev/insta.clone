import React, { Suspense, useLayoutEffect } from 'react';
import Loader from './components/loader';
import Navigation from 'Navigation';
import Navbar from 'components/layout/Navbar';

function App() {
    useLayoutEffect(() => {
        if (sessionStorage.wasWarned === undefined) {
            sessionStorage.setItem('wasWarned', false);
        }
    }, []);

    return (
        <Suspense fallback={<Loader />}>
            <Navbar />
            <Navigation />
        </Suspense>
    );
}

export default App;
