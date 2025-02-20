'use CLient'
import React from "react";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ERPServices from "./erpServices";
const HeroSection = () => {
  return (
    <>
    <Navbar/>
    <div className="relative w-full h-96 lg:h-screen">
      {/* Background Image */}
      <div
        className="w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/bg-services.jpg')" }} // Replace with your image path
      ></div>

      {/* Purple Overlay */}
      <div className="absolute inset-0 bg-purple-800 bg-opacity-60 mix-blend-multiply "></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center lg:items-start lg:ml-20 text-center text-white px-4">
        
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
        OUR  <span className="text-purple-400">ERP</span> SERVICES
        </h1>
        <p className="text-sm lg:text-start mt-10  tracking-widest mb-2">
        Streamline operations, improve decision-making, and boost efficiency with our tailored ERP services.<br/>
        From finance to HR, we provide a comprehensive solution to drive growth and success.
        </p>
        <button className="mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-lg transition-all">
          LEARN MORE
        </button>

        {/* Arrows */}
      
      </div>

      {/* Purple Diagonal Shapes with Sharper Edges */}
      
    </div>
    <ERPServices/>
    
    <Footer/></>
  );
};

export default HeroSection;
