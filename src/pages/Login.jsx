import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { Card, Button, Form } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import { useAuth } from '../contexts/AuthContext'
import logoLegalistas from '../assets/images/logos/logo-legalistas.svg'

import LogoIcon from '../components/LogoIcon'
import GoogleIcon from '../components/icons/Google'

export default function Login() {
    const router = useLocation()

    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [shouldRemember, setShouldRemember] = useState(false)
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    useEffect(() => {
        if (router.reset?.length > 0 && errors.length === 0) {
            setStatus(atob(router.reset))
        } else {
            setStatus(null)
        }
    })

    const submitForm = async (event) => {
        event.preventDefault()

        login({
            email,
            password,
            remember: shouldRemember,
            setErrors,
            setStatus,
        })
    }

    const gradient = {
        backgroundImage:
            'linear-gradient(90deg, rgba(7,133,142,0.7175245098039216) 25%, rgba(9,167,178,1) 75%)',
        overflowY: 'hidden',
        maxWidth: '100%',
    }

    const maxHeight = {
        height: '100vh',
    }

    return (
        <div className="position-relative" style={gradient}>
            <LogoIcon className="legalistas-icon-top" />
            <LogoIcon className="legalistas-icon-bottom" />
            <ToastContainer />
            <div className="pt-2 pt-sm-5 pb-4 pb-sm-5" style={maxHeight}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-8 col-xs-6 col-sm-12 mx-auto">
                            <img
                                alt="Legalistas "
                                width={340}
                                height={80}
                                src={logoLegalistas}
                                className="d-block mx-auto mb-4"
                            />
                            <Card className="card p-4 shadow">
                                <Card.Header>
                                    <div className="text-center w-100 m-auto">
                                        <h1 className="text-muted text-center pb-0 fw-bold fs-7">
                                            Inicia sesión
                                        </h1>

                                        <p className="welcomeText text-muted">
                                            ¡Bienvenido, podrás iniciar sesión
                                            fácilmente con los detalles que te
                                            proporcionaremos.!
                                        </p>
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <Form
                                        action="#"
                                        method="post"
                                        onSubmit={submitForm}
                                    >
                                        <Form.Group
                                            className="mb-3"
                                            controlId="email"
                                        >
                                            <Form.Label className="form-label fw-normal fs-8 text-muted">
                                                Correo electrónico
                                            </Form.Label>
                                            <Form.Control
                                                className="form-control"
                                                required
                                                autoComplete="email"
                                                autoFocus
                                                name="email"
                                                type="email"
                                                value={email}
                                                onChange={(event) =>
                                                    setEmail(event.target.value)
                                                }
                                                placeholder="Correo electrónico"
                                            />
                                        </Form.Group>

                                        <Form.Group
                                            className="mb-3"
                                            controlId="password"
                                        >
                                            <Form.Label className="form-label fw-normal fs-8 text-muted">
                                                Contraseña
                                            </Form.Label>
                                            <Form.Control
                                                className="form-control"
                                                required
                                                autoComplete="password"
                                                autoFocus
                                                name="password"
                                                type="password"
                                                value={password}
                                                onChange={event => setPassword(event.target.value)}
                                                placeholder="Ingrese su contraseña"
                                            />
                                        </Form.Group>

                                        <p className="text-center fs-9 d-flex align-items-center justify-content-center text-muted">
                                            ¿Olvidaste tu contraseña?
                                            <NavLink
                                                to="/forgot-password"
                                                exact="true"
                                                className="ms-2 text-muted"
                                            >
                                                Recuperar contraseña
                                            </NavLink>
                                        </p>

                                        <Button
                                            type="submit"
                                            className="btn-primary btn-lg fw-normal w-100"
                                        >
                                            Iniciar sesión
                                        </Button>

                                        <p className="text-center fs-9 mt-4 mb-2 text-muted">
                                            o inicia sesión con:
                                        </p>

                                        <Button
                                            variant="outline-light"
                                            className="justify-content-center d-flex align-items-center w-100"
                                        >
                                            <GoogleIcon
                                                width="16"
                                                height="16"
                                            />
                                            <span className="text-dark">
                                                Inicia sesión con Google
                                            </span>
                                        </Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
