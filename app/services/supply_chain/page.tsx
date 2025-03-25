"use client";
import Navbar from "@/app/components/navbar";
import Button from "@/app/ui/style";
import Link from "next/link";
import DemoForm from "@/app/components/demoform";
import A from "./components/mani-erp-per";
import Footer from "@/app/components/footer";
import SupplyChain_Manage from "./components/supply_manage";
import { useState } from "react";
import DemoFormModal from "@/app/components/DemoFormModal";
function Manage_system() {
  // State for form inputs
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <div
        className="mt-20 mx-auto flex flex-col lg:items-center items-center justify-center bg-cover bg-center text-center h-screen backdrop-blur-md"
        style={{
          backgroundImage: "url('/mani-page3.webp')",
          backgroundColor: "rgb(130, 128, 127)",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="w-full max-w-7xl  md:p-8 rounded-lg flex flex-col md:flex-row gap-8 p-6">
          {/* LEFT SIDE - ERP Details */}
          <div className="flex-1 m-auto text-center md:text-start">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              Supply Chain Management Solutions
            </h1>
            <ul className="text-white mt-4 text-sm md:text-base list-disc list-inside">
              <li>Simplify procurement and inventory with SCM tools</li>
              <li>Ensure transparency with real-time tracking</li>
              <li>Cut costs and boost efficiency with automation</li>
            </ul>
            {/* Contact Button Linking to Form */}
            <Button
              label="Get Free Demo"
              variant="secondary"
              onClick={() => setModalOpen(true)}
            />

            {/* Modal Component */}
          </div>
          {/* RIGHT SIDE - Request for Demo Form */}
          <div className="flex-1 flex justify-center">
            <DemoForm />
          </div>
        </div>
      </div>

      <A />

      {/* Parallax Section */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        {/* Background Image with Parallax */}
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-fixed parallax-bg"
          style={{ backgroundImage: "url(/OPT.jpg)" }}
        ></div>

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-purple-200 bg-opacity-70 flex flex-col items-center justify-center">
          {/* Heading */}
          <h1 className="text-2xl md:text-4xl font-bold text-black text-center px-4 w-10/12 md:w-8/12">
            Optimize your supply chain with Multi-Techno. Contact us now!
          </h1>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row lg:w-9/12 justify-center mt-5 gap-4">
            {/* Contact Button Linking to Form */}

            {/* Modal Component */}
            <DemoFormModal
              isOpen={isModalOpen}
              onClose={() => setModalOpen(false)}
            />
            <Link href="#demo">
              <Button
                label="Free Demo"
                variant="secondary"
                onClick={() => setModalOpen(true)}
              />
            </Link>
            <Link href="/aboutus">
              <Button label="Learn More" variant="secondary" />
            </Link>
          </div>
        </div>

        {/* Parallax Effect Styles */}
        <style jsx>{`
          .parallax-bg {
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            height: 150%;
            top: -25%;
          }

          @media (max-width: 768px) {
            /* Disable fixed background on mobile for better performance */
            .parallax-bg {
              background-attachment: scroll;
            }
          }
        `}</style>
      </div>
      <SupplyChain_Manage />
      <Footer />
    </>
  );
}

export default Manage_system;
