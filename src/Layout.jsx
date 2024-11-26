import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import NavigationTop from "./components/NavigationTop/NavigationTop";
import Footer from "./components/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <NavigationTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
