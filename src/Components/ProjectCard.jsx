/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import Badge from "./Badge";

function ProjectCard({ image, title, description, link, github, badges }) {
  const humanLink = link
    .replace(/https?:\/\//, "")
    .replace("github.com/Stenstromen/", "")
    .replace(/apps\.apple\.com\/[^ ]+/g, "View on Apple AppStore");
  const lowercaseTitle = title.toLowerCase();
  return (
    <motion.div
      id={lowercaseTitle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.5,
      }}
    >
      <div className="ProjectCard">
        <div className="ProjectCardContent">
          <a 
            href={link} 
            rel="noreferrer" 
            target="_blank" 
            title={`Visit ${title}`}
          >
            <img
              className="ProjectCardImage"
              width="196.19px"
              height="196.19px"
              alt={title}
              src={image}
              style={{
                transition: 'transform 0.3s ease-in-out, filter 0.3s ease-in-out',
                cursor: 'pointer',
              }}
            />
          </a>
        </div>
        <h3 className="ProjectCardTitle">{title}</h3>
        <p className="ProjectCardDescription">{description}</p>
        <div className="ProjectCardBadges">
          {badges.map((badge, index) => {
            const width = parseInt(badge?.width) - 29;
            const alt = badge?.name;
            const src = badge?.src;
            return (
              <Badge
                key={index}
                className="ProjectBadge"
                alt={alt}
                width={width}
                height="28px"
                src={src}
              />
            );
          })}
        </div>
        <div className="ProjectCardLink">
          <a
            href={link}
            rel="noreferrer"
            target="_blank"
            className="ProjectCardLinkText"
          >
            <h4>&gt; {humanLink}</h4>
          </a>
        </div>
        {github ? (
          <div className="ProjectCardGithub">
            Check out the project on&nbsp;
            <a
              href={github}
              rel="noreferrer"
              target="_blank"
              className="ProjectCardGithubLink"
            >
              Github!
            </a>
          </div>
        ) : (
          <p>&nbsp;</p>
        )}
      </div>
    </motion.div>
  );
}

ProjectCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  github: PropTypes.string,
  badges: PropTypes.arrayOf(PropTypes.object),
};

export default ProjectCard;
