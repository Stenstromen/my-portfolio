import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import ProjectList from "./ProjectList";
import ProjectCard from "../Components/ProjectCard";
import EndMessage from "../Components/EndMessage";
import LoadMore from "../Components/LoadMore";
import projects_social from "../img/projects_social.png";

function Projects() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [projects, setProjects] = useState([]);
  const [itemsToLoad, setItemsToLoad] = useState(6);
  const hasMoreProjects = projects.length < ProjectList.length;
  const loadMoreButtonRef = useRef(null);

  const loadMoreProjects = () => {
    const nextBatch = ProjectList.slice(
      projects.length,
      projects.length + itemsToLoad
    );
    setProjects([...projects, ...nextBatch]);
    
    setTimeout(() => {
      loadMoreButtonRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
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
      <Helmet>
        <title>Projects | Stenstromen.se</title>
        <meta property="og:image" content={projects_social} />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
      </Helmet>
      <motion.div
        initial={{ y: "+500px", opacity: 0 }}
        animate={{ y: 0, opacity: isHydrated ? 1 : 0 }}
        transition={{
          duration: 0.1,
          ease: "linear",
          type: "tween",
        }}
      >
        <div className="ProjectsList">
          {projects.map(({ image, title, description, link, github, badges }) => (
            <ProjectCard
              key={title}
              image={image}
              title={title}
              description={description}
              link={link}
              github={github}
              badges={badges}
            />
          ))}
          <div ref={loadMoreButtonRef} style={{ marginTop: "200px" }} />
        </div>

        {hasMoreProjects && <LoadMore loadMoreProjects={loadMoreProjects} />}
        {!hasMoreProjects && <EndMessage />}
      </motion.div>
    </div>
  );
}

export default Projects;
