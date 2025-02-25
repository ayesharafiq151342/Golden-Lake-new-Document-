"use client";
import { useState } from "react";

import Button from "@/app/ui/style";



function DemoForm() {
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
      <form
        id="demo"
        onSubmit={handleSubmit}
        className="bg-purple-700 bg-opacity-90 text-white p-6 rounded-lg shadow-md lg:w-9/12 h-96 "
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
    );
  };
  
  export default DemoForm;
  