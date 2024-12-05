import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import { TbSquareArrowUpFilled } from "react-icons/tb";

function Single() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setIsHydrated(true);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isHydrated ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <section id="home" className="section-container">
        <Home />
      </section>
      <div className="section-divider" />
      <section id="projects" className="section-container">
        <Projects />
      </section>
      <div className="section-divider" />
      <section id="contact" className="section-container">
        <Contact />
      </section>
      <div className="section-divider" />
      <section id="footer" className="section-container">
        <Footer />
      </section>

      {isVisible && (
        <a
          onClick={scrollToTop}
          style={{ position: "fixed", right: "15px", bottom: "15px", zIndex: 1000 }}
        >
          <div
            style={{
              width: "55px",
              height: "55px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <TbSquareArrowUpFilled
              style={{
                transitionDuration: "0s",
                transitionTimingFunction: "revert",
                transitionDelay: "0s",
              }}
              size={55}
              color="#f686bd"
            />
          </div>
        </a>
      )}
    </motion.div>
  );
}

export default Single;
