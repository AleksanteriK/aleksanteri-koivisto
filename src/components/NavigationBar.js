import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavigationBar() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand onClick={() => scrollToSection('home')} style={{ cursor: 'pointer' }}>
                    Aleksanteri Koivisto
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => scrollToSection('home')}>Home</Nav.Link>
                        <Nav.Link onClick={() => scrollToSection('about')}>About Me</Nav.Link>
                        <Nav.Link onClick={() => scrollToSection('currentprojectonmainpage')}>Projects</Nav.Link>
                        <Nav.Link onClick={() => scrollToSection('technologies')}>Technologies</Nav.Link>
                        <Nav.Link onClick={() => scrollToSection('competences')}>Competences</Nav.Link>
                        <Nav.Link onClick={() => scrollToSection('contact')}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;