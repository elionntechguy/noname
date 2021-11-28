import React from 'react';
import styled from 'styled-components';
import '../App.css';
import { Navbar, Nav } from 'react-bootstrap';

const Styles = styled.div`
a, .navbar-brand, .navbar-nav .nav-link {
    color: #000000 !important;
    
    transition: 0.15s ease;

    &:hover {
        text-decoration: none;
        color: #505050 !important;

    }
    margin: 5px;

    text-align: center;

        
    
}

.navbar {
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(20px) saturate(160%) contrast(45%) brightness(140%);
    -webkit-backdrop-filter: blur(20px) saturate(160%) contrast(45%) brightness(140%);
    font-weight: 600;
}
`;

const Navigationbar = () => 
{
    return (
        <Styles>
            <Navbar collapseOnSelect expand="lg" className="bg-transparent">
            <Navbar.Brand href="/">
            Buta
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                <Nav>
                <Nav.Link href="/about">about</Nav.Link>
                <Nav.Link href="/resume">resume</Nav.Link>
                <Nav.Link href="/portfolio">portfolio</Nav.Link>
                <Nav.Link href="/contact">contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </Styles>
    )
}

export default Navigationbar;
