import React from "react";
import PropTypes from "prop-types";

function ProjectCard({
  isMobile,
  image,
  title,
  description,
  link,
  github,
  badges,
}) {
  const humanLink = link
    .replace(/https?:\/\//, "")
    .replace("github.com/Stenstromen/", "");
  return (
    <div
      style={{
        marginLeft: "10px",
        marginTop: "10px",
        display: "flex",
        flexFlow: "column",
        backgroundColor: "#ffffff",
        width: isMobile ? "23.2rem" : "26.2rem",
        height: "465px",
        borderBottom: "1px solid #f686bd",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          justifyItems: "center",
          width: isMobile ? "22rem" : "25rem",
          marginTop: "10px",
          marginLeft: "10px",
          backgroundColor: "#d8e2dc",
        }}
      >
        <img src={image} style={{ height: "196.2px" }} />
      </div>
      <h3 style={{ paddingLeft: "10px", paddingTop: "10px" }}>{title}</h3>
      <p style={{ paddingLeft: "10px", flexGrow: "1" }}>{description}</p>
      <div style={{ paddingLeft: "10px", marginBottom: "4px"}}>
        {badges.map((badge, index) => {
          return (
            <>
              <img key={index} style={{paddingLeft:  "1px", paddingBottom: "1px"}} alt={badge} src={badge} />
            </>
          );
        })}
      </div>
      <div style={{ display: "flex", justifyContent: "left" }}>
        <a
          href={link}
          rel="noreferrer"
          target="_blank"
          style={{ marginLeft: "10px", color: "#f686bd" }}
        >
          <h4>&gt; {humanLink}</h4>
        </a>
      </div>
      {github ? (
        <div
          style={{
            display: "flex",
            justifyContent: "left",
            paddingLeft: "10px",
            marginBottom: "10px",
          }}
        >
          Check out the project on&nbsp;
          <a
            style={{ color: "black", fontWeight: "bold" }}
            href={github}
            rel="noreferrer"
            target="_blank"
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
  isMobile: PropTypes.bool,
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  github: PropTypes.string,
  badges: PropTypes.array,
};

export default ProjectCard;
