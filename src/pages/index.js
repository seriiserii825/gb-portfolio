import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Projects from "../components/Projects.jsx";
import Jobs from "../components/Jobs";
import { graphql, useStaticQuery } from "gatsby";
import Blogs from "../components/Blogs";
const data = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
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
    blogs: allStrapiBlogs {
      edges {
        node {
          id
          title
          slug
          description
          category
          date(formatString: "MMMM Do, YYYY")
        }
      }
    }
  }
`;
export default () => {
  const { allStrapiProjects, blogs } = useStaticQuery(data);
  return (
    <Layout>
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={allStrapiProjects.edges} title="Featured projects" />
      <Blogs title="My blogs" blogs={blogs} />
    </Layout>
  );
};
// ...GatsbyImageSharpFluid
