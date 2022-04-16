import * as React from "react";
import Header from "./header";
import Footer from "./footer";
import "./layout.css";
import LoadingSpinner from "./LoadingSpinner";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <LoadingSpinner />
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};
export default Layout;
