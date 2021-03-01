import React from "react";
import Links from "../constants/links";
import SocialLinks from "../constants/socialLinks";
import { FaTimes } from "react-icons/fa";
const Sidebar = ({ isOpenSidebar, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isOpenSidebar && "show-sidebar"}`}>
      <button className="close-btn" onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div className="sidebar-container">
        <Links styleClass={`${isOpenSidebar && "sidebar-links"}`} />
        <SocialLinks styleClass={`${isOpenSidebar && "sidebar-icons"}`} />
      </div>
    </aside>
  );
};

export default Sidebar;
