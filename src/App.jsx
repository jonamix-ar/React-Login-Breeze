import React, { Suspense, useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import router from './routes'
import Spinner from './components/Spinner'
import axios from 'axios'

const App = () => {
    document.title = 'Legalistas'

    useEffect(() => {
        const interceptor = axios.interceptors.response.use(
            (response) => response,
            (error) => {
                if (error.response && error.response.status === 401) {
                    // Evitar cualquier acción adicional
                    return new Promise(() => {})
                }
                return Promise.reject(error)
            }
        )

        return () => {
            axios.interceptors.response.eject(interceptor)
        }
    }, [])

    return (
        <AuthProvider>
            <Suspense fallback={<Spinner />}>
                <RouterProvider router={router} />
            </Suspense>
        </AuthProvider>
    )
}

export default App
