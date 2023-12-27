import React, { useState, useEffect, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import ProjectList from "./ProjectList";
import ScrollToTop from "react-scroll-up";
import { TbSquareArrowUpFilled } from "react-icons/tb";

function Projects() {
  const [isHydrated, setIsHydrated] = useState(false);
  const ProjectCard = lazy(() => import("../Components/ProjectCard"));

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <div className="Projects">
      <motion.div
        initial={{ y: "+1000px", opacity: 0 }}
        animate={{ y: 0, opacity: isHydrated ? 1 : 0 }}
        transition={{
          duration: 1.5,
          ease: "easeIn",
          type: "spring",
        }}
        className="ProjectsList"
      >
        {ProjectList.map(
          ({ image, title, description, link, github, badges }) => {
            return (
              <>
                <Suspense key={title} fallback={<div>Loading...</div>}>
                  <ProjectCard
                    key={title}
                    image={image}
                    title={title}
                    description={description}
                    link={link}
                    github={github}
                    badges={badges}
                  />
                </Suspense>
              </>
            );
          }
        )}
        <ScrollToTop showUnder={160}>
        <TbSquareArrowUpFilled size={45} color="#f686bd"/>
        </ScrollToTop>
      </motion.div>
    </div>
  );
}

export default Projects;
