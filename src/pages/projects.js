import React from "react";
import Layout from "../components/Layout";
import { graphql, useStaticQuery } from "gatsby";
import Projects from "../components/Projects";

const data = graphql`
  {
    projects: allStrapiProjects {
      edges {
        node {
          id
          description
          github
          title
          url
          strapiId
          skills {
            id
            title
          }
        }
      }
    }
  }
`;
const ProjectsPage = () => {
  const {
    projects: { edges },
  } = useStaticQuery(data);
  return (
    <Layout>
      <Projects title="All projects" projects={edges} />
    </Layout>
  );
};

export default ProjectsPage;
