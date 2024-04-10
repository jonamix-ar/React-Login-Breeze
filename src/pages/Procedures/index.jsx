import React, { useState, useEffect } from 'react'
import Api from '../../services/api'
import { useAuth } from '../../contexts/AuthContext'
import { formatCompleteName, formatDate, formatPhoneNumber } from '../../utils'
import { Card, Row, Col, Spinner } from 'react-bootstrap'

const Procedures = () => {
    const { user } = useAuth()
    const [causas, setCausas] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Función para cargar las causas del cliente desde la API
        async function fetchCausas() {
            try {
                // Realiza una petición POST a la ruta de la API
                const response = await Api.post(
                    `/causes`,
                    {
                        // Coloca el user_id en el cuerpo de la solicitud
                        user_id: user.id,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${user.token}`,
                        },
                    }
                )
                // Actualiza el estado con las causas recibidas
                setCausas(response.data.causas)
            } catch (error) {
                console.error('Error al cargar las causas:', error)
            } finally {
                // Establece isLoading como falso una vez que se complete la solicitud
                setIsLoading(false)
            }
        }
        // Llama a la función para cargar las causas cuando el componente se monta
        fetchCausas()
    }, [])

    return (
        <>
            <div className="position-relative">
                <div className="pt-2 pt-sm-5 pb-4 pb-sm-5">
                    {isLoading ? (
                        <div className="position-absolute top-50 start-50 translate-middle">
                            <Spinner animation="border" role="status">
                                <span className="sr-only">Cargando...</span>
                            </Spinner>
                        </div>
                    ) : (
                        <>
                            <h2>
                                Tus casos,{' '}
                                <span className="text-capitalize">
                                    {user.first_name}
                                </span>
                            </h2>
                            <hr />
                            {causas.length === 0 ? (
                                <p>No hay datos disponibles</p>
                            ) : (
                                <Row>
                                    {causas.map((causa) => (
                                        <Col xl={12} sm={12} key={causa.id}>
                                            <h2 className="mb-3">
                                                Accidente de Trabajo -
                                                Sumarísimo Nº 21-23697371-6
                                            </h2>
                                            <Card className="shadow-sm">
                                                <Card.Header className="text-uppercase fw-bold align-items-cente shorten-text">
                                                    <h4 class="text-uppercase fw-bold align-items-cente shorten-text">
                                                        diaz santo abel C/
                                                        PREVENCION ART S.A. S/
                                                        Accidente de Trabajo -
                                                        Sumarísimo
                                                    </h4>
                                                </Card.Header>
                                                <Card.Body>
                                                    <Row>
                                                        <Col
                                                            xl={12}
                                                            sm={12}
                                                        >
                                                            <p>El trámite se encuentra con la carátula del mismo es DIAZ SANTO ABEL C/ PREVENCION ART S.A., el número de CUIJ asignado es 21-23697371-6 y el objeto del proceso es ACCIDENTE DE TRABAJO - SUMARÍSIMO.</p>
                                                        </Col>
                                                    </Row>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            )}
                        </>
                    )}
                    {/* Aquí puedes agregar el resto del contenido */}
                </div>
            </div>
        </>
    )
}

export default Procedures
