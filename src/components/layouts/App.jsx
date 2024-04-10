import React, { useEffect, useState } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import Api from '../../services/api'
import { useAuth } from '../../contexts/AuthContext'
import Navigation from '../partials/Navigation'
import Spinner from '../Spinner'

export default function Main() {
    const { user, setUser } = useAuth()
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    const fetchUser = async () => {
        try {
            const resp = await Api.get('/user')
            if (resp.status === 200) {
                setUser(resp.data.data)
            }
        } catch (error) {
            handleFetchUserError(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchUser()
    }, [navigate])

    const handleFetchUserError = (error) => {
        setLoading(false)
        if (error.response?.status === 401) {
            setUser(null)
        } else if (error.response?.status === 429) {
            // Si recibes un error 429, espera un tiempo y luego vuelve a intentar la solicitud
            setTimeout(fetchUser, 3000) // Espera 3 segundos antes de volver a intentar la solicitud
            return
        }
    }

    if (loading) {
        return <Spinner />
    }

    if (!user) {
        return <Navigate to="/" replace />
    }

    return (
        <>
            <Navigation />
            <main className="container flex justify-center flex-col items-center mt-10 m-auto">
                <Outlet />
            </main>
        </>
    )
}
