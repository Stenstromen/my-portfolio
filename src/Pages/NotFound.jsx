import React, {useState, useEffect} from "react";
import { motion } from "framer-motion";
import Stack from "react-bootstrap/Stack";
import FourOFour from "../img/404.webp";
import Badge from "../Components/Badge";

function NotFound() {
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
      setIsHydrated(true);
    }, []);
  return (
    <motion.div
      style={{
        overflowX: "hidden",
        paddingLeft: "10%",
        paddingRight: "10%",
        marginTop: "2%",
        marginBottom: "2%",
      }}
      initial={{ y: "+840px", opacity: 0 }}
      animate={{ y: 0, opacity: isHydrated ? 1 : 0 }}
      transition={{
        duration: 1.5,
        ease: "easeIn",
        type: "spring",
      }}
    >
      <Stack gap={2} className="col-md-5 mx-auto">
        <h1 style={{
            textAlign: "center",
            color: "white",
        }}>404 - Page not found</h1>
        <p style={{
            color: "white",
        }}>
          The page you are looking for does not exist. Please check your URL and
          try again.
        </p>
        <Badge
          className="img-fluid"
          alt="404"
          width="100%"
          height="100%"
          src={FourOFour}
        />
      </Stack>
    </motion.div>
  );
}

export default NotFound;
