import React from "react";
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";

function ProjectList({ projects }) {
  return (
    <div className="section project-list">
      {projects &&
        projects.map((project) => {
          return (
            <Link to={`/project/${project.id}`} key={project.id}>
              <ProjectSummary project={project} />
            </Link>
          );
        })}
    </div>
  );
}

export default ProjectList;
