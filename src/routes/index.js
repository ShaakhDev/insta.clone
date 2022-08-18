
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
        element: Login
    },
    {
        path: '/signup',
        element: SignUp,
    },
    {
        path: '/404',
        element: lazy(() => import('../pages/404'))
    },
    {
        path: '*',
        element: lazy(() => import('../pages/404'))
    }

]