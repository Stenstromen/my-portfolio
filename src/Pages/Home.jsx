import React from "react";
import { motion } from "framer-motion";
import Badges from "../Components/Badges";

function Home() {
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
        <h1 className="HomeH1">Hello!</h1>
        <h2 className="HomeH2">
          I&apos;m Filip - DevOps Engineer and Hobbyist Programmer.
        </h2>
        <h3 className="HomeH3"> - Based in Stockholm, Sweden.</h3>
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
        <div className="BadgesContainer">
          <div
            className="Badges"
          >
            <Badges />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
