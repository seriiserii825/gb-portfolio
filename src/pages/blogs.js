import React from "react";
import Layout from "../components/Layout";
import { graphql, useStaticQuery } from "gatsby";
import Blogs from "../components/Blogs";
// ...GatsbyImageSharpFluid

const query = graphql`
  {
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

const Blog = () => {
  const {
    blogs: { nodes },
  } = useStaticQuery(query);
  return (
    <Layout>
      <Blogs title="All blogs" blogs={nodes} />
    </Layout>
  );
};

export default Blog;
