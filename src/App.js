import "./App.css";
import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ROUTES } from './routes'
import FancyRoute from "./components/tools/FancyRoute";
import Loader from "./components/loader";
import { isMobile } from 'react-device-detect'
import MobileCurrentPost from "./pages/MobileCurrentPost";

function App() {

    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                {
                    ROUTES.map((route, i) => {
                        return (
                            <Route key={i} path={route.path} element={
                                <FancyRoute>
                                    <route.element />
                                </FancyRoute>} />
                        )
                    })
                }
                {isMobile && (
                    <Route path='/post/view/:postId' element={
                        <FancyRoute>
                            <MobileCurrentPost />
                        </FancyRoute>

                    } />
                )}
            </Routes>
        </Suspense>
    );
}


export default App;
