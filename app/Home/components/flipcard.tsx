"use client";
import React from "react";
import FlipCard from "./Card";

const FlipCardGrid = () => {
  const services = [
    {
      image: "/appli.png",
      title: "Application Setup",
      description: "Configure and customize your ERP application for business needs.",
      link: "/Application",
    },
    {
      image: "/accounts.png",
      title: "Accounts Management",
      description: "Manage financial accounts, transactions, and reporting efficiently.",
      link: "/Accounts",
    },
    {
      image: "/inven.png",
      title: "Inventory Management",
      description: "Monitor stock levels, track products, and manage warehouse operations.",
      link: "/Inventory-Management",
    },
    {
      image: "/purchase.png",
      title: "Purchases Management",
      description: "Streamline purchase orders, vendor management, and procurement processes.",
      link: "/purchase-management",
    },
    {
      image: "/sale.png",
      title: "Sales Management",
      description: "Optimize sales processes, track orders, and improve customer relations.",
      link: "/sale-Management",
    },
    {
      image: "/pro.png",
      title: "Projects Management",
      description: "Plan, execute, and track projects with task and team management tools.",
      link: "/projects-Management",
    },
    {
      image: "/hr.webp",
      title: "HR Management",
      description: "Manage employee records, payroll, and HR processes effectively.",
      link: "/hr-Management",
    },
    {
      image: "/all.png",
      title: "All Modules",
      description: "Access and integrate all ERP modules for complete business solutions.",
      link: "/all-Module",
    },
  ];

  return (
    <div className="text-center mx-auto mt-20 px-4 lg:w-9/12 sm:px-6 md:px-8">
      {/* Heading */}
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
        Golden Lake ERP Modules
      </h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1   sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 p-4">
        {services.map((service, index) => (
          <FlipCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default FlipCardGrid;
