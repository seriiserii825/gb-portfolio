import React from "react";
import Logo from "../assets/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import PageLinks from "../constants/links";
import { Link } from "gatsby";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <Logo />
          </Link>
          <button className="toggle-btn">
            <FaAlignRight />
          </button>
        </div>
        <PageLinks styleClass="nav-links" />
      </div>
    </nav>
  );
};
export default Navbar;
