import useSWR from 'swr'
import api from '../services/api'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';

export const authHooks = ({ middleware, redirectIfAuthenticated } = {}) => {
    const params = useParams()

    const {
        data: user,
        error,
        mutate,
    } = useSWR('/api/user', () =>
        api
            .get('/api/user')
            .then((res) => res.data)
            .catch((error) => {
                if (error.response.status === 401) {
                    // Manejar el error de autorización, redirigir a la página de inicio de sesión, etc.
                } else if (error.response.status === 409) {
                    window.location.pathname = '/verify-email';
                } else {
                    throw error;
                }
            })
    )

    const csrf = () => api.get('/sanctum/csrf-cookie')

    const register = async ({ setErrors, ...props }) => {
        await csrf()

        setErrors([])

        api.post('/register', props)
            .then(() => mutate())
            .catch((error) => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const login = async ({ setErrors, setStatus, ...props }) => {
        await csrf()

        setErrors([])
        setStatus(null)

        api.post('/login', props)
            .then(() => mutate())
            .catch((error) => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const forgotPassword = async ({ setErrors, setStatus, email }) => {
        await csrf()

        setErrors([])
        setStatus(null)

        api.post('/forgot-password', { email })
            .then((response) => setStatus(response.data.status))
            .catch((error) => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const resetPassword = async ({ setErrors, setStatus, ...props }) => {
        await csrf()

        setErrors([])
        setStatus(null)

        api.post('/reset-password', { token: params.token, ...props })
            .then((response) =>
                router.push('/login?reset=' + btoa(response.data.status))
            )
            .catch((error) => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const resendEmailVerification = ({ setStatus }) => {
        api.post('/email/verification-notification').then((response) =>
            setStatus(response.data.status)
        )
    }

    const logout = async () => {
        if (!error) {
            await api.post('/logout').then(() => mutate())
        }

        window.location.pathname = '/login'
    }

    useEffect(() => {
        if (middleware === 'guest' && redirectIfAuthenticated && user)
            router.push(redirectIfAuthenticated)
        if (
            window.location.pathname === '/verify-email' &&
            user?.email_verified_at
        )
            router.push(redirectIfAuthenticated)
        if (middleware === 'auth' && error) logout()
    }, [user, error])

    return {
        user,
        register,
        login,
        forgotPassword,
        resetPassword,
        resendEmailVerification,
        logout,
    }
}
