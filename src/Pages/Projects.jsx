import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../Components/ProjectCard";
import ProjectList from "./ProjectList";

function Projects() {
  return (
    <div
      className="Projects"
    >
      <motion.div
        initial={{ y: "+100%", opacity: 0 }}
        animate={{ y: 1, opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeIn",
          type: "spring",
        }}
        className="ProjectsList"
      >
        {ProjectList.map(
          ({ image, title, description, link, github, badges }, index) => {
            return (
              <>
                <ProjectCard
                  key={index}
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
      </motion.div>
    </div>
  );
}

export default Projects;
