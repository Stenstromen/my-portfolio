import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LinkedInImg from "../img/li.png";

function Contact() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <motion.div
      style={{
        overflowX: "hidden",
      }}
      className="ContactContainer"
      initial={{ y: "+840px", opacity: 0 }}
      animate={{ y: 0, opacity: isHydrated ? 1 : 0 }}
      transition={{
        duration: 1.5,
        ease: "easeIn",
        type: "spring",
      }}
    >
      <div className="ContactHeader">
        <h1> - Connect with me?!</h1>
      </div>

      <div className="LinkedInContainer">
        <div>
          <a
            href="https://www.linkedin.com/in/filip-stenstr%C3%B6m/"
            rel="noreferrer"
            target="_blank"
            aria-label="LinkedIn"
          >
            <img src={LinkedInImg} className="LinkedIn" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
