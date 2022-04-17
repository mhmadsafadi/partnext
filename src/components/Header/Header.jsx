import React from "react";
import {Container, Navbar, Nav} from 'react-bootstrap'
import logo from '../../assets/logo.png'
import "./header.css";

const Header = () => {

  return (
    <Navbar sticky="top" className="shadow-sm" bg="white" expand="md">
      <Container>
        <Navbar.Brand href="#">
            <img src={logo} alt="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto justify-content-between">
            <Nav.Link href="#app">the app</Nav.Link>
            <Nav.Link href="#features">features</Nav.Link>
            <Nav.Link href="#about">about us</Nav.Link>
            <Nav.Link href="#talk">talk to us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
