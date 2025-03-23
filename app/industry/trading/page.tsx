"use client";

import Footer from '@/app/components/footer'
import Navbar from '@/app/components/navbar'
import React from 'react'

function page() {
  return (
   <>
   <Navbar/>
    {/* Content */}
  <div
  className="relative mt-20 mx-auto flex flex-col items-center justify-center bg-cover bg-center text-center lg:min-h-screen md:h-screen px-4 sm:px-6"
  style={{ backgroundImage: "url('/trading-imports-and-exports.webp')" }}
>
  {/* White Overlay */}
  <div className=" bg-white  lg:bg-transparent bg-opacity-80"></div>

  {/* Content */}
  <div className="relative w-full max-w-7xl md:p-8 rounded-lg flex flex-col md:flex-row gap-8 p-6">
    {/* LEFT SIDE - ERP Details */}
    <div className="flex-1 text-center md:text-start">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
      Industries
        <hr className="w-full border-white border-2 my-4" />
      </h1>
      <p className="text-sm sm:text-base md:text-lg text-white">
      ERP systems can be customized to meet the unique needs
      and challenges of different industries
      </p>
      {/* Contact Button */}
      <a href="#demo" 
        className="bg-purple-700 text-white px-6 py-2 rounded-lg mt-4 inline-block w-54 sm:w-auto"
      >
        Get Free Demo
      </a>
    </div>

    {/* RIGHT SIDE - Request for Demo Form (Placeholder) */}
    <div className="flex-1 hidden md:block"></div>
    
  </div>
</div>    <section className="container w-9/12 mx-auto  py-10">
      {/* Header Section */}
      <div className="text-start  w-7xl mx-auto">
        <h2 className="md:text-3xl  font-bold text-center text-gray-800">Trading and Distribution Industry</h2>
        <p className="mt-4 text-gray-600 text-justify">
        Revolutionize your trade and distribution operations with Multi-Techno’s ERP solution, a powerful and versatile platform designed to meet the unique needs of businesses across all sizes in the industry. In the dynamic landscape of the trade and distribution sector, efficient management and control are crucial for success. Multi-Techno’s ERP solution provides a holistic approach, integrating various aspects of trading, Organization, and Operations Effectively.
 </p>       <p className="mt-4 text-gray-600 text-justify">
Our ERP system offers comprehensive modules tailored to address challenges specific to the trade and distribution industry. From inventory management and order processing to supply chain coordination and financial control, every aspect is covered. The solution ensures seamless communication and collaboration across departments, fostering a cohesive and efficient workflow.
</p><p className="mt-4 text-gray-600 text-justify">
Key features include real-time tracking of inventory levels, automated order processing, supplier relationship management, and robust financial modules for accurate accounting and reporting. The system’s scalability makes it suitable for businesses of all sizes, providing the flexibility to adapt and grow in a competitive market. Experience the next level of efficiency and control in trade and distribution with Multi-Techno’s ERP solution.
        </p>
      </div>

      {/* Image Section */}
      <div className="mt-8">
        <img 
          src="/dashboard2.png" 
          alt="Trading ERP Dashboard" 
          className="w-full lg:mt-20 rounded-lg shadow-lg"
        />
      </div>
      <section className="container lg:mt-20 mx-auto py-10">
  <div className="flex flex-col lg:flex-row">
    {/* Features List */}
    <div className="w-full lg:w-96 lg:flex-1">
      <h2 className="md:text-3xl font-bold text-gray-800">Trading ERP Features</h2>
      <ul className="mt-4 space-y-2 text-gray-700">
        <li>• Store & Purchase Management</li>
        <li>• Inventory Management</li>
        <li>• Sales and Distribution Management</li>
        <li>• Billing and Collections</li>
        <li>• Financial Management</li>
        <li>• Supply Chain Management</li>
        <li>• Customer Relations Management</li>
        <li>
          • <span className="font-bold">HR and Payroll Management</span>
        </li>
        <li>• Multiple Users Security</li>
        <li>• Multiple Company and Branches</li>
        <li>• Sales Rep App</li>
        <li>• Delivery Man App</li>
        <li>• All Modules Dashboards</li>
      </ul>
    </div>

    {/* Image Section */}
    <div className="w-full lg:flex-1 mt-8 lg:mt-0 flex justify-center">
      <img
        src="/trading-erp.png"
        alt="ERP Dashboard"
        className="w-full h-auto max-w-lg" // Adjusted image sizing
      />
    </div>
  </div>
</section>
      {/* Features Section */}
    

      {/* Benefits Section */}
      <div className="mt-10">
        <h3 className="md:text-2xl font-semibold  text-gray-800">Benefits of using our Cloud ERP</h3>
        <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
          <li>• Real-time Stock Control</li>
          <li>• Automated Invoicing</li>
          <li>• Secure Cloud Storage</li>
          <li>• Scalable Solutions</li>
          <li>• Access from Anywhere</li>
          <li>• AI-powered Insights</li>
          <li>• Reduced Operational Costs</li>
          <li>• Enhanced Data Security</li>
        </ul>
      </div>
    </section>
  <Footer/> </>
  )
}

export default page
