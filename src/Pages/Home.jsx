import { motion } from "framer-motion";

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
        <h1 style={{ paddingLeft: "5%", paddingTop: "3%", fontSize: "70px" }}>
          Hello!
        </h1>
        <h2 style={{ paddingLeft: "5%", fontSize: "35px" }}>
          I'm Ida Hägerth - Studying Frontend Development.
        </h2>
        <h3 style={{ paddingLeft: "5%" }}> - Based in Stockholm, Sweden.</h3>
      </motion.div>

      <motion.div initial={{ x: "+100%", opacity: 0 }}
        animate={{ x: 1, opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeIn",
          type: "spring",
        }}>

      <div style={{ display: "flex", justifyContent: "right" }}>
        <div style={{ width: "40%", paddingTop: "11%" }}>
          <img
            style={{
              paddingLeft: "10px",
              paddingRight: "10px",
              marginLeft: "10px",
              marginRight: "10px",
              paddingTop: "10px",
            }}
            src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
          />
          <img
            style={{
              paddingLeft: "10px",
              paddingRight: "10px",
              marginLeft: "10px",
              marginRight: "10px",
              paddingTop: "10px",
            }}
            src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
          />
          <img
            style={{
              paddingLeft: "10px",
              paddingRight: "10px",
              marginLeft: "10px",
              marginRight: "10px",
              paddingTop: "10px",
            }}
            src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
          />
          <img
            style={{
              paddingLeft: "10px",
              paddingRight: "10px",
              marginLeft: "10px",
              marginRight: "10px",
              paddingTop: "10px",
            }}
            src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
          />
          <img
            style={{
              paddingLeft: "10px",
              paddingRight: "10px",
              marginLeft: "10px",
              marginRight: "10px",
              paddingTop: "10px",
            }}
            src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white"
          />
          <img
            style={{
              paddingLeft: "10px",
              paddingRight: "10px",
              marginLeft: "10px",
              marginRight: "10px",
              paddingTop: "10px",
            }}
            src="https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D"
          />
          <img
            style={{
              paddingLeft: "10px",
              paddingRight: "10px",
              marginLeft: "10px",
              marginRight: "10px",
              paddingTop: "10px",
            }}
            src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
          />
          <img
            style={{
              paddingLeft: "10px",
              paddingRight: "10px",
              marginLeft: "10px",
              marginRight: "10px",
              paddingTop: "10px",
            }}
            src="https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white"
          />
          <img
            style={{
              paddingLeft: "10px",
              paddingRight: "10px",
              marginLeft: "10px",
              marginRight: "10px",
              paddingTop: "10px",
            }}
            src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"
          />
          <img
            style={{
              paddingLeft: "10px",
              paddingRight: "10px",
              marginLeft: "10px",
              marginRight: "10px",
              paddingTop: "10px",
            }}
            src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white"
          />
          <img
            style={{
              paddingLeft: "10px",
              paddingRight: "10px",
              marginLeft: "10px",
              marginRight: "10px",
              paddingTop: "10px",
            }}
            src="https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white"
          />
          <img
            style={{
              paddingLeft: "10px",
              paddingRight: "10px",
              marginLeft: "10px",
              marginRight: "10px",
              paddingTop: "10px",
            }}
            src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"
          />
          <img
            style={{
              paddingLeft: "10px",
              paddingRight: "10px",
              marginLeft: "10px",
              marginRight: "10px",
              paddingTop: "10px",
            }}
            src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"
          />
          <img
            style={{
              paddingLeft: "10px",
              paddingRight: "10px",
              marginLeft: "10px",
              marginRight: "10px",
              paddingTop: "10px",
            }}
            src="https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101"
          />
          
        </div>
        
      </div>
      </motion.div>
    </div>
  );
}

export default Home;
