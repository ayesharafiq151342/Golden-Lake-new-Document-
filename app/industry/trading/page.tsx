"use client";

import Footer from '@/app/components/footer';
import Navbar from '@/app/components/navbar';
import React, { useState } from "react";
import DemoFormModal from "@/app/components/DemoFormModal";
import Button from "@/app/ui/style";
import { motion } from 'framer-motion';

function Page() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Navbar />
      
      {/* Content Section */}
      
{/*  */}
<div
className="relative mt-20 mx-auto md:h-[600px] flex flex-col items-center justify-center bg-cover bg-center text-center lg:min-h-screen px-4 sm:px-6"
style={{
  backgroundImage: `url('/trading-imports-and-exports.webp')`,
  backgroundBlendMode: 'overlay',
}}
>
{/* Overlay */}
<div className="absolute inset-0 bg-black bg-opacity-50"></div>

{/* Content */}
<div className="relative w-full max-w-7xl md:p-8 rounded-lg flex flex-col md:flex-row gap-8 p-6">
  {/* LEFT SIDE */}
  <motion.div
    className="flex-1 text-center md:text-start"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <motion.h1
      className="text-xl sm:text-2xl md:text-xl lg:text-4xl text-white font-bold"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
              Industries
      <hr className="w-full border-white border-2 my-4" />
    </motion.h1>

    <motion.p
      className="text-sm sm:text-base md:text-lg text-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.8 }}
    >
    ERP systems can be customized to meet the unique needs
    and challenges of different industries
    </motion.p>

    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.6 }}
    >
      <Button
        label="Get Free Demo"
        variant="secondary"
        onClick={() => setModalOpen(true)}
      />
    </motion.div>

    {/* Modal */}
    <DemoFormModal
      isOpen={isModalOpen}
      onClose={() => setModalOpen(false)}
    />
  </motion.div>

  {/* RIGHT SIDE (Optional Form/Visuals) */}
  <div className="flex-1 hidden md:block"></div>
</div>
</div>
      {/* ERP Details */}
      <section className="container w-9/12 mx-auto py-10">
        <div className="text-start w-7xl mx-auto">
          <h2 className="md:text-xl font-bold text-center text-gray-800">Trading and Distribution Industry</h2>
          <p className="mt-4 text-gray-600 text-justify">
            Revolutionize your trade and distribution operations with Multi-Techno’s ERP solution...
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

        {/* Features Section */}
        <section className="container lg:mt-20 mx-auto py-10">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-96 lg:flex-1">
              <h2 className="md:text-xl font-bold text-gray-800">Trading ERP Features</h2>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li>• Store & Purchase Management</li>
                <li>• Inventory Management</li>
                <li>• Sales and Distribution Management</li>
                <li>• Billing and Collections</li>
                <li>• Financial Management</li>
                <li>• Supply Chain Management</li>
                <li>• Customer Relations Management</li>
                <li>• HR and Payroll Management</li>
              </ul>
            </div>

            <div className="w-full lg:flex-1 mt-8 lg:mt-0 flex justify-center">
              <img src="/trading-erp.png" alt="ERP Dashboard" className="w-full h-auto max-w-lg" />
            </div>
          </div>
        </section>
      </section>

      <Footer />
    </>
  );
}

export default Page;
