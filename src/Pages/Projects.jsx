import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import EndMessage from "../Components/EndMessage";
import LoadMore from "../Components/LoadMore";
import ProjectList from "./ProjectList";
const ProjectCard = lazy(() => import("../Components/ProjectCard"));
const ProjectCardSkeleton = lazy(() => import("../Components/ProjectCardSkeleton"));

function Projects() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [projects, setProjects] = useState([]);
  const [itemsToLoad, setItemsToLoad] = useState(6);
  const hasMoreProjects = projects.length < ProjectList.length;
  const loadMoreButtonRef = useRef(null);
  const projectsListRef = useRef(null);

  const loadMoreProjects = () => {
    const nextBatch = ProjectList.slice(
      projects.length,
      projects.length + itemsToLoad
    );
    setProjects([...projects, ...nextBatch]);
    
    setTimeout(() => {
      const lastProjectIndex = projects.length + nextBatch.length - itemsToLoad;
      const projectCards = document.querySelectorAll('.ProjectCard');
      if (projectCards[lastProjectIndex]) {
        projectCards[lastProjectIndex].scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

  useEffect(() => {
    setIsHydrated(true);
    const updateItemsToLoad = () => {
      const isMobile = window.outerWidth <= 768;
      setItemsToLoad(isMobile ? 1 : 3);
    };

    setProjects(ProjectList.slice(0, itemsToLoad));
    updateItemsToLoad();

    window.addEventListener("resize", updateItemsToLoad);

    return () => {
      window.removeEventListener("resize", updateItemsToLoad);
    };
  }, []);

  return (
    <div>
      <motion.div
        initial={{ y: "+500px", opacity: 0 }}
        animate={{ y: 0, opacity: isHydrated ? 1 : 0 }}
        transition={{
          duration: 0.1,
          ease: "linear",
          type: "tween",
        }}
      >
        <Suspense fallback={<div className="ProjectsList" />}>
          <div className="ProjectsList" ref={projectsListRef}>
            {projects.map((project) => (
              <Suspense 
                key={project.title}
                fallback={<ProjectCardSkeleton />}
              >
                <ProjectCard {...project} />
              </Suspense>
            ))}
          </div>
        </Suspense>
        <div ref={loadMoreButtonRef} />

        {hasMoreProjects && <LoadMore loadMoreProjects={loadMoreProjects} />}
        {!hasMoreProjects && <EndMessage />}
      </motion.div>
    </div>
  );
}

export default Projects;
