import "./App.css";
import { lazy, Suspense } from 'react'

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { Routes, Route } from 'react-router-dom'
// import Home from "./pages/Home";
const Home = lazy(() => import('./pages/Home'));
const Profile = lazy(() => import('./pages/Profile'));
const Posts = lazy(() => import('./pages/Posts'))
const CurrentPost = lazy(() => import('./pages/CurrentPost'))
// import Profile from "./pages/Profile";
// import Posts from "./pages/Posts";
// import CurrentPost from "./pages/CurrentPost";

function App() {

    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
                <Route path='/' element={<Home />}>
                    <Route path=':user' element={<Profile />} />
                    <Route index element={<Posts />} />
                    <Route path="/p/*">
                        <Route path=":postId" element={<CurrentPost />} />
                    </Route>
                </Route>
                <Route path="/accounts/*">
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<SignUp />} />
                </Route>

            </Routes>
        </Suspense>

    );
}

export default App;
