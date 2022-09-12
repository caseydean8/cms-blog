import React from "react";
import { Header } from "./";

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto md:px-10 px-8 mb-8">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
