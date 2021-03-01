import React from "react";
import { Link } from "gatsby";
import GatsbyImage from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import SocialLinks from "../constants/socialLinks";
import heroImgSrc from "../assets/hero-img.png";
// ...GatsbyImageSharpFluid
const query = graphql`
  {
    file(relativePath: { eq: "hero-img.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
const Hero = () => {
  console.log(heroImgSrc);
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query);
  return (
    <div>
      <div className="hero">
        <div className="section-center hero-center">
          <article className="hero-info">
            <div>
              <div className="underline"></div>
              <h1>I am John</h1>
              <h4>Freelance, web and UI designer</h4>
              <Link to="/contact" className="btn">
                Contact me
              </Link>
              <SocialLinks />
            </div>
          </article>
          <GatsbyImage fluid={fluid} />
        </div>
      </div>
    </div>
  );
};
export default Hero;
