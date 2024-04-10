import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Api from "../services/api"

const Logout = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const logout = async () => {
            try {
                await Api.post('/logout')
                localStorage.removeItem('user')
                localStorage.removeItem('token');
                navigate('/')
            } catch (error) {
                console.error('Error during logout:', error)
                // Handle error, such as displaying an error message to the user
            }
        }

        logout()
    }, [navigate])

    // Este componente no renderiza nada, ya que la redirección ocurre dentro del useEffect
    return null
}

export default Logout
