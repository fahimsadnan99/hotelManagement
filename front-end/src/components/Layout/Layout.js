import Header from "./Header";
import Footer from "./Footer";
import React from "react";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children, title = "Book Your Best Hotel For Holiday" }) => {
  document.title = title
  return (
    <>
     
      {/* <ToastContainer position="top-right" /> */}
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
