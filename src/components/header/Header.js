import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Header.css";
import { Link } from 'react-scroll'

const Header = () => {
  return (
    <div id="home">

      <Navbar collapseOnSelect expand="lg" className="customNav" variant="dark" fixed='top'>
        <Link
          style={{ cursor: "pointer" }}
          to="home"
          spy={true}
          smooth={true}
          duration={500}>
          <Navbar.Brand className="mx-2" style={{ fontSize: '1.8rem', letterSpacing: "3px" }}>bryanMeneses</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Link
              style={{ cursor: "pointer" }}
              offset={-56}
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="nav-link p-3 mr-3">Home</Link>
            <Link
              style={{ cursor: "pointer" }}
              offset={-56}
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              className="nav-link p-3 mr-3">My Work</Link>
            <Link
              style={{ cursor: "pointer" }}
              offset={-56}
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
              className="nav-link p-3 mr-3">Skills</Link>
            <Link
              style={{ cursor: "pointer" }}
              offset={-56}
              to="aboutme"
              spy={true}
              smooth={true}
              duration={500}
              className="nav-link p-3 mr-3">About Me</Link>
            <Link
              style={{ cursor: "pointer" }}
              offset={-56}
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="nav-link p-3 mr-3">Contact Me</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar >
    </div >
  );
};
export default Header;
