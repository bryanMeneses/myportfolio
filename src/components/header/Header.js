import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Bryan Meneses</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className="p-3 mr-3">Home</Nav.Link>
          <Nav.Link className="p-3 mr-3">About</Nav.Link>
          <Nav.Link className="p-3 mr-3">My Work</Nav.Link>
          <Nav.Link className="p-3 mr-3">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
