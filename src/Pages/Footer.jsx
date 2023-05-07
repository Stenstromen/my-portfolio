import React from "react";
import PropTypes from "prop-types";
import { FaLinkedin } from "react-icons/fa";
import { TfiGithub } from "react-icons/tfi";

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
            paddingBottom: "20px",
          }}
        >
          <div>
            <a
              href="https://www.linkedin.com/in/filip-stenstr%C3%B6m/"
              rel="noreferrer"
              target="_blank"
              style={{ marginLeft: "10px", color: "#f686bd" }}
            >
              <FaLinkedin size={25} />
            </a>
            <a
              href="https://github.com/Stenstromen"
              rel="noreferrer"
              target="_blank"
              style={{ marginLeft: "10px", color: "#f686bd"}}
            >
              <TfiGithub size={25} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

Footer.propTypes = {
  isMobile: PropTypes.bool,
};

export default Footer;
