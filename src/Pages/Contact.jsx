import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import LinkedInImg from "../img/li.png";
import contact_social from "../img/contact_social.png";

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
        duration: 0.1,
        ease: "linear",
        type: "tween",
      }}
    >
      <Helmet>
        <title>Contact | Stenstromen.se</title>
        <meta property="og:image" content={contact_social} />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
      </Helmet>
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
