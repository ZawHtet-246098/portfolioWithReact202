import React from "react";
import { projectData } from "../data/datas";
import SingleProject from "./SingleProject";

const Projects = () => {
  return (
    <div className="project" id="project">
      <div data-aos="zoom-in" className="projectintro text-center">
        <h1
          style={{ animation: "heartbeat 1.5s ease-in-out infinite both" }}
          className="pb-5"
        >
          Projects <span className="titleSpan"></span>
        </h1>
        <p>All my latest projects are here.</p>
      </div>
      <div className="projectsContainer d-flex p-lg-5 py-5">
        {projectData.map((project) => {
          return <SingleProject key={project.id} {...project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
