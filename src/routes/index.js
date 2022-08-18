
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
        path: '/post/:postId',
        element: lazy(() => import('../pages/CurrentPost')),
    },
    {
        path: '/login',
        // element: lazy(() => import('../pages/Login')),
        element: Login
    },
    {
        path: '/signup',
        element: SignUp,
    },


]