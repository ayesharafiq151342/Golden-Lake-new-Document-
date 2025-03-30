"use client";
import React, { useState } from "react";
import Button from "@/app/ui/style";
import DemoFormModal from "@/app/components/DemoFormModal";

function Fronthome() {
    const [isModalOpen, setModalOpen] = useState(false);
  return (
     <div
     className="relative  mx-auto flex flex-col items-center justify-center bg-cover bg-center text-center lg:min-h-screen px-4 sm:px-6"
     style={{
       backgroundImage: ` url('/bgimg.jpg')`,
       backgroundBlendMode: 'overlay',
     }}
   >
   
     {/* White Overlay */}
     <div className="absolute inset-0 bg-black bg-opacity-50"></div>
   
     {/* Content */}
     <div className="relative w-full max-w-7xl md:p-8 rounded-lg flex flex-col md:flex-row gap-8 p-6">
       {/* LEFT SIDE - ERP Details */}
       <div className="flex-1 text-center md:text-start">
         <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold ">
        
       
Best ERP Software in Pakistan for Enterprises & Growing Businesses
           <hr className="w-full border-white border-2 my-4" />
         </h1>
         <p className="text-sm text-justify sm:text-base md:text-lg text-white  ">
         All-in-One Solution: Manage every part of your business in one place.
Real-Time Data: Access up-to-date info to make smart decisions fast.
Secure & Compliant: Keep your data safe and meet industry standards. </p>
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
       </div>
   
       {/* RIGHT SIDE - Request for Demo Form (Placeholder) */}
       <div className="flex-1 hidden md:block"></div>
     </div>
     </div>
  );
}

export default Fronthome;
