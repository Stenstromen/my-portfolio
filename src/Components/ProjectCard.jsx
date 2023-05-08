import React from "react";
import PropTypes from "prop-types";

function ProjectCard({ image, title, description, link, github }) {
  const humanLink = link.replace(/https?:\/\//, "");
  return (
    <div
      style={{
        marginLeft: "10px",
        marginTop: "10px",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#ffffff",
        width: "26rem",
        height: "450px",
        borderBottom: "1px solid #f686bd",
      }}
    >
      <div
        style={{
          paddingTop: "10px",
          marginLeft: "10px",
          marginRight: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            justifyItems: "center",
            width: "25rem",
            marginTop: "0",
            //backgroundColor: "#fff7f0",
            backgroundColor: "#d8e2dc",
          }}
        >
          <img src={image} style={{ height: "196.2px" }} />
        </div>
        <h3 style={{ paddingLeft: "10px", paddingTop: "10px" }}>{title}</h3>
        <p style={{ paddingLeft: "10px" }}>{description}</p>
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
        <div
          style={{
            display: "flex",
            justifyContent: "left",
            paddingLeft: "10px",
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
