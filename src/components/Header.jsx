import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { Icon } from '@iconify/react';
import sunIcon from '@iconify-icons/mdi/white-balance-sunny';
import moonIcon from '@iconify-icons/mdi/moon-waning-crescent';
import './header.css';

const Header = () => {
  return (
    <Navbar expand="lg"  className="mb-4 sticky-top z-1 navBar">
      <Container >
        <Navbar.Brand href="#">Jeya chandran s</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto position-relative">
            <div className="cursor-line"></div> 
            <Nav.Link as={Link} to="/home" className="active-link">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="active-link">About</Nav.Link>
            <Nav.Link as={Link} to="/skills" className="active-link">Skills</Nav.Link>
            <Nav.Link as={Link} to="/projects" className="active-link">Projects</Nav.Link>
            <Nav.Link as={Link} to="/education" className="active-link">Education</Nav.Link>
            <Nav.Link as={Link} to="/intern" className="active-link">Intern</Nav.Link>
            <Nav.Link as={Link} to="/resume" className="active-link">Resume</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="active-link">Contact</Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
