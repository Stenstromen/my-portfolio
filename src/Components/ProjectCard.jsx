import React from "react";
import PropTypes from "prop-types";

function ProjectCard({ image, title, description, link, github }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        //justifyContent: "center",
        //backgroundColor: "#f686bd",
        backgroundColor: "grey",
        width: "25rem",
        height: "500px",
        border: "none",
      }}
    >
      <div style={{ paddingTop: "10px" }}>
        <img src={image} style={{ width: "100%" }} />
        <h3 style={{ textAlign: "center" }}>{title}</h3>
        <p style={{ textAlign: "center" }}>{description}</p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <a
            href={link}
            rel="noreferrer"
            target="_blank"
            style={{ marginLeft: "10px", color: "#f686bd" }}
          >
            <h4>Link to project</h4>
          </a><br />
            Check out the project on{" "}
            <a
              style={{ color: "black", fontWeight: "bold" }}
              href={github}
              rel="noreferrer"
              target="_blank"
            >
              Github!
            </a>
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
    github: PropTypes.string,
};

export default ProjectCard;
