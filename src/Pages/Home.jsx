import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import homepage_social from "../img/homepage_social.png";
import { Helmet } from "react-helmet";
import Badges from "../Components/Badges";

function Home() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);
  return (
    <div
      style={{
        overflowX: "hidden",
      }}
    >
      <Helmet>
        <title>Home | Stenstromen.se</title>
        <meta property="og:image" content={homepage_social} />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
      </Helmet>
      <motion.div
        initial={{ y: "+200px", opacity: 0 }}
        animate={{ y: 0, opacity: isHydrated ? 1 : 0 }}
        transition={{
          duration: 0.1,
          ease: "backIn",
          type: "tween",
        }}
      >
        <h1 className="HomeH1">Hello!</h1>
        <h2 className="HomeH2">
          I&apos;m Filip - DevOps Engineer and Hobbyist Programmer.
        </h2>
        <h3 className="HomeH3"> - Based in Stockholm, Sweden.</h3>
      </motion.div>

      <motion.div
        initial={{ x: "+500px", opacity: 0 }}
        animate={{ x: 0, opacity: isHydrated ? 1 : 0 }}
        transition={{
          duration: 0.1,
          ease: "linear",
          type: "tween",
        }}
      >
        <div className="BadgesContainer">
          <div className="Badges">
            <Badges />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
