import React, { useState } from "react";
import { 
  FaCogs, 
  FaFileInvoiceDollar, 
  FaBoxes, 
  FaShoppingCart, 
  FaChartLine, 
  FaProjectDiagram, 
  FaUsers 
} from "react-icons/fa";

type Service = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; // Accepts className
  title: string;
  description: string;
};

const FlipCardGrid: React.FC = () => {
  const services: Service[] = [
    { icon: FaCogs, title: "Application Setup", description: "Configure and customize your ERP application for business needs." },
    { icon: FaFileInvoiceDollar, title: "Accounts Management", description: "Manage financial accounts, transactions, and reporting efficiently." },
    { icon: FaBoxes, title: "Inventory Management", description: "Monitor stock levels, track products, and manage warehouse operations." },
    { icon: FaShoppingCart, title: "Purchases Management", description: "Streamline purchase orders, vendor management, and procurement processes." },
    { icon: FaChartLine, title: "Sales Management", description: "Optimize sales processes, track orders, and improve customer relations." },
    { icon: FaProjectDiagram, title: "Projects Management", description: "Plan, execute, and track projects with task and team management tools." },
    { icon: FaUsers, title: "HR Management", description: "Manage employee records, payroll, and HR processes effectively." },
  ];

  const FlipCard: React.FC<Service> = ({ icon: Icon, title, description }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        className="relative w-full h-64 perspective cursor-pointer"
      >
        <div
          className="absolute w-full h-full text-center transition-transform duration-500"
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
          }}
        >
          {/* Front */}
          <div
            className="absolute w-full h-full flex flex-col items-center justify-center rounded-lg shadow-lg bg-white text-purple-700"
            style={{ backfaceVisibility: "hidden" }}
          >
            <Icon className="text-5xl mb-4" /> {/* Now works */}
            <h3 className="text-lg font-bold">{title}</h3>
          </div>

          {/* Back */}
          <div
            className="absolute w-full h-full flex items-center justify-center rounded-lg shadow-lg p-4 bg-purple-700 text-white"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)"
            }}
          >
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="text-center mx-auto mt-20 px-4 sm:px-6 md:px-12 lg:px-20 max-w-7xl">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
        Golden Lake <span className="text-purple-700">ERP</span> Modules
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
