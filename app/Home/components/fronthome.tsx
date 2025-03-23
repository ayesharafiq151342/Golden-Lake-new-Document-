"use client";
import React from 'react';

function Fronthome() {
  return (
    <section
      className="w-full lg:h-screen h-96 flex flex-col items-center justify-center bg-cover bg-center text-center px-4"
      style={{
        backgroundImage: `linear-gradient(rgb(224, 150, 224), rgb(167, 135, 191,0.6)), url('/bgimg.jpg')`,
        backgroundBlendMode: 'overlay',
      }}
    >
      <h1 className="lg:text-3xl sm:text-4xl  mt-20  lg:mt-0 md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
        Empowering Businesses with ERP Solutions
      </h1>

      <p className="text-base sm:text-lg md:text-xl text-white max-w-2xl mb-6">
        Streamline your operations, optimize workflows, and make data-driven decisions with our all-in-one ERP platform.
      </p>

     
    </section>
  );
}

export default Fronthome;
