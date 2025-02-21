


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

// import Link from "next/link";
// import { Wallet, BarChart, ShoppingCart, Store, Boxes, Factory, Shield, Wrench, Home, Users } from "lucide-react";


// const services = [
//   { icon: Wallet, label: "FINANCE", link: "/finance", color: "text-green-600" },
//   { icon: BarChart, label: "SALE", link: "/sale", color: "text-blue-600" },
//   { icon: ShoppingCart, label: "PURCHASE", link: "/purchase", color: "text-yellow-600" },
//   { icon: Store, label: "POS", link: "/pos", color: "text-red-600" },
//   { icon: Boxes, label: "INVENTORY", link: "/inventory", color: "text-purple-600" },
//   { icon: Factory, label: "MANUFACTURING", link: "/manufacturing", color: "text-orange-600" },
//   { icon: Home, label: "ASSETS", link: "/assets", color: "text-teal-600" },
//   { icon: Shield, label: "SECURITY", link: "/security", color: "text-indigo-600" },
//   { icon: Wrench, label: "SERVICES", link: "/services", color: "text-pink-600" },
//   { icon: Users, label: "HRM", link: "/hrm", color: "text-gray-600" },
// ];

// function Icon() {
//   return (
//     <div className="text-center w-9/12 mx-auto mt-20">
//       <h1 className="text-3xl font-bold text-gray-800">
//         Providing Integrated Solutions for Your Business
//       </h1>
//       <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mt-20 place-items-center">
//         {services.map(({ icon: Icon, label, link, color }, index) => (
//           <div key={index} className="flex flex-col items-center w-36 h-28 justify-center bg-gray-100 rounded-lg shadow-lg hover:bg-purple-700   text-black hover:text-white transition-all">
//             {/* Consistent Icon Size */}
//             <Icon size={36} className={`${color} mb-2`} />
//             <Link href={link} passHref>
//               <span className="text-sm font-semibold text-gray-800 hover:text-white ">{label}</span>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Icon;