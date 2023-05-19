import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { TfiGithub } from "react-icons/tfi";

function Footer() {
  return (
    <div>
      <footer className="Footer">
        <div className="FooterContent">
          <div>
            <a
              href="https://www.linkedin.com/in/filip-stenstr%C3%B6m/"
              rel="noreferrer"
              target="_blank"
              className="FooterLink"
            >
              <FaLinkedin size={25} />
            </a>
            <a
              href="https://github.com/Stenstromen"
              rel="noreferrer"
              target="_blank"
              className="FooterLink"
            >
              <TfiGithub size={25} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
