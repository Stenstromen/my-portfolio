import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";

function NavBar() {
  let lastScrollTop = 0;
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    function onScroll() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="Navbar">
      <nav className={`Nav-font navbar navbar-expand navbar-light fixed-top ${isScrollingDown ? "Nav-downscroll" : ""}`}>
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
