import React, { useState, useEffect, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectList from "./ProjectList";
const ProjectCard = lazy(() => import("../Components/ProjectCard"));
const ProjectCardSkeleton = lazy(() =>
  import("../Components/ProjectCardSkeleton")
);

function Projects() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [direction, setDirection] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(ProjectList.length / itemsPerPage);

  useEffect(() => {
    setIsHydrated(true);
    const updateItemsPerPage = () => {
      const isMobile = window.outerWidth <= 768;
      setItemsPerPage(isMobile ? 2 : 6);
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

  const nextPage = () => {
    setDirection(1);
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setDirection(-1);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Touch and mouse handlers for swipe functionality
  const handleDragStart = (e) => {
    setIsDragging(true);
    setDragStart(e.type === "touchstart" ? e.touches[0].clientX : e.clientX);
  };

  const handleDragEnd = (e) => {
    if (!isDragging) return;

    const dragEnd =
      e.type === "touchend" ? e.changedTouches[0].clientX : e.clientX;
    const diff = dragStart - dragEnd;

    if (Math.abs(diff) > 50) {
      // minimum drag distance to trigger page change
      if (diff > 0) {
        nextPage();
      } else {
        prevPage();
      }
    }

    setIsDragging(false);
  };

  const getCurrentPageProjects = () => {
    const start = currentPage * itemsPerPage;
    return ProjectList.slice(start, start + itemsPerPage);
  };

  return (
    <div className="projects-container">
      <div className="pagination-dots">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`pagination-dot ${
              currentPage === index ? "active" : ""
            }`}
            onClick={() => setCurrentPage(index)}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHydrated ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="projects-slider-container"
      >
        <button
          className="slider-button prev"
          onClick={prevPage}
          aria-label="Previous page"
        >
          ←
        </button>

        <div
          className="projects-slider"
          onTouchStart={handleDragStart}
          onTouchEnd={handleDragEnd}
          onMouseDown={handleDragStart}
          onMouseUp={handleDragEnd}
          onMouseLeave={() => setIsDragging(false)}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentPage}
              initial={{ 
                x: direction === 1 ? 300 : -300,
                opacity: 0 
              }}
              animate={{ 
                x: 0,
                opacity: 1 
              }}
              exit={{ 
                x: direction === 1 ? -300 : 300,
                opacity: 0 
              }}
              transition={{ duration: 0.3 }}
              className="projects-page"
            >
              {getCurrentPageProjects().map((project) => (
                <Suspense
                  key={project.title}
                  fallback={<ProjectCardSkeleton />}
                >
                  <ProjectCard {...project} />
                </Suspense>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          className="slider-button next"
          onClick={nextPage}
          aria-label="Next page"
        >
          →
        </button>
      </motion.div>
    </div>
  );
}

export default Projects;
