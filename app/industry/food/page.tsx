"use client";

import React from 'react'
import Navbar from '@/app/components/navbar'
import { useState } from "react";
import DemoFormModal from "@/app/components/DemoFormModal";
import Button from "@/app/ui/style";
import Footer from '@/app/components/footer'
import ERPFoodManufacturing from './components/food_features'
function Page() {
  
  const [isModalOpen, setModalOpen] = useState(false);

  return (
   <>
   <Navbar/>
 
  {/* Content */}
  <div
  className="relative mt-20 mx-auto flex flex-col items-center justify-center bg-cover bg-center text-center lg:min-h-screen md:h-screen px-4 sm:px-6"
  style={{
    backgroundImage: `linear-gradient(to right, rgba(75, 0, 130, 0.9) 30%, rgba(128, 0, 128, 0.6) 70%, rgba(128, 0, 128, 0.3) 100%), url('/food-hoome.jpg')`,
    backgroundBlendMode: 'overlay',
  }}
>

  {/* White Overlay */}
  <div className=" bg-black  lg:bg-transparent bg-opacity-80"></div>

  {/* Content */}
  <div className="relative w-full max-w-7xl md:p-8 rounded-lg flex flex-col md:flex-row gap-8 p-6">
    {/* LEFT SIDE - ERP Details */}
    <div className="flex-1 text-center md:text-start">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold ">
      Food Industry
        <hr className="w-full border-black border-2 my-4" />
      </h1>
      <p className="text-sm sm:text-base md:text-lg ">
      Golden Lake ERP aids the growing complexity of the food and beverage industry, as well as the pressures for innovation.
      </p>
      {/* Contact Button */}
       {/* Contact Button Linking to Form */}
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
<ERPFoodManufacturing/>
  

<Footer/>
   </>
  )
}

export default Page
