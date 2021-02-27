import React from "react";
import Title from "./Title";
import Project from "./Project";
import { Link } from "gatsby";
import Img from "gatsby-image";
const Projects = ({ title, projects }) => {
  return (
    <div className="featured">
      <Title title={title} />
      <div className="section-center projects-center">
        {projects.map((item) => {
          return <Project id={item.node.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
