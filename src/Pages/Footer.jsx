import React from "react";
import { MdEmail } from "react-icons/md";
import {
  FaLinkedin,
  FaMastodon,
  FaUserSecret,
  FaTrafficLight,
} from "react-icons/fa";
import { TfiGithub } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function Footer() {
  const tooltipStyle = {
    color: "white",
    padding: "10px",
    borderRadius: "25px",
    backgroundColor: "black",
  };
  return (
    <div>
      <footer className="Footer">
        <div className="FooterContent">
          <div>
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip style={tooltipStyle}>
                  <strong>Add Me On LinkedIn!</strong>
                </Tooltip>
              }
            >
              <a
                href="https://www.linkedin.com/in/filip-stenstr%C3%B6m/"
                rel="noreferrer"
                target="_blank"
                className="FooterLink"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={25} />
              </a>
            </OverlayTrigger>
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip style={tooltipStyle}>
                  <strong>Follow me on Mastodon!</strong>
                </Tooltip>
              }
            >
              <a
                href="https://k8s.social/@stenstromen"
                rel="noreferrer"
                target="_blank"
                className="FooterLink"
                aria-label="Mastodon"
              >
                <FaMastodon size={25} />
              </a>
            </OverlayTrigger>
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip style={tooltipStyle}>
                  <strong>Follow Me On GitHub!</strong>
                </Tooltip>
              }
            >
              <a
                href="https://github.com/Stenstromen"
                rel="noreferrer"
                target="_blank"
                className="FooterLink"
                aria-label="GitHub"
              >
                <TfiGithub size={25} />
              </a>
            </OverlayTrigger>

            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip style={tooltipStyle}>
                  <strong>Send Me An Email!</strong>
                </Tooltip>
              }
            >
              <a
                href="mailto:info@stenstromen.se?subject=Hello!&body=Hello,%20friend.%0A%0AI%20would%20like%20to%20ask%20you..."
                rel="noreferrer"
                target="_blank"
                className="FooterLink"
                aria-label="Email"
              >
                <MdEmail size={25} />
              </a>
            </OverlayTrigger>
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip style={tooltipStyle}>
                  <strong>Fetch My Public PGP Key!</strong>
                </Tooltip>
              }
            >
              <Link
                to="/pgp"
                className="FooterLink"
                aria-label="PGP Public key"
              >
                <FaUserSecret size={22} />
              </Link>
            </OverlayTrigger>
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip style={tooltipStyle}>
                  <strong>Atlassian Statuspage Uptime</strong>
                </Tooltip>
              }
            >
              <a
                href="https://stenstromen.statuspage.io/"
                rel="noreferrer"
                target="_blank"
                className="FooterLink"
                aria-label="Status page"
              >
                <FaTrafficLight size={22} />
              </a>
            </OverlayTrigger>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
