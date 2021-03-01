import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
const Blog = ({
  node: { title, slug, description, category, date, image },
}) => {
  return (
    <Link className="blog" to={`/blogs/${slug}`}>
      <article>
        <Img fluid={image.childImageSharp.fluid} className="blog-img" />
        <div className="blog-card">
          <h4>{title}</h4>
          <p>{description}</p>
          <div className="blog-footer">
            <span>{category}</span>
            <span>{date}</span>
          </div>
        </div>
      </article>
    </Link>
  );
};
export default Blog;
