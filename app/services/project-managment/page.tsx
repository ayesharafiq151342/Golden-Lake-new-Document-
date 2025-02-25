import React from 'react'
import Navbar from '@/app/components/navbar';
import Project_detail from './components/pro-details';
import Footer from '@/app/components/footer';
function Project_management() {
  return (
<>
<div>
      <h1>hi project</h1>
      <Navbar />

      {/* HERO SECTION */}
      <div
  className="relative mt-20 mx-auto flex flex-col items-center justify-center bg-cover bg-center text-center lg:min-h-screen md:h-screen px-4 sm:px-6"
  style={{ backgroundImage: "url('/pro-bg.png')" }}
>
  {/* White Overlay */}
  <div className="absolute inset-0 bg-white  lg:bg-transparent bg-opacity-80"></div>

  {/* Content */}
  <div className="relative w-full max-w-7xl md:p-8 rounded-lg flex flex-col md:flex-row gap-8 p-6">
    {/* LEFT SIDE - ERP Details */}
    <div className="flex-1 text-center md:text-start">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black">
        ERP Project Management System
        <hr className="w-full border-black border-2 my-4" />
      </h1>
      <p className="text-sm sm:text-base md:text-lg text-gray-700">
        Optimize construction and project workflows with our comprehensive ERP system,
        enhancing efficiency and collaboration for unparalleled success.
      </p>
      {/* Contact Button */}
      <a href="#demo" 
        className="bg-purple-500 text-white px-6 py-2 rounded-lg mt-4 inline-block w-full sm:w-auto"
      >
        Get Free Demo
      </a>
    </div>

    {/* RIGHT SIDE - Request for Demo Form (Placeholder) */}
    <div className="flex-1 hidden md:block"></div>
  </div>
</div>

    </div>

    <Project_detail/>
    <Footer/></>
  )
}

export default Project_management
