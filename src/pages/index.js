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
    blogs: allStrapiBlogs {
      nodes {
        id
        title
        slug
        description
        category
        date(formatString: "MMMM Do, YYYY")
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
export default () => {
  const {
    allStrapiProjects: { edges },
  } = useStaticQuery(data);
  const {
    blogs: { nodes },
  } = useStaticQuery(data);
  return (
    <Layout>
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={edges} title="Featured projects" />
      <Blogs title="My blogs" blogs={nodes} />
    </Layout>
  );
};
// ...GatsbyImageSharpFluid
