import React from "react";

// import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Roots = () => {
  return (
    <div className="bg-white text-gray-700">
      <Navbar></Navbar>
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Roots;
