import React from "react";
import { Link } from "gatsby";
const Blog = ({ node: { title, slug, description, category, date } }) => {
  return (
    <Link className="blog" to={`/blogs/${slug}`}>
      <article>
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
