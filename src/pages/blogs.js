import React from "react";
import Layout from "../components/Layout";
import { graphql, useStaticQuery } from "gatsby";
import Blogs from "../components/Blogs";
// ...GatsbyImageSharpFluid

const query = graphql`
  {
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

const Blog = () => {
  const { blogs } = useStaticQuery(query);
  return (
    <Layout>
      <Blogs title="All blogs" blogs={blogs} />
    </Layout>
  );
};

export default Blog;
