import { Navbar, Nav, Container } from 'react-bootstrap'
import Menu from '../partials/Menu'
const Navigation = () => {
    return (
        <Navbar
            className="bg-white shadow-sm"
            variant="light"
            bg="dark"
            expand="lg"
        >
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="https://clientes.legalistas.ar/assets/images/logos/logo-legalistas-verde.svg"
                        width="100%"
                        height="40px"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Menu />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation
