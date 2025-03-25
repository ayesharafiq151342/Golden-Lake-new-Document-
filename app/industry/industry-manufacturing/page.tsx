"use client";

import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import DemoForm from "@/app/components/demoform";
import Industry_paralex from "./components/paralex";
import ERPFeatures from "./components/Industry_Feature";
import { useState } from "react";
import DemoFormModal from "@/app/components/DemoFormModal";
import Button from "@/app/ui/style";
function Trading_system() {
  const [isModalOpen, setModalOpen] = useState(false);

  const modules = [
    {
      title: "Inventory Management",
      description:
        "Tracks raw materials, work-in-progress, and finished goods.",
    },
    {
      title: "Production Planning & Scheduling",
      description: "Optimizes manufacturing timelines and resource allocation.",
    },
    {
      title: "Warehouse Management",
      description: "Enhances storage, retrieval, and logistics operations.",
    },
    {
      title: "Quality Management",
      description:
        "Ensures compliance with industry standards and improves product quality.",
    },
    {
      title: "Supply Chain Management",
      description:
        "Coordinates suppliers, procurement, and distribution channels.",
    },
    {
      title: "Financial Management",
      description: "Handles budgeting, accounting, and cost control.",
    },
    {
      title: "Customer Relationship Management (CRM)",
      description: "Manages client interactions and sales.",
    },
    {
      title: "Human Resources & Payroll",
      description:
        "Automates workforce management, payroll, and employee records.",
    },
    {
      title: "Business Intelligence & Reporting",
      description: "Provides data-driven insights for decision-making.",
    },
    {
      title: "Maintenance & Asset Management",
      description:
        "Keeps machinery and equipment in optimal working condition.",
    },
  ];

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <div
        className="mt-20 mx-auto flex flex-col lg:items-center items-center h-screen justify-center bg-cover bg-center text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(128, 0, 128, 0.6), rgba(75, 0, 130, 0.6)), url('/industry-manufacturing.jpg')`,
          backgroundBlendMode: "overlay",
        }}
      >
        {/* Background Blur Overlay */}
        <div className="inset-0 bg-white/20"></div>

        {/* Main Content */}
        <div className="w-full max-w-7xl bg-white/40 mt-10 mb-20 p-4 md:p-8 rounded-lg flex flex-col md:flex-row gap-8">
          {/* LEFT SIDE - ERP Details */}
          <div className="flex-1 m-auto text-center md:text-start">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              ERP for Manufacturing Industry
            </h1>
            <p className="text-white mt-4 text-sm md:text-base">
              Streamline production and inventory with a unified ERP system
              Boost efficiency and reduce costs with real-time data insights
              Enhance decision-making and maintain consistent product quality
            </p>

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
      <div className="container mx-auto w-full md:w-9/12   px-4 py-10 space-y-16">
        <section className="text-center mb-12">
          <h1 className="lg:text-3xl  lg:text-center font-bold">
            ERP for Manufacturing Industry by Golden Lake
          </h1>
          <p className="mt-4 text-justify  text-gray-600">
            Many companies need to work on their outdated ERP systems to their
            breaking point to keep up with the demands of managing their supply
            chain, logistics, and financial operations. Modern manufacturers
            want solutions that integrate, link, and coordinate, providing the
            visibility necessary to manage operations and communicate data
            across the company on a unified platform to survive and thrive in
            these unpredictable conditions. Let’s look at “ERP for manufacturing
            industry”.
          </p>
        </section>

        {/* What is Manufacturing ERP Software? */}
        <section className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <img
            src="/industr-textile.webp"
            alt="ERP Diagram"
            className=" w-full h-full rounded-lg"
          />
          <div className="container mx-auto px-4 py-3 ">
            <h2 className="text-2xl font-semibold mb-4">
              What is Manufacturing ERP Software?
            </h2>
            <p className="text-gray-600 text-justify">
              To increase efficiency and production, manufacturing companies can
              benefit from Enterprise Resource Planning (ERP) software, which
              helps them manage and connect various company processes and
              operations. ERP integrates critical functions like inventory
              management, supply chain coordination, production scheduling,
              finance, and quality control into a single, unified system. By
              consolidating data from different departments, ERP provides
              real-time insights through dashboards, enabling managers to make
              quick and informed decisions. It enhances automation, reducing
              manual tasks and human errors, ultimately leading to higher
              efficiency and productivity.
            </p>
            <p className="text-gray-600 text-justify">
              ERP also improves collaboration across teams by providing a
              centralized platform where employees can access accurate and
              up-to-date information. This results in better workflow
              optimization, cost savings, and improved compliance with industry
              regulations. With cloud-based ERP solutions, manufacturing
              businesses can scale easily, monitor operations remotely, and
              ensure data security while keeping up with market demands.
              Investing in ERP software is a strategic move that empowers
              manufacturers to stay competitive in an ever-evolving industry.
            </p>
          </div>{" "}
        </section>

        {/* Who Requires Industrial ERP? */}
        <section className="max-w-9/12 mx-auto px-6 ">
          {/* Two-Column Layout for Introduction */}

          {/* ERP Modules Section */}
          <div className="lg:text-center  lg:mt-20 mt-4">
            <h2 className="text-2xl lg:text-center text-start font-semibold mb-4">
              Key ERP Modules for Manufacturing
            </h2>
            <p className="text-lg text-gray-600 mt-2">
              Streamline operations and integrate manufacturing with essential
              ERP features.
            </p>
          </div>

          {/* Grid Layout for ERP Modules */}
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-xl p-5 border-l-4 border-purple-700"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {module.title}
                </h3>
                <p className="text-gray-600 mt-2">{module.description}</p>
              </div>
            ))}
          </div>

          {/* Conclusion */}
        </section>
        {/* ERP Categories */}
        <section className="mb-12 lg:p-0 p-6">
          <h2 className="text-2xl font-semibold mb-4 lg:text-center text-start ">
            ERP Solutions for Different Business Types
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="text-xl font-bold">Small Business ERP</h3>
              <p className="text-gray-600 mt-2">
                Enterprise Resource Planning (ERP) software for small businesses
                streamlines operations by replacing inefficient manual processes
                with a unified platform. To handle the intricacies of running a
                firm, it provides a comprehensive solution with best-practice
                procedures.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="text-xl font-bold">Mid-Market ERP</h3>
              <p className="text-gray-600 mt-2">
                Software for mid-market manufacturers’ enterprise resource
                planning (ERP) needs includes analytics out of the box, quick
                rollout, and process best practices. Growing companies can
                increase their productivity, agility, and competitiveness with
                the help of modern ERP software.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="text-xl font-bold">Business Enterprise ERP</h3>
              <p className="text-gray-600 mt-2">
                Powerful, state-of-the-art ERP systems with integrated
                analytics, machine learning, and artificial intelligence are
                essential for multinational enterprises. To revolutionize
                processes, they need a platform that allows for intelligent
                automation.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Industry_paralex />
      <ERPFeatures />
      <Footer />
    </>
  );
}

export default Trading_system;
