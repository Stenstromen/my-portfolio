import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Home from "./Home";
import { TbSquareArrowUpFilled } from "react-icons/tb";

function Single() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [loadComponents, setLoadComponents] = useState({
    projects: false,
    contact: false,
    footer: false
  });
  
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);

  const Projects = loadComponents.projects ? lazy(() => import("./Projects")) : null;
  const Contact = loadComponents.contact ? lazy(() => import("./Contact")) : null;
  const Footer = loadComponents.footer ? lazy(() => import("./Footer")) : null;

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setLoadComponents(prev => ({
              ...prev,
              [sectionId]: true
            }));
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '200px',
        threshold: 0
      }
    );

    if (projectsRef.current) observer.observe(projectsRef.current);
    if (contactRef.current) observer.observe(contactRef.current);
    if (footerRef.current) observer.observe(footerRef.current);

    return () => observer.disconnect();
  }, []);

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
      
      <section id="projects" ref={projectsRef} className="section-container">
        <Suspense fallback={<div style={{ height: '100vh' }} />}>
          <AnimatePresence mode="wait">
            {loadComponents.projects && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              >
                <Projects />
              </motion.div>
            )}
          </AnimatePresence>
        </Suspense>
      </section>
      <div className="section-divider" />
      
      <section id="contact" ref={contactRef} className="section-container">
        <Suspense fallback={<div style={{ height: '100vh' }} />}>
          <AnimatePresence mode="wait">
            {loadComponents.contact && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              >
                <Contact />
              </motion.div>
            )}
          </AnimatePresence>
        </Suspense>
      </section>
      <div className="section-divider" />
      
      <section id="footer" ref={footerRef} className="section-container">
        <Suspense fallback={<div style={{ height: '50vh' }} />}>
          <AnimatePresence mode="wait">
            {loadComponents.footer && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              >
                <Footer />
              </motion.div>
            )}
          </AnimatePresence>
        </Suspense>
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
