import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

function NavBar() {
  return (
    <div>
      <Navbar bg="#22223b" className="Nav-font">
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
      </Navbar>
    </div>
  );
}

export default NavBar;
