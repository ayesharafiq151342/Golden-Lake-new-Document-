"use client";

import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import { useState } from "react";
import DemoFormModal from "@/app/components/DemoFormModal";
import Button from "@/app/ui/style";

function Page() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Navbar />
      {/* Content */}
      <div
        className="relative mt-20 mx-auto flex flex-col items-center justify-center bg-cover bg-center text-center lg:min-h-screen md:h-screen px-4 sm:px-6"
        style={{
          backgroundImage:
            "url('/sale-management-system.png')",
        }}
      >
        {/* White Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>


        {/* Content */}
        <div className="relative w-full max-w-7xl md:p-8 rounded-lg flex flex-col md:flex-row gap-8 p-6">
          {/* LEFT SIDE - ERP Details */}
          <div className="flex-1 text-center md:text-start">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              Sale Management System
              <hr className="w-full border-white border-2 my-4" />
            </h1>
            <p className="text-sm sm:te text-justify xt-base md:text-lg text-white">

            </p>
            {/* Contact Button */}
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

          {/* RIGHT SIDE - Request for Demo Form (Placeholder) */}
          <div className="flex-1 hidden md:block"></div>
        </div>
      </div>
      {/*    Solar Power and Energy Management Systems: */}
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">
          Efficient Sale Management System Multi-Techno ERP Solution
        </h1>
        <p className="text-gray-700 text-justify  mb-6">
          Golden Lake sales management software enables sales staff to work together and simplifies everyday tasks. You may improve cooperation and reduce boring admin activities. In the same way, you can, in the end, meet your sales goals by using ERP to perform a sales management system.
      </p>    
      </div>




      <div className="max-w-5xl mx-auto p-6">
        {/* Header Image */}
        <div className="flex justify-center mb-6">
          <img
            src="/dashboard2.png" // Replace with actual image
            alt="Accounting Dashboard"
            className="w-full max-w-3xl rounded-lg shadow-md"
          />
        </div>
        <div className="mx-auto mt-10 mb-6 text-center max-w-4xl">
  <h1 className="text-3xl font-bold mb-4">
    Order to Cash Cycle of Sale Management System
  </h1>
  
  <img
    src="/Purcahse-managemnt-flow diagram.webp" // Ensure the path is correct
    alt="Purchase Management Flow Diagram"
    className="w-full max-w-3xl mx-auto mt-10 rounded-lg shadow-md"
  />
</div>

        {/* Features Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">The Features of Accounting and Finance Software</h2>
          <p className="mb-4">
            text-justify     A good financial system offers all the necessary accounting transactions, tracking of company accounts, cashbooks, recording invoices,
            management, and automated reports.
          </p>
          <p className="mb-4">Some of text-justify  its key features include:</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Setup */}
            <div>
              <h3 className="text-lg font-semibold">Setup</h3>
              <ul className="list-disc list-inside">
                <li>Chart of Accounts</li>
                <li>Bank Accounts</li>
                <li>Multi-Currency</li>
                <li>Financial Year Setup</li>
              </ul>
            </div>

            {/* Transactions */}
            <div>
              <h3 className="text-lg font-semibold">Transactions</h3>
              <ul className="list-disc list-inside">
                <li>Cash Book Payment</li>
                <li>Bank Book Payment</li>
                <li>Journal Voucher</li>
              </ul>
            </div>

            {/* Reports */}
            <div>
              <h3 className="text-lg font-semibold">Reports</h3>
              <ul className="list-disc list-inside">
                <li>Profit & Loss</li>
                <li>Balance Sheet</li>
                <li>Trial Balance</li>
                <li>Cash Flow Statement</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">The Benefits of Accounting and Finance Software</h2>
          <p className="mb-4">
            text-justify     Accounting software offers advanced features to simplify financial processes and improve business efficiency.
            Some benefits include:
          </p>
          <ul className="list-disc list-inside">
            <li>Automates Accounting Entries</li>
            <li>Reduces Manual Errors</li>
            <li>Provides Real-Time Data Insights</li>
            <li>Facilitates Better Decision Making</li>
          </ul>
        </section>

        {/* General Ledger Section */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">General Ledger of Accounts and Finance Management System</h2>
          <p className="mb-4">
            text-justify     The general ledger records all financial transactions, including assets, liabilities, income, and expenses.
          </p>
          <ul className="list-disc list-inside">
            <li><strong>Closing Balance Reports:</strong> Used to verify the accounts and balance adjustments.</li>
            <li><strong>Profit and Loss Reports:</strong> Summarizes revenue, expenses, and net profit.</li>
            <li><strong>Trial Balance:</strong> Ensures all credits and debits are balanced.</li>
            <li><strong>Cash Flow Statements:</strong> Tracks cash inflow and outflow for better financial management.</li>
          </ul>
        </section>
      </div>
      <Footer />{" "}
    </>
  );
}

export default Page;
