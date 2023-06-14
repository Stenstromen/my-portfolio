import React, {useState, useEffect} from "react";
import { motion } from "framer-motion";
import ProjectCard from "../Components/ProjectCard";
import ProjectList from "./ProjectList";

function Projects() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);
  
  return (
    <div
      className="Projects"
    >
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
      </motion.div>
    </div>
  );
}

export default Projects;
