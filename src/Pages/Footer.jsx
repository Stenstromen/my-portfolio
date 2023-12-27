import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaUserSecret } from "react-icons/fa";
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
              aria-label="LinkedIn"
            >
              <FaLinkedin size={25} />
            </a>
            <a
              href="https://github.com/Stenstromen"
              rel="noreferrer"
              target="_blank"
              className="FooterLink"
              aria-label="GitHub"
            >
              <TfiGithub size={25} />
            </a>
            <a
              href="mailto:info@stenstromen.se?subject=Hello!&body=Hello,%20friend.%0A%0AI%20would%20like%20to%20ask%20you..."
              rel="noreferrer"
              target="_blank"
              className="FooterLink"
              aria-label="Email"
            >
              <MdEmail size={25} />
            </a>
            <a
              href="https://keys.openpgp.org/vks/v1/by-email/info@stenstromen.se"
              rel="noreferrer"
              target="_blank"
              className="FooterLink"
              aria-label="PGP"
            >
              <FaUserSecret size={22}/>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
