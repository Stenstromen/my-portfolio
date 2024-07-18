import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import ProjectList from "./ProjectList";
import ProjectCard from "../Components/ProjectCard";
import EndMessage from "../Components/EndMessage";
import LoadMore from "../Components/LoadMore";
import { TbSquareArrowUpFilled } from "react-icons/tb";
import InfiniteScroll from "react-infinite-scroll-component";
import projects_social from "../img/projects_social.png";

function Projects() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [projects, setProjects] = useState([]);
  const [itemsToLoad, setItemsToLoad] = useState(3);
  const hasMoreProjects = projects.length < ProjectList.length;
  const [isVisible, setIsVisible] = useState(false);

  const loadMoreProjects = () => {
    setProjects((projects) => [
      ...projects,
      ...ProjectList.slice(projects.length, projects.length + itemsToLoad),
    ]);
  };

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
    const updateItemsToLoad = () => {
      const isMobile = window.outerWidth <= 768;
      setItemsToLoad(isMobile ? 1 : 3);
    };

    loadMoreProjects();
    updateItemsToLoad();

    window.addEventListener("resize", updateItemsToLoad);

    return () => {
      window.removeEventListener("resize", updateItemsToLoad);
    };
  }, []);

  useEffect(() => {
    loadMoreProjects();
  }, [itemsToLoad]);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
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
        initial={{ y: "+1000px", opacity: 0 }}
        animate={{ y: 0, opacity: isHydrated ? 1 : 0 }}
        transition={{
          duration: 1.5,
          ease: "easeIn",
          type: "spring",
        }}
      >
        <InfiniteScroll
          dataLength={projects.length}
          next={loadMoreProjects}
          hasMore={hasMoreProjects}
          loader={<h4>Loading...</h4>}
          endMessage={<EndMessage />}
          className="ProjectsList"
        >
          {projects.map(
            ({ image, title, description, link, github, badges }) => {
              return (
                <>
                  <ProjectCard
                    key={title}
                    image={image}
                    title={title}
                    description={description}
                    link={link}
                    github={github}
                    badges={badges}
                  />
                </>
              );
            }
          )}
        </InfiniteScroll>

        {hasMoreProjects && <LoadMore loadMoreProjects={loadMoreProjects} />}
        {isVisible && (
          <a
            onClick={scrollToTop}
            style={{ position: "fixed", right: "15px", bottom: "15px" }}
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
    </div>
  );
}

export default Projects;
