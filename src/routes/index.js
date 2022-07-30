// import Home from "../pages/Home";
// import Profile from "../pages/Profile";
// import Posts from "../pages/Posts";
// import CurrentPost from "../pages/CurrentPost";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import { lazy } from "react"

export const ROUTES = [
    {
        path: '/',
        element: lazy(() => import('../pages/Home')),

    },
    {
        path: '/:user',
        element: lazy(() => import('../pages/Profile')),
    },
    {
        path: '/p/:postId',
        element: lazy(() => import('../pages/CurrentPost')),
    },
    {
        path: '/accounts/login',
        // element: lazy(() => import('../pages/Login')),
        element: Login
    },
    {
        path: '/accounts/signup',
        element: SignUp,
    },


]