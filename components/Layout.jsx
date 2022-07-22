import React from "react";
import { Header } from "./";

const Layout = ({ children }) => {
  console.log(children)
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
