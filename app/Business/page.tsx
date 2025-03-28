"use client";

import Navbar from "@/app/components/navbar";

import Footer from "@/app/components/footer";
import DemoForm from "@/app/components/demoform";
import { useState } from "react";
import DemoFormModal from "@/app/components/DemoFormModal";
import Button from "@/app/ui/style";
function Page() {
  const [isModalOpen, setModalOpen] = useState(false);
  
      {/* OTHER SECTIONS */}
      const modules = [   {
        title: "Financial Management Module",
        description:
          "Any ERP system’s core is its Financial Management module, which oversees all financial transactions and data. It ensures accurate financial reporting, tracks accounts payable and receivable, and supports budgeting and forecasting",
        keyFeatures: [
          "Accounting and bookkeeping",
          "Financial reporting",
          "Budgeting and forecasting",
          "Tax and compliance management",
        ],
        image: "/project-0.png", // Replace with actual image
      },
      {
        title: "Human Resources (HR) Management Module",
        description:
          "The HR Management module helps in tracking employee records, payroll, benefits, and performance management.",
        keyFeatures: [
          "Employee management",
          "Payroll processing",
          "Performance tracking",
          "Recruitment and onboarding",
        ],
        image: "/project-1.png", // Replace with actual image
      },
      {
        title: "Sales and Marketing Module",
        description:
          "The Sales and Marketing module assists organizations in managing customer interactions, tracking leads, and improving sales performance. It helps streamline the entire sales cycle, from lead generation to closing deals.",
        keyFeatures: [
          "Customer Relationship Management (CRM) integration",
          "Lead and opportunity tracking ",
          "Sales forecasting and analytics ",
          "Campaign management",
        ],
        image: "/project-2b.png", // Replace with actual image
      },
      {
        title: "Supply Chain Management Module",
        description:
          "The Sales and Marketing module assists organizations in managing customer interactions, tracking leads, and improving sales performance. It helps streamline the entire sales cycle, from lead generation to closing deals.",
        keyFeatures: [
          "Supplier management",
          "Order processing and fulfillment ",
          "Demand planning ",
          "Shipment tracking",
          "Supplier contract management",

        ],
        image: "/project-4.png", // Replace with actual image
      },
      {
        title: " Manufacturing Module",
        description:
          "For sectors engaged in production, the Manufacturing module is essential. It oversees the production process, ensuring efficiency, cost management, and high-quality outputs.",
        keyFeatures: [
          "Production planning and scheduling",
          "Bill of Materials (BOM) management ",
          "Quality control",
          "Machine and resource allocation",
        ],
        image: "/project-0.png", // Replace with actual image
      },
      {
        title: " Customer Relationship Management (CRM) Module",
        description:
          "This module focuses on improving customer interactions and relationships. It supports lead generation, customer service, and data-driven insights to improve client satisfaction.",
        keyFeatures: [
          "Lead and contact management",
          "Sales pipeline management ",
          "Customer support and service tracking",
          "Customer analytics and feedback",
        ],
        image: "/ngo-sale.png", // Replace with actual image
      },  {
        title: " Project Management Module",
        description:
          "For businesses handling multiple projects, the Project Management module provides tools to plan, track, and execute projects on time and within budget.",
        keyFeatures: [
          "Lead and contact management",
          "Sales pipeline management ",
          "Customer support and service tracking",
          "Customer analytics and feedback",
        ],
        image: "/project-2b.png", // Replace with actual image
      },
    ];
  

  return (
    
    <>
      <Navbar />

      {/* HERO SECTION */}
      <div
        className="mt-20 mx-auto flex flex-col lg:items-center items-center h-screen justify-center bg-cover bg-center text-center"
        style={{ backgroundImage: "url('/business-image-home-1.jpg')" }}
      >
        {/* Background Blur Overlay */}
        <div className="inset-0 bg-white/20"></div>

        {/* Main Content */}
        <div className="w-full max-w-7xl bg-white/40 mt-10 mb-20 p-4 md:p-8 rounded-lg flex flex-col md:flex-row gap-8">
          {/* LEFT SIDE - ERP Details */}
          <div className="flex-1 m-auto text-center md:text-start">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Golden Lake ERP Modules
            for Business Processes
            </h1>
            <p className="text-white mt-4 text-sm md:text-base">
             
Simplify workflows with modules for inventory, finance, HR, and supply chain management.
Access accurate data instantly to make informed business decisions and boost productivity.
Tailor ERP modules to fit your unique business needs for maximum efficiency and growth.    </p>

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

          {/* RIGHT SIDE - Request for Demo Form */}
          <div className="flex-1 flex justify-center">
            <DemoForm />
          </div>
        </div>
      </div>


    <div className="  m-auto w-9/12  p-6">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">
        Comprehensive Guide to ERP Modules: Streamlining Business Operations

        </h1>
        <p className="text-gray-600 mt-2">
        Enterprise Resource Planning (ERP) systems have become vital in managing modern businesses by integrating various operations into a single unified platform. ERP systems offer a range of modules tailored to specific functions within an organization. These modules allow companies to enhance productivity, streamline workflows, and improve decision-making processes. This guide will explore the key ERP modules and their benefits for different business sectors.       </p>
      </div>

      <h1 className="text-3xl font-bold text-gray-800">
      Main ERP Modules and Their Functions
        </h1>
     
        <div className="space-y-10">
        {modules.map((module, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-6 bg-white p-6 shadow-md rounded-lg ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
          >
            <img
              src={module.image}
              alt={module.title}
              className="w-54 h-96 object-cover rounded-md"
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">{module.title}</h2>
              <p className="text-gray-600 mt-2">{module.description}</p>
              <ul className="mt-2 list-disc list-inside text-gray-700">
                {module.keyFeatures.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
      <Footer />
    </>
  );
}

export default Page;
