


"use client";
import { useState } from "react";
import Button from '../../ui/style'
import Link from "next/link";

export default function ERPForm() {
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
  };

  return (
    <div
      className=" mt-20 mx-auto flex flex-col lg:items-center items-start justify-start h-4/5 bg-cover bg-center text-center"
      style={{ backgroundImage: "url('/formimages.jpg')"  }}
    >
      {/* Background Blur Overlay */}
      <div className=" inset-0 bg-white/20 "></div>

      {/* Main Content */}
      <div className=" w-full max-w-7xl inset-0 bg-white/40 mt-20 mb-20  p-8 rounded-lg flex flex-col md:flex-row gap-8">
        {/* Left Side - ERP Details */}
        <div className="flex-1 m-auto">
          <h1 className="lg:text-3xl text-2xl text-start lg:text-center  font-bold text-white ">
            Best ERP Software in Pakistan for Enterprises & Growing Businesses
          </h1>
          <p className="text-white lg:text-center text-start mt-4">
             All-in-One Solution: Manage every part of your business in one place.<br />
             Real-Time Data: Access up-to-date data to make smart decisions faster.<br />
             Secure & Compliant: Keep your data safe and meet industry standards.
          </p>

          {/* Contact Us Button (Scroll to Form) */}
      {/* ✅ Link that scrolls to the "contact" section */}
      <Link href="contact " >
        <Button label="Contact Us" variant="primary"   />
      </Link>
        </div>

        {/* Right Side - Request for Demo Form */}
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="max-w-lg bg-purple-700 bg-opacity-90 text-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Request for Demo</h2>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 mb-3 rounded text-gray-900"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 mb-3 rounded text-gray-900"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 mb-3 rounded text-gray-900"
              required
            />
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
  );
}
