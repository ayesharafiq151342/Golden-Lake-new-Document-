// FlipCardGrid.jsx
import React from "react";
import FlipCard from "./Card";
import { 
  FaCogs, 
  FaFileInvoiceDollar, 
  FaBoxes, 
  FaShoppingCart, 
  FaChartLine, 
  FaProjectDiagram, 
  FaUsers 
} from "react-icons/fa";

const FlipCardGrid = () => {
  const services = [
    { icon: FaCogs, color: "text-blue-600", title: "Application Setup", description: "Configure and customize your ERP application for business needs.", link: "/services/manufacturing" },
    { icon: FaFileInvoiceDollar, color: "text-green-600", title: "Accounts Management", description: "Manage financial accounts, transactions, and reporting efficiently.", link: "/Business/Accounts-And-Finance-Management" },
    { icon: FaBoxes, color: "text-yellow-600", title: "Inventory Management", description: "Monitor stock levels, track products, and manage warehouse operations.", link: "/Business/inventory-management-system" },
    { icon: FaShoppingCart, color: "text-purple-600", title: "Purchases Management", description: "Streamline purchase orders, vendor management, and procurement processes.", link: "/Business/purchase-management" },
    { icon: FaChartLine, color: "text-orange-600", title: "Sales Management", description: "Optimize sales processes, track orders, and improve customer relations.", link: "/Business/sale-management-system" },
    { icon: FaProjectDiagram, color: "text-red-600", title: "Projects Management", description: "Plan, execute, and track projects with task and team management tools.", link: "/services/project-managment" },
    { icon: FaUsers, color: "text-teal-600", title: "HR Management", description: "Manage employee records, payroll, and HR processes effectively.", link: "/services/Payroll" },
  ];

  return (
    <div className="text-center mx-auto mt-20 px-4 sm:px-6 md:px-12 lg:px-20 max-w-7xl">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
        Golden Lake ERP Modules
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 p-4">
        {services.map((service, index) => (
          <FlipCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default FlipCardGrid;
