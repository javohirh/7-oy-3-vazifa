import React from "react";
import Header from "../pages/Header";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer";

function MainRootLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainRootLayout;
