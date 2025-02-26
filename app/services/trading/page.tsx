"use client";

import Navbar from "@/app/components/navbar";
import Button from "@/app/ui/style";
import Link from "next/link";
import Tarding_services from "./components/tarding_services";
import TradingDistribution from "./components/msg";
import Faqs from "./components/faqs";
import Footer from "@/app/components/footer";
import DemoForm from "@/app/components/demoform";

function Trading_system() {

 
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <div
        className="mt-20 mx-auto flex flex-col lg:items-center items-center h-screen justify-center bg-cover bg-center text-center"
        style={{ backgroundImage: "url('/formimages.jpg')" }}
      >
        {/* Background Blur Overlay */}
        <div className="inset-0 bg-white/20"></div>

        {/* Main Content */}
        <div className="w-full max-w-7xl bg-white/40 mt-10 mb-20 p-4 md:p-8 rounded-lg flex flex-col md:flex-row gap-8">
          {/* LEFT SIDE - ERP Details */}
          <div className="flex-1 m-auto text-center md:text-start">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              Trading and Distribution Management System
            </h1>
            <p className="text-white mt-4 text-sm md:text-base">
              Our ERP is a top-tier web-based enterprise solution designed to meet all your trading and distribution business needs.
            </p>

            {/* Contact Button Linking to Form */}
            <Link href="#demo">
              <Button label="Get Free Demo" variant="primary" />
            </Link>
          </div>

          {/* RIGHT SIDE - Request for Demo Form */}
          <div className="flex-1 flex justify-center">
          <DemoForm/>
          </div>
        </div>
      </div>

      {/* OTHER SECTIONS */}
      <Tarding_services />
      <TradingDistribution />
      <Faqs />
      <Footer />
    </>
  );
}

export default Trading_system;
