"use client";

import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";

function page() {
  return (
    <>
      <Navbar />
      {/* Content */}
      <div
        className="relative mt-20 mx-auto flex flex-col items-center justify-center bg-cover bg-center text-center lg:min-h-screen md:h-screen px-4 sm:px-6"
        style={{
          backgroundImage:
            "url('/industry-men-working-machinery-in-steel-factory-free-photo.jpg')",
        }}
      >
        {/* White Overlay */}
        <div className=" bg-white  lg:bg-transparent bg-opacity-80"></div>

        {/* Content */}
        <div className="relative w-full max-w-7xl md:p-8 rounded-lg flex flex-col md:flex-row gap-8 p-6">
          {/* LEFT SIDE - ERP Details */}
          <div className="flex-1 text-center md:text-start">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              Steel Industry
              <hr className="w-full border-white border-2 my-4" />
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white">
              Golden Lake System is the best Software solution for the Steel
              Industry that will guide you in all your native problems of the
              company and provide a permanent solution.
            </p>
            {/* Contact Button */}
            <a
              href="#demo"
              className="bg-purple-700 text-white px-6 py-2 rounded-lg mt-4 inline-block w-54 sm:w-auto"
            >
              Get Free Demo
            </a>
          </div>

          {/* RIGHT SIDE - Request for Demo Form (Placeholder) */}
          <div className="flex-1 hidden md:block"></div>
        </div>
      </div>
      {/*    Solar Power and Energy Management Systems: */}
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">
          Optimizing Efficiency: ERP Solutions for the Steel Industry
        </h1>
        <p className="text-gray-700 mb-6">
          Efficiency is paramount in the dynamic world of iron manufacturing.
          ERP solutions offer tailored software solutions to address the
          specific challenges faced by companies in this industry.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Streamlining Operations</h2>
        <p className="text-gray-700 mb-6">
          Steelmakers can significantly benefit from the implementation of ERP
          solutions. These systems streamline business operations, maximize
          productivity, implement planning strategies, reduce resource wastage,
          and yield better ROI.
        </p>

        <div className="flex justify-center mt-20 mb-20">
        
        

<div className="flex-1">
<h2 className="text-xl font-semibold mb-3 mt-4">Key Features</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>Accounts & Finance</li>
          <li>MRP & Production</li>
          <li>Cash & Bank Management</li>
          <li>Quality Control</li>
          <li>Purchase & Import</li>
          <li>Asset Management</li>
          <li>Inventory Management</li>
          <li>Sales</li>
          <li>Project Management</li>
          <li>HR & Payroll</li>
          <li>Business Intelligence</li>
        </ul></div>
<div className="flex-1">
<img
            src="/trading-erp.png"
            alt="ERP Dashboard"
            className="w-full max-w-2xl rounded-lg shadow-lg"
          />
</div>
        
</div>
        <h2 className="text-2xl font-semibold mb-3">
          Benefits of ERP for the Steel Industry
        </h2>
        <ul className="list-decimal pl-6 mb-6 text-gray-700">
          <li>
            <strong>Seamless Integration:</strong> Facilitates integration
            across all departments and enhances collaboration.
          </li>
          <li>
            <strong>Adaptable Planning:</strong> Enables quick responses to
            market changes.
          </li>
          <li>
            <strong>Time Efficiency:</strong> Automates repetitive tasks, saving
            valuable time.
          </li>
          <li>
            <strong>Accurate Forecasting:</strong> Provides real-time data for
            better decision-making.
          </li>
          <li>
            <strong>Cost Control:</strong> Optimizes resource allocation and
            identifies cost-saving measures.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">
          Unique Advantages of ERP Solutions
        </h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li>
            <strong>Enhanced Business Processes:</strong> Improves supplier and
            manufacturing efficiency.
          </li>
          <li>
            <strong>Flexible Manufacturing Methods:</strong> Supports various
            production techniques.
          </li>
          <li>
            <strong>Superior Customer Service:</strong> Enhances visibility and
            customer interactions.
          </li>
          <li>
            <strong>Improved Cash Flow:</strong> Streamlines inventory and
            financial processes.
          </li>
        </ul>

        <p className="text-gray-700">
          ERP solutions stand as the ultimate solution for steel manufacturers
          seeking to maximize efficiency and achieve sustainable growth.
        </p>
      </div>
      <Footer />{" "}
    </>
  );
}

export default page;
