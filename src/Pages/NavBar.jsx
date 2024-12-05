import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { useLocation, useNavigate } from "react-router-dom";

function NavBar() {
  let lastScrollTop = 0;
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    function onScroll() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="Navbar">
      <nav className={`Nav-font navbar navbar-expand navbar-light fixed-top ${isScrollingDown ? "Nav-downscroll" : ""}`}>
        <Container className="justify-content-center">
          <Nav className="Nav-filler">
            <Nav.Link onClick={() => scrollToSection("home")}>Home</Nav.Link>
            {location.pathname === '/' && (
              <>
                <Nav.Link onClick={() => scrollToSection("projects")}>Projects</Nav.Link>
                <Nav.Link onClick={() => scrollToSection("contact")}>Contact</Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </nav>
    </div>
  );
}

export default NavBar;
