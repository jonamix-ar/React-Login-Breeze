import React from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { Navigate } from 'react-router-dom'

const ProtectedRedirect = ({ to, fallback }) => {
    const { user } = useAuth()

    // Si el usuario está autenticado, redirige a la ruta especificada
    // Si no, muestra el componente de fallback (puede ser una página de inicio de sesión)
    return user ? <Navigate to={to} replace /> : fallback
}

export default ProtectedRedirect
