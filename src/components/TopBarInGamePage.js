import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

function TopBar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="/">Aleksanteri Koivisto</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopBar;
