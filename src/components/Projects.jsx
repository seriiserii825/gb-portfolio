import React from "react";
import Title from "./Title";
import Project from "./Project";
const Projects = ({ title, projects }) => {
  return (
    <div className="featured">
      <Title title={title} />
      <div className="section-center projects-center">
        {projects.map((item) => {
          return <Project key={item.node.id} id={item.node.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
