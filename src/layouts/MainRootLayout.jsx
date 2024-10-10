import React from "react";
import Header from "../pages/Header";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer";

function MainRootLayout() {
  return (
    <div className="flex flex-col min-h-screen ">
      <div className="flex-grow-0">
        <Header />
      </div>
      <div className="flex-grow">
        <Outlet />
      </div>
      <div className="flex-grow-0">
        {" "}
        <Footer />
      </div>
    </div>
  );
}

export default MainRootLayout;
