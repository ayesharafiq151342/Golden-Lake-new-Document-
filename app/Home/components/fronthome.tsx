"use client";
import React from 'react';

function Fronthome() {
  return (
  

      <div
  className="relative  mx-auto flex flex-col items-center justify-center bg-cover bg-center text-center lg:min-h-screen md:h-screen px-4 sm:px-6"
  style={{
    backgroundImage: "url('/bgimg.jpg')",
  }}
>
  {/* Black Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  {/* Content (Ensuring it's above the overlay) */}
  <div className="relative z-10 text-white">
  <h1 className="lg:text-3xl sm:text-4xl  mt-20  lg:mt-0 md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
        Empowering Businesses with ERP Solutions
      </h1>

      <p className="text-base sm:text-lg md:text-xl text-white text-start max-w-2xl mb-6">
        Streamline your operations, optimize workflows, and make data-driven decisions with our all-in-one ERP platform.
      </p> </div>
</div>


  );
}

export default Fronthome;
