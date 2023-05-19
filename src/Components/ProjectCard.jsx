import React from "react";
import PropTypes from "prop-types";

function ProjectCard({ image, title, description, link, github, badges }) {
  const humanLink = link
    .replace(/https?:\/\//, "")
    .replace("github.com/Stenstromen/", "");
  return (
    <div className="ProjectCard">
      <div className="ProjectCardContent">
        <img className="ProjectCardImage" src={image} />
      </div>
      <h3 className="ProjectCardTitle">{title}</h3>
      <p className="ProjectCardDescription">{description}</p>
      <div className="ProjectCardBadges">
        {badges.map((badge, index) => {
          return (
            <img key={index} className="ProjectBadge" alt={badge} src={badge} />
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
  );
}

ProjectCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  github: PropTypes.string,
  badges: PropTypes.array,
};

export default ProjectCard;
