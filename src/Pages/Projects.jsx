import React from "react";
import PropTypes from "prop-types";
//import { Carousel, Card, Stack } from "react-bootstrap";
import { motion } from "framer-motion";
/* import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import {
  SiJavascript,
  SiCsswizardry,
  SiHtml5,
  SiReact,
  SiTypescript,
  SiBootstrap,
  SiGithub, 
  SiChakraui,
} from "react-icons/si";
import { RiVuejsFill } from "react-icons/ri"; */
import ProjectCard from "../Components/ProjectCard";

function Projects({ isMobile }) {
  return (
    <div
      className="bg-opacity-25 container-fluid"
      style={{
        backgroundColor: "#fff7f0",
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
      >
        <ProjectCard
                image={"https://http.cat/200.jpg"}
                title="lol"
                description="lorem"
                link="http.cat/200"
                github="http.cat"
              />
      </motion.div>
    </div>
  );
}

Projects.propTypes = {
  isMobile: PropTypes.bool,
};

export default Projects;
