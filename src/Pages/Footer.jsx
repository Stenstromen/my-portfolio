import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

function Footer({ isMobile }) {
  return (
    <div>
      <footer
        style={{
          position: isMobile ? "relative" : "fixed",
          bottom: "0",
          width: "100%",
          paddingTop: isMobile ? "25px" : null,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyItems: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>
            <a
              href="https://www.linkedin.com/in/ida-h%C3%A4gerth/"
              target="_blank"
              style={{ marginLeft: "10px", color: "black" }}
            >
              <FaLinkedin size={25} />
            </a>
            <a
              href="https://github.com/idahagerth"
              target="_blank"
              style={{ marginLeft: "10px", color: "black" }}
            >
              <SiGithub size={25} />
            </a>
          </div>
          <p style={{ fontWeight: "bold" }}>©2022 Ida Hägerth </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
