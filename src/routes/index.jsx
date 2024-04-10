import React, { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import ProtectedLayout from '../components/layouts/App'
import GuestLayout from '../components/layouts/Guest'

// Lazy loading para las páginas
const Login = lazy(() => import('../pages/Login'))
const About = lazy(() => import('../pages/About'))
const Procedures = lazy(() => import('../pages/Procedures'))
const Profile = lazy(() => import('../pages/Profile'))
const Register = lazy(() => import('../pages/Register'))
const Logout = lazy(() => import('../pages/Logout'))
const NotFound = lazy(() => import('../pages/NotFound'))

// New Lazy
const Causes = lazy(() => import('../pages/Procedures/index'))

const router = createBrowserRouter([
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            },
        ],
    },
    {
        path: '/',
        element: <ProtectedLayout />,
        children: [
            {
                path: '/mis-tramites',
                element: <Procedures />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/profile',
                element: <Profile />,
            },
            {
                path: '/logout',
                element: <Logout />,
            },
        ],
    },
    {
        path: '*',
        element: <NotFound />,
    },
])

export default router
