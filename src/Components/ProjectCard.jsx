import React from "react";

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
            <h4>Link</h4>
          </a>
            <a href={github} rel="noreferrer" target="_blank">
                <img src="img/github.png" style={{ width: "10%" }} />
            </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
