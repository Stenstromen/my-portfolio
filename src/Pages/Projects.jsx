import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import ProjectCard from "../Components/ProjectCard";
import ProjectList from "./ProjectList";

function Projects({ isMobile }) {
  return (
    <div
      style={{
        //border: "solid 1px black",
        width: "100%",
        //backgroundColor: "#fff7f0",
        backgroundColor: "#4f5d75",
        paddingTop: isMobile ? "10%" : null,
        paddingBottom: isMobile ? "34%" : null,
      }}
    >
      <motion.div
        initial={{ y: "+100%", opacity: 0 }}
        animate={{ y: 1, opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeIn",
          type: "spring",
        }}
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-start",
          paddingLeft: isMobile ? "0%" : "5%",
          paddingRight: isMobile ? "0%" : "5%",
        }}
      >
        {ProjectList.map(
          ({ image, title, description, link, github }, index) => {
            return (
              <>
                <ProjectCard
                  key={index}
                  isMobile={isMobile}
                  image={image}
                  title={title}
                  description={description}
                  link={link}
                  github={github}
                />
              </>
            );
          }
        )}
      </motion.div>
    </div>
  );
}

Projects.propTypes = {
  isMobile: PropTypes.bool,
};

export default Projects;
