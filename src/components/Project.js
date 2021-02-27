import React from "react";
import Img from "gatsby-image";
const Project = ({
  node: { image, description, github, title, url, strapiId, skills },
}) => {
  return (
    <article key={strapiId} className="project">
      <div className="project-img">
        <Img fluid={image.childImageSharp.fluid} />
      </div>
      <div className="project-info">
        <h3>{title}</h3>
        <div className="project-desc">{description}</div>
        <div className="project-stack">
          {skills.map((item) => {
            return <span>{item.title}</span>;
          })}
        </div>
        <div className="project-links">
          <a href={github}>Github</a>
        </div>
      </div>
    </article>
  );
};

export default Project;
