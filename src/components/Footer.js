import React from "react";
import SocialLinks from "../constants/socialLinks";
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-links" />
        <h3>Copyright&copy; {new Date().getFullYear()}</h3>
        <span>Well devs</span>pa
      </div>
    </footer>
  );
};

export default Footer;
