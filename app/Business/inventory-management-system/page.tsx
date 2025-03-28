"use client";

import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import { useState } from "react";
import DemoFormModal from "@/app/components/DemoFormModal";
import Button from "@/app/ui/style";

function InventoryManagement() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Navbar />
      {/* Content */}
      <div
        className="relative mt-20 mx-auto flex flex-col items-center justify-center bg-cover bg-center text-center lg:min-h-screen md:h-screen px-4 sm:px-6"
        style={{
          backgroundImage: "url('/Inventory Management System.jpg')",
        }}
      >
        {/* White Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative w-full max-w-7xl md:p-8 rounded-lg flex flex-col md:flex-row gap-8 p-6">
          {/* LEFT SIDE - ERP Details */}
          <div className="flex-1 text-center md:text-start">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              Inventory Management System
              <hr className="w-96 border-white border-2 my-4" />
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white"></p>
            {/* Contact Button */}
            <Button
              label="Get Free Demo"
              variant="secondary"
              onClick={() => setModalOpen(true)}
            />

            {/* Modal Component */}
            <DemoFormModal
              isOpen={isModalOpen}
              onClose={() => setModalOpen(false)}
            />
          </div>{" "}
        </div>{" "}
      </div>
      <div className="lg:w-9/12 w-full  mx-auto p-6 text-gray-900 dark:text-white">
        <h1 className="text-3xl font-bold mb-4">
          Optimize Operations with Golden Lake’s Inventory Management System
        </h1>
        <p className="mb-4">
          The inventory Management System is a vital component of your whole
          supply chain because it enables you to trace your items’ buying,
          storage, and sale at any particular moment. Once you can effectively
          track, how much material do you have where this is? Inventory
          management turns from a problematic, manual operation to a critical
          factor of your business’s growth plan. Further, Get Golden Lake
          services and improve your business inventory management with the best
          ERP-integrated software.{" "}
        </p>
        <div className="flex justify-center mb-6">
          <img
            src="/Inventory Management System-image.jpg" // Replace with actual image
            alt="Accounting Dashboard"
            className="w-full max-w-3xl rounded-lg shadow-md"
          />
        </div>
        <h2 className="text-2xl font-bold mt-6 mb-3">
          Purpose of Inventory Management System
        </h2>
        <p className="mb-4 mt-10">
          An inventory management system is a tool that allows you to track
          goods across your business’s supply chain. It optimizes the order
          management process and ensures that you can maintain the right stock
          levels.
        </p>

       
      <div className="grid grid-cols-1 lg:grid-cols-3">  <h3 className="text-xl font-bold mt-4">Features</h3> <ul className="list-disc list-inside mb-4">
          <li>Real-time Category</li>
          <li>Auto-Stock Updates</li>
          <li>Item Orders</li>
          <li>Stock Divisions</li>
        </ul>

        <h3 className="text-xl font-bold mt-4">Transactions</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Inventory Ordering Module</li>
          <li>Stock Returns</li>
          <li>Purchase Orders</li>
          <li>Stock Transfer (Internal/External)</li>
        </ul>

        <h3 className="text-xl font-bold mt-4">Reports</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Sales Balance</li>
          <li>Stock Reports</li>
          <li>Purchase Statements</li>
          <li>Automated Reports</li>
        </ul></div>
        <h2 className="text-2xl font-bold mt-6 mb-3">Barcoding and Tagging</h2>
        <p className="mb-4">
          The outstanding aspect of the inventory management system is the
          removal of common human mistakes. Moreover, Manual data entry can lead
          to errors, but scanning a barcode saves employees time.{" "}
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-3">
          Reporting on Company Operations
        </h2>
        <p className="mb-4">
          Monitoring an inventory firm necessitates keeping those in command up
          to date on different business operations, such as the vehicle’s
          location, etc.{" "}
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-3">
          Notifications About Inventory data
        </h2>
        <p className="mb-4">
        A sound inventory management system has a securities alarm function. Moreover, The program outlines numerous consequences that may arise due to the low supply of a specific item in the notifications.
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-3">
        Inventory backup and security
        </h2>
        <p className="mb-4">
        If inventory software is hacked, Even so, the data is protected by a backup that business owners may access and utilize. As a result, backup and inventory security avoid any disruptions.
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-3">
        The product’s demand and supply
        </h2>
        <p className="mb-4">
        Inventory software helps businesses manage their inventory effectively. Moreover, Executives properly manage the buyers and sellers of the company’s products.
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-3">
        Last Thoughts
        </h2>
        <p className="mb-4">
        Effective inventory management is critical to the global performance of Supply Networks. Further, The advantages of these systems are obvious, and as time passes, more and more businesses will continue to use similar solutions. After that, Golden Lake provides you with complete solutions for any ERP softwar
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-3">
          Benefits of Inventory Management that is Integrated with ERP
        </h2>
        <p className="mb-4">
        Inventory Management System strategies can assist you in saving money and further maintaining a correct stock count. Furthermore, integrating an ERP system with inventory management features will give you even more benefits.
        </p>

        <h3 className="text-xl font-bold mt-4">
          1. Evaluate Inventory Levels Across the Organization
        </h3>
        <p className="mb-4">
        ERP systems can give a global picture of orders across all departments, from selling to accounting through delivery. Moreover, centralized purchasing eliminates duplication, and buying in bulk saves money.ERP systems can give a global picture of orders across all departments, from selling to accounting through delivery. Moreover, centralized purchasing eliminates duplication, and buying in bulk saves money.
        </p>

        <h3 className="text-xl font-bold mt-4">2. Improve Forecasting</h3>
        <p className="mb-4">
        Data collecting and analytics software can give insights into patterns. You may also enhance your stock predictions by understanding patterns.
        </p>

        <h3 className="text-xl font-bold mt-4">
          3. Optimize Your Entire Inventory
        </h3>
        <p className="mb-4">
        A solid inventory management system aids in maintaining the proper mix of stock and amounts at the lowest possible carrying costs. Further, it will assist you in ensuring that you always have reasonable amounts on hand.     </p>

        <h3 className="text-xl font-bold mt-4">
          4. Manual Tasks Can Be Automated
        </h3>
        <p className="mb-4">
        Stock-taking, further receiving, and fulfilment may all be up by barcode and RFID scanning. At the same time, Using software decreases mistakes caused by manual entry and frees employees from repetitive activities.n
        </p>

        <h3 className="text-xl font-bold mt-4">5. Profit Has Increased</h3>
        <p className="mb-4">
          Better stock availability and management result in higher inventory
          turnover and profitability.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default InventoryManagement;
