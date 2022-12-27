import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

function NavBar({ isMobile }) {
  return (
    <div>
      <Navbar bg="#22223b" style={{ fontSize: "25px" }}>
        <Container className="justify-content-center">
          {isMobile ? null : (
            <Nav className="me-auto justify-content-center"></Nav>
          )}
          <Nav>
            <LinkContainer to="/Projects">
              <Nav.Link style={{ color: "black" }} href="Projects">
                Projects
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="Contact">
              <Nav.Link style={{ color: "black" }} href="Contact">
                Contact
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/">
              <Nav.Link style={{ color: "black" }} href="Home">
                Home
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
