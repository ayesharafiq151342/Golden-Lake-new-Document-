"use client";
import { useState } from "react";
import Navbar from "@/app/components/navbar";
import Button from "@/app/ui/style";
import Link from "next/link";
import Tarding_services from "./components/tarding_services";
import TradingDistribution from "./components/msg";
import Faqs from "./components/faqs";
import Footer from "@/app/components/footer";

function Trading_system() {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Handle Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload
    console.log("Form Data Submitted:", formData);
    // Optional: Reset form after submission
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <div
        className="mt-20 mx-auto flex flex-col lg:items-center items-center justify-center bg-cover bg-center text-center"
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
            <form
              id="demo"
              onSubmit={handleSubmit}
              className="w-full max-w-md bg-purple-700 bg-opacity-90 text-white p-6 rounded-lg shadow-md"
            >
              <h2 className="text-lg font-semibold mb-4 text-center">Request for Demo</h2>

              {/* Name Input */}
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 mb-3 rounded text-gray-900"
                required
              />

              {/* Email Input */}
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 mb-3 rounded text-gray-900"
                required
              />

              {/* Phone Number Input */}
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 mb-3 rounded text-gray-900"
                required
              />

              {/* Message Textarea */}
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 mb-3 rounded text-gray-900"
                required
              ></textarea>

              {/* Submit Button */}
              <Button label="Submit" variant="secondary" />
            </form>
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
