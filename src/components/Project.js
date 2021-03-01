import React from "react";
import GithubSvg from "./../assets/github.svg";
import SiteSvg from "./../assets/site.svg";

const Project = ({
  node: { description, github, title, url, strapiId, skills },
}) => {
  return (
    <article key={strapiId} className="project">
      <div className="project-img"></div>
      <div className="project-info">
        <h3>{title}</h3>
        <div className="project-desc">{description}</div>
        <div className="project-stack">
          {skills.map((item) => {
            return <span key={item.id}>{item.title}</span>;
          })}
        </div>
        <div className="project-links">
          {github && (
            <a target="_blank" rel="noreferrer" href={github}>
              <GithubSvg />
            </a>
          )}
          <a target="_blank" rel="noreferrer" href={url}>
            <SiteSvg />
          </a>
        </div>
      </div>
    </article>
  );
};
export default Project;
