import React from "react";
import Layout from "../components/Layout";
import { graphql, useStaticQuery } from "gatsby";
import Title from "../components/Title";
import Image from "gatsby-image";

const query = graphql`
  {
    about: allStrapiAbout {
      edges {
        node {
          title
          info
          stack {
            id
            title
          }
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
  }
`;
const About = () => {
  const {
    about: { edges },
  } = useStaticQuery(query);

  const {
    node: {
      title,
      info,
      stack,
      image: {
        childImageSharp: { fluid },
      },
    },
  } = edges[0];

  return (
    <Layout>
      <section className="about-page">
        <div className="section-center about-center">
          <Image fluid={fluid} className="about-img" />
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
            <div className="about-stack">
              {stack.map((item) => {
                return <span key={item.id}>{item.title}</span>;
              })}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  );
};

export default About;
