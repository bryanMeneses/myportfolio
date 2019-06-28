import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <Navbar id="home" collapseOnSelect expand="lg" className="customNav" variant="dark" fixed='top'>
      <Navbar.Brand style={{ fontSize: '1.4rem' }} href="#home">bryanMeneses</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link data-scroll href="#home" className="p-3 mr-3">Home</Nav.Link>
          <Nav.Link data-scroll href="#projects" className="p-3 mr-3">My Work</Nav.Link>
          <Nav.Link data-scroll href="#skills" className="p-3 mr-3">Skills</Nav.Link>
          <Nav.Link data-scroll href="#aboutme" className="p-3 mr-3">About</Nav.Link>
          <Nav.Link data-scroll href="#contact" className="p-3 mr-3">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
