import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div
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
          justifyContent: "center",
          marginTop: "15%",
          textAlign:"center"
        }}
      >
        <div>
          <a
            href="https://www.linkedin.com/in/ida-h%C3%A4gerth/"
            target="_blank"
            
          >
            <img src="img/li.png" style={{ width: "30%" }} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
