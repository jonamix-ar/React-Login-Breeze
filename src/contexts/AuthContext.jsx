import { createContext, useContext } from 'react'
import { authHooks } from '../hooks/authHooks'

const AuthContent = createContext({
    user: null,
    error: null,
    register: () => {},
    login: () => {},
    forgotPassword: () => {},
    resetPassword: () => {},
    resendEmailVerification: () => {},
    logout: () => {},
})

export const AuthProvider = ({ children }) => {
    const auth = authHooks()

    return <AuthContent.Provider value={auth}>{children}</AuthContent.Provider>
}

export const useAuth = () => useContext(AuthContent)
