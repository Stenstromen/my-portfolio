import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
//import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

function NavBar() {
  return (
    <div className="Navbar">
      <nav className="Nav-font navbar navbar-expand navbar-light fixed-top">
        <Container className="justify-content-center">
          <Nav className="Nav-filler">
            <LinkContainer to="/">
              <Nav.Link className="nav-link">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Projects">
              <Nav.Link className="nav-link">Projects</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Contact">
              <Nav.Link className="nav-link">Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </nav>
    </div>
  );
}

export default NavBar;
