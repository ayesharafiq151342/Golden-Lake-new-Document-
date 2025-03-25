"use client";
import React from "react";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ERPServices from "./components/erpServices";

const HeroSection = () => {
  
  return (
    <>
    
    <Navbar/>
    <div className="relative w-full h-96 lg:h-screen">
  {/* Background Image */}
  <div className="w-full h-96 lg:h-full bg-cover bg-center bg-[url('/bg-services.jpg')]"></div>

  {/* Purple Overlay */}
  <div className="absolute inset-0 h-96 bg-purple-800 bg-opacity-60 mix-blend-multiply"></div>

  {/* Content */}
  <div className="absolute inset-0 h-96 mt-10 lg:h-screen  flex flex-col justify-center items-center lg:items-start lg:ml-20 text-center lg:text-left text-white px-6 sm:px-10">
    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
      OUR <span className="text-purple-400">ERP</span> SERVICES
    </h1>
    <p className="text-sm mt-6 lg:text-start tracking-widest">
      Streamline operations, improve decision-making, and boost efficiency with our tailored ERP services.
      <br />
      From finance to HR, we provide a comprehensive solution to drive growth and success.
    </p>
  
  </div>
</div>

    <ERPServices/>
  
    <Footer/></>
  );
};

export default HeroSection;
