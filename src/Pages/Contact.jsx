import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

function Contact({ isMobile }) {
  return (
    <motion.div
      style={{ paddingBottom: isMobile ? "109.2%" : null }}
      initial={{ y: "+100%", opacity: 0 }}
      animate={{ y: 1, opacity: 1 }}
      transition={{
        duration: 1.5,
        ease: "easeIn",
        type: "spring",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          paddingLeft: "15%",
          paddingTop: isMobile ? "40%" : "8%",
        }}
      >
        <h1 style={{color: "#d8e2dc"}}> - Connect with me?!</h1>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "5%",
          textAlign: "center",
        }}
      >
        <div>
          <a
            href="https://www.linkedin.com/in/filip-stenstr%C3%B6m/"
            rel="noreferrer"
            target="_blank"
          >
            <img src="img/li.png" style={{ width: "30%" }} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

Contact.propTypes = {
  isMobile: PropTypes.bool,
};

export default Contact;
