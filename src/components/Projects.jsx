import React from "react";
import "./Projects.css";
import projects from "../data/projects.json";

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h2>These are some of my projects:</h2>

      <div id="projects-grid">
        {projects.map((project) => {
          return (
            <div className="project" key={ project.title }>
              <div className="gallery">
                <a href={ project.href } className="project">
                  <img
                    className="project-image"
                    src={ project.screenshotUrl }
                    alt={ project.title }
                  />
                  <p className="project-title">
                    <span className="code">&lt;</span> { project.title }
                    <span className="code">/&gt;</span>
                  </p>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
