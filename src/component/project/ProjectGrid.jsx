import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ProjectGrid = ({
  project_live_url,
  project_source_url,
  project_image,
  project_name,
  project_desc,
  project_tech_stack,
}) => {
  return (
    <div className="pro">
      <div className="pro_img">
        <a href={project_live_url} target="_blank" rel="noreferrer">
          <img src={project_image} alt="" />
        </a>
      </div>
      <div className="pro_text">
        <h3 className="pro_name">{project_name}</h3>
        <p className="pro_desc">{project_desc}</p>
        <div className="pro_tech">
          {project_tech_stack?.map((tech, index) => (
            <p key={index}>{tech}</p>
          ))}
        </div>
        <div className="pro_link">
          <a href={project_source_url} target="_blank" rel="noreferrer">
            Code <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href={project_live_url} target="_blank" rel="noreferrer">
            Live Demo <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectGrid;
