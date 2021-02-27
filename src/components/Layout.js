import React from "react";
import "../css/main.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const [isOpenSidebar, setIsOpenSidebar] = React.useState(false);
  const toggleSidebar = () => {
    setIsOpenSidebar(!isOpenSidebar);
  };
  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar toggleSidebar={toggleSidebar} isOpenSidebar={isOpenSidebar} />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
