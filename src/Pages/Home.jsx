import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Badges from "../Components/Badges";

function Home({ isMobile }) {
  return (
    <div>
      <motion.div
        initial={{ y: "+100%", opacity: 0 }}
        animate={{ y: 1, opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeIn",
          type: "spring",
        }}
      >
        <h1
          style={{
            color: "#d8e2dc",
            paddingLeft: "5%",
            paddingTop: isMobile ? "15%" : "3%",
            fontSize: isMobile ? "40px" : "70px",
          }}
        >
          Hello!
        </h1>
        <h2 style={{ color: "#d8e2dc", paddingLeft: "5%", fontSize: isMobile ? "22px" : "35px" }}>
          I&apos;m Filip - DevOps Engineer and Hobbyist Programmer.
        </h2>
        <h3 style={{ paddingLeft: "5%", color: "#d8e2dc" }}> - Based in Stockholm, Sweden.</h3>
      </motion.div>

      <motion.div
        initial={{ x: "+100%", opacity: 0 }}
        animate={{ x: 1, opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeIn",
          type: "spring",
        }}
      >
        <div style={{ display: "flex", justifyContent: "right" }}>
          <div
            style={{
              width: isMobile ? "100%" : "70%",
              paddingTop: isMobile ? "50%" : "13%",
              
            }}
          >
            <Badges />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

Home.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default Home;
