import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll'; 
import './header.css';

const Header = () => {
  return (
    <Navbar expand="lg" className="mb-4 sticky-top z-1 navBar">
      <Container>
        <Navbar.Brand ><Link to="home" smooth={true} duration={100}>Jeya Chandran S</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto position-relative">
            <div className="cursor-line"></div>
            <Nav.Link>
              <Link to="home" smooth={true} duration={100} className="active-link">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="about" smooth={true} duration={100} className="active-link">About</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="skills" smooth={true} duration={100}  className="active-link">Skills</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="projects" smooth={true} duration={100} className="active-link">Projects</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="education" smooth={true} duration={100} className="active-link">Education</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="intern" smooth={true} duration={100} className="active-link">Intern</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="resume" smooth={true} duration={100} className="active-link">Resume</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="contact" smooth={true} duration={100} className="active-link">Contact</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
