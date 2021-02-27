import React from "react";
import Image from "gatsby-image";
import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import SocialLinks from "../constants/socialLinks";
import styles from "./Hero.module.scss";
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
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query);
  return (
    <div className={styles.hero}>
      <div className={styles.heroCenter}>
        <article className={styles.heroInfo}>
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
        <div className={styles.heroImg}>
          <Image fluid={fluid} />
        </div>
      </div>
    </div>
  );
};
export default Hero;
