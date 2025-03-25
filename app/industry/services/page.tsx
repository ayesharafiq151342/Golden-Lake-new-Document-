"use client";
import React from 'react'
import Navbar from '@/app/components/navbar'
import { useState } from "react";
import DemoFormModal from "@/app/components/DemoFormModal";
import Button from "@/app/ui/style";
import Footer from '@/app/components/footer'
import ERPIntegration from './components/page'
function Page() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
   <>
   <Navbar/>
 
  {/* Content */}
  <div
  className="relative mt-20 mx-auto flex flex-col items-center justify-center bg-cover bg-center text-center lg:min-h-screen md:h-screen px-4 sm:px-6"
  style={{
    backgroundImage: `linear-gradient(to right, rgba(75, 0, 130, 0.6) 30%, rgba(128, 0, 128, 0.6) 70%, rgba(128, 0, 128, 0.3) 100%), url('/services-image-bg.jpg')`,
    backgroundBlendMode: 'overlay',
  }}
>

  {/* White Overlay */}
  <div className=" bg-black  lg:bg-transparent bg-opacity-80"></div>

  {/* Content */}
  <div className="relative w-full max-w-7xl md:p-8 rounded-lg flex flex-col md:flex-row gap-8 p-6">
    {/* LEFT SIDE - ERP Details */}
    <div className="flex-1 text-center md:text-start">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold ">
      Services Industries Solutions
        <hr className="w-full border-white border-2 my-4" />
      </h1>
      <p className="text-sm sm:text-base md:text-lg text-white  ">
      Golden Lake ERP enables you to resource your business and manage service delivery.
      </p>
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
<ERPIntegration/>
<Footer/>
   </>
  )
}

export default Page
