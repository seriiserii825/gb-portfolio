import React from "react";
import Title from "./Title";
import Blog from "./Blog";
export const Blogs = ({ title, blogs }) => {
  return (
    <div className="section blogs-wrapper">
      <Title title={title} />
      <section className="section-center blogs-center">
        {blogs.edges.map((item) => {
          return <Blog key={item.node.id} {...item} />;
        })}
      </section>
    </div>
  );
};
export default Blogs;
