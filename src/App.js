import "./App.css";
import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ROUTES } from './routes'
import FancyRoute from "./components/tools/FancyRoute";



function App() {

    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
                {/* <Route path='/' element={<Home />} />
                <Route path='/:user' element={<Profile />} />
                <Route path="/p/:postId" element={<CurrentPost />} />
                <Route path="/accounts/login" element={<Login />} />
                <Route path="/accounts/signup" element={<SignUp />} /> */}
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
            </Routes>
        </Suspense>

    );
}


export default App;
