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
          image {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
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
