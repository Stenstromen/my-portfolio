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
        rootMargin: '50px',
        threshold: 0.1
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

  useEffect(() => {
    const hideSkeleton = (sectionId) => {
      const skeleton = document.querySelector(`#${sectionId} .skeleton-loader, #${sectionId} .skeleton-contact, #${sectionId} .skeleton-footer`);
      if (skeleton) {
        skeleton.style.display = 'none';
      }
    };

    if (loadComponents.projects) hideSkeleton('projects');
    if (loadComponents.contact) hideSkeleton('contact');
    if (loadComponents.footer) hideSkeleton('footer');
  }, [loadComponents]);

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
        <div className="skeleton-loader">
          <div className="skeleton-card">
            <div className="skeleton-image"></div>
            <div className="skeleton-title"></div>
            <div className="skeleton-text"></div>
            <div className="skeleton-text"></div>
            <div className="skeleton-badges"></div>
          </div>
          <div className="skeleton-card">
            <div className="skeleton-image"></div>
            <div className="skeleton-title"></div>
            <div className="skeleton-text"></div>
            <div className="skeleton-text"></div>
            <div className="skeleton-badges"></div>
          </div>
        </div>
        {loadComponents.projects ? (
          <Suspense fallback={null}>
            <AnimatePresence mode="wait">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              >
                <Projects />
              </motion.div>
            </AnimatePresence>
          </Suspense>
        ) : null}
      </section>
      <div className="section-divider" />
      
      <section id="contact" ref={contactRef} className="section-container">
        <div className="skeleton-contact">
          <div className="skeleton-title"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-social"></div>
        </div>
        {loadComponents.contact ? (
          <Suspense fallback={null}>
            <AnimatePresence mode="wait">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              >
                <Contact />
              </motion.div>
            </AnimatePresence>
          </Suspense>
        ) : null}
      </section>
      <div className="section-divider" />
      
      <section id="footer" ref={footerRef} className="section-container">
        <div className="skeleton-footer">
          <div className="skeleton-text"></div>
          <div className="skeleton-links"></div>
        </div>
        {loadComponents.footer ? (
          <Suspense fallback={null}>
            <AnimatePresence mode="wait">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              >
                <Footer />
              </motion.div>
            </AnimatePresence>
          </Suspense>
        ) : null}
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
