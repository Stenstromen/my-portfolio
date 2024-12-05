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

  const footerLinks = [
    {
      icon: <FaLinkedin size={25} />,
      text: "Add Me On LinkedIn!",
      href: "https://www.linkedin.com/in/filip-stenstr%C3%B6m/",
      ariaLabel: "LinkedIn"
    },
    {
      icon: <FaMastodon size={25} />,
      text: "Follow me on Mastodon!",
      href: "https://k8s.social/@stenstromen",
      ariaLabel: "Mastodon"
    },
    {
      icon: <TfiGithub size={25} />,
      text: "Follow Me On GitHub!",
      href: "https://github.com/Stenstromen",
      ariaLabel: "GitHub"
    },
    {
      icon: <MdEmail size={25} />,
      text: "Send Me An Email!",
      href: "mailto:info@stenstromen.se?subject=Hello!&body=Hello,%20friend.%0A%0AI%20would%20like%20to%20ask%20you...",
      ariaLabel: "Email"
    },
    {
      icon: <FaUserSecret size={25} />,
      text: "Fetch My Public PGP Key!",
      isLink: true,
      to: "/pgp",
      ariaLabel: "PGP Public key"
    },
    {
      icon: <FaTrafficLight size={25} />,
      text: "Atlassian Statuspage Uptime",
      href: "https://stenstromen.statuspage.io/",
      ariaLabel: "Status page"
    }
  ];

  return (
    <div>
      <footer className="Footer">
        <div className="FooterContent">
          <div className="FooterLinks">
            {footerLinks.map((link, index) => (
              <OverlayTrigger
                key={index}
                placement="top"
                overlay={
                  <Tooltip style={tooltipStyle}>
                    <strong>{link.text}</strong>
                  </Tooltip>
                }
              >
                {link.isLink ? (
                  <Link
                    to={link.to}
                    className="FooterLinkContainer"
                    aria-label={link.ariaLabel}
                  >
                    <span className="FooterIcon">{link.icon}</span>
                    <span className="FooterText">{link.text}</span>
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    rel="noreferrer"
                    target="_blank"
                    className="FooterLinkContainer"
                    aria-label={link.ariaLabel}
                  >
                    <span className="FooterIcon">{link.icon}</span>
                    <span className="FooterText">{link.text}</span>
                  </a>
                )}
              </OverlayTrigger>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
