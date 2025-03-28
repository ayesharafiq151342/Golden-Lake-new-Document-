"use client";

import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import { useState } from "react";
import DemoFormModal from "@/app/components/DemoFormModal";
import Button from "@/app/ui/style";
import ParalexCash from "./components/page";
function Page() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Navbar />
      {/* Content */}
      <div
        className="relative mt-20 mx-auto flex flex-col items-center justify-center bg-cover bg-center text-center lg:min-h-screen md:h-screen px-4 sm:px-6"
        style={{
          backgroundImage: "url('/cash-management-system.webp')",
        }}
      >
        {/* White Overlay */}
        <div className=" bg-white  lg:bg-transparent bg-opacity-80"></div>

        {/* Content */}
        <div className="relative w-full max-w-7xl md:p-8 rounded-lg flex flex-col md:flex-row gap-8 p-6">
          {/* LEFT SIDE - ERP Details */}
          <div className="flex-1 text-center md:text-start">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              Accounts and Finance Management System
              <hr className="w-full border-white border-2 my-4" />
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white"></p>
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
      {/* Header Image */}
      <div className="lg:w-9/12 m-auto mt-10 ">
        {/* Features Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            Features of Cash Management System
          </h2>
          <p className="text-gray-700 mb-4">
          Cash management refers to a broad area of finance involving cash collection, handling, and usage. Further, Cash management systems and services for managing liquidity, account balances, payments, and other cash management functions. You can monitor, predict, and manage cash using customizable reports. Moreover, All of this happens in real-time to support the most accurate decision-making.systems help
            businesses optimize liquidity and financial performance.
          </p>
          <div className="grid grid-cols-3 gap-4 text-gray-700">
            <div>
              <h3 className="font-semibold">Setup:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li> Bank Definition</li>
                <li>Cheque Book Collection</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Transactions</h3>
              <ul className="list-disc list-inside space-y-2">

                <li>Bank Transfer</li>
                <li>Collection and Routs</li>

                <li>Bank Reconciliation</li>
                <li>Online Slip Transfer</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Reports</h3>
              <ul className="list-disc list-inside space-y-2">

                <li>Bank Inflow Outflow Summary
                </li>
                <li>Bank Inflow Outflow</li>

                <li> Cash Inflow Outflow</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      {/* Streamline Section */}
      <div className="lg:w-9/12 m-auto mt-10 mb-10 text-gray-900">
        <h1 className="text-3xl font-bold mb-4">
          Banks Define Cash Management System
        </h1>

        <p className="mb-4 font-semibold">Golden Lake</p>
        <p className="mb-6">
          provides a cash and bank account opening form in which you add all the
          information about the banks. Furthermore, cash management services
          facilitate transaction administration. Moreover, it enables users to
          open a bank account in the software. Also, it allows consumers to
          connect digitally.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Checkbook Define</h2>
        <p className="mb-6">
          A chequebook is intended and designed to make writing checks easier
          for businesses. Further, you can open a chequebook in the software and
          fill out a form in the software for your specific function. Moreover,
          it keeps track of every tab of a cheque issued by the Bank. Also, its
          made to make chequebooks for many banks by creating a demand for a
          particular bank cheque.
        </p>

        <h2 className="text-2xl font-semibold mb-2">
          Cash in Outflow Statement
        </h2>
        <p className="mb-6">
          Cash-in and cash-out details are presented as a statement in cash flow
          management. Further, by indicating how the money went in and out of
          the firm, the idea of cash flows provides the connection between the
          financial reports.
        </p>

        <h2 className="text-2xl font-semibold mb-2">
          Bank in Outflow Statement
        </h2>
        <p className="mb-6">
          On the other hand, banks are not required to prepare a cash flow
          statement as part of an individual liquidation of accounts under this
          statement. Despite this, some banks provide a cash flow statement in
          their yearly reports and separate termination of funds by using{" "}
          <span className="text-blue-600 font-semibold">
            Cash Management Services
          </span>
          .
        </p>

        <h2 className="text-2xl font-semibold mb-2">Cash in Outflow Summary</h2>
        <p className="mb-6">
          All cash flow statements are included in the cash inflow and outflow
          summary. Further, it shows the cash flow report and details of the
          companys cash inflows and outflows over a specified period. Moreover,
          it reveals if the income statements revenues have been fully received.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Bank in Outflow Summary</h2>
        <p className="mb-6">
          All banks in- and outflow details are included in the summary section.
          So that the data can be analyzed and evaluated anytime. Furthermore,
          as a business grows, there is a need to maintain increasing volumes of
          data on financial transactions easily. Moreover,{" "}
          <span className="text-blue-600 font-semibold">cash planning</span>{" "}
          services are used in banks.
        </p>

   
      </div>
      <div className="flex lg:w-9/12 m-auto  flex-col md:flex-row  gap-6">
  {/* Text Section */}
  <div className="md:w-1/2">
    <h2 className="text-2xl font-semibold mb-2">Cash Flow Statement</h2>
    <p className="mb-4">
      The cash flow statement controls the inflow and outflow of cash inside an
      organization. Moreover, companies use cash flow to keep their cash flow
      positive and estimate future cash flow. Further, it is based on investing,
      financial, and operating activities.
    </p>

    <ul className="list-disc list-inside space-y-2 mb-6">
      <li>
        <span className="font-semibold">Operating Activity:</span> An
        organization’s primary revenue-generating operations and other operations
        that are not investing or financing.
      </li>
      <li>
        <span className="font-semibold">Financing Activity:</span> Any cash flows
        resulting from changes in the amount and mix of the entity’s allocated
        equity capital or bank debt.
      </li>
      <li>
        <span className="font-semibold">Investing Activity:</span> Any cash flows
        not used in cash and equivalents from the buying and selling of lengthy
        items.
      </li>
    </ul>
  </div>

  {/* Image Section */}
  <div className="md:w-1/2 flex justify-center">
    <img
      src="/cash-management-system-and-method-1536x1536.webp" // Replace with your actual image path
      alt="Cash Flow Statement"
      className="w-full max-w-sm rounded-lg shadow-md mb-20"
    />
  </div>
</div>

      <ParalexCash />{" "}
      <div className="lg:w-9/12 m-auto mt-10 ">
        {/* Definition Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            Banks Define Cash Management System
          </h2>
          <p className="text-gray-700 mb-4">
            Golden Lake provides a cash and bank account opening form in which
            you add all the information about the banks. Furthermore, cash
            management services facilitate transaction administration. Moreover,
            it enables users to open a bank account in the software. Also, it
            allows consumers to connect digitally.
          </p>
        </section>

        {/* Benefits Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Benefits:</h2>
          <ul className="text-gray-700 list-disc pl-5">
            <li>Tracking your cash</li>
            <li>Reducing expenses</li>
            <li>Boosting profitability</li>
            <li>Improving liquidity</li>
            <li>Enhancing financial management</li>
            <li>Minimizing risks and inefficiencies</li>
          </ul>
          <p className="text-gray-700 mt-4">
          Multi-Techno can help you design, implement, and maintain a robust cash management system.
<br/>Our ERP system for cash management:
<br/>Cash Management Solutions
<br/>Cash Management Services
<br/>Cash Management System</p>
        </section>
      </div>
      <Footer />{" "}
    </>
  );
}

export default Page;
