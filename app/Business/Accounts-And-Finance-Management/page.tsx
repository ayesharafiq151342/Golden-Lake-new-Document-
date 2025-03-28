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
            "url('/account-image-bg.jpg')",
        }}
      >
        {/* White Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>


        {/* Content */}
        <div className="relative w-full max-w-7xl md:p-8 rounded-lg flex flex-col md:flex-row gap-8 p-6">
          {/* LEFT SIDE - ERP Details */}
          <div className="flex-1 text-center md:text-start">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Accounts and Finance Management System
              <hr className="w-full border-white border-2 my-4" />
            </h1>
            <p  className="text-sm sm:te text-justify xt-base md:text-lg text-white">
           
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
        Mastering Small Business Finances with Golden Lake ERPs Accounts and Finance Management System
        </h1>
        <p  className="text-gray-700 text-justify  mb-6">
        The Accounts and Finance Management System of Golden Lake ERP system is the best generally for accounting software for small companies. So, a lot of small company accounting experts utilize Erp implementation. Butt there are also a variety of online training materials and forums where you may receive help if you need it      </p>

        <h2 className="text-2xl font-semibold mb-3">Streamlining Operations</h2>
        <p  className="text-gray-700 text-justify  mb-6">
          Steelmakers can significantly benefit from the implementation of ERP
          solutions. These systems streamline business operations, maximize
          productivity, implement planning strategies, reduce resource wastage,
          and yield better ROI.
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
      
      {/* Features Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">The Features of Accounting and Finance Software</h2>
        <p  className="mb-4">
       text-justify     A good financial system offers all the necessary accounting transactions, tracking of company accounts, cashbooks, recording invoices,
          management, and automated reports.
        </p>
        <p  className="mb-4">Some of text-justify  its key features include:</p>
        
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
        <p  className="mb-4">
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
        <p  className="mb-4">
       text-justify     The general ledger records all financial transactions, including assets, liabilities, income, and expenses.
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Closing Balance Reports:</strong> A closing balance is an amount, positive or negative, that remains in an account. At this time, the maximum of business accountants will present management with a closing balance. This is normally in the form of a management accounts package. That includes the month’s credit as well as the total amount. Moreover, You can manage your closing reports with the business software of Multi-Techno Integrated software solutions.</li>
          <li><strong>Period Define</strong> For the most part, Any time frame used for financial reporting is referred to as an accounting period. Furthermore, Activities that occur within a specified date range are included in the accounting period’s reports in Erp software.</li>
          <li><strong>Vouchers</strong>Once the provider receives the Money, moreover, The vouchers are verified as paid. Further Payments are made and recorded in the proper ledger accounts. Also, Accounting software allows businesses to manage their financial operations better.</li>
          <li><strong>Financial Statements</strong> Financial statements are documents that detail the financial and operating performance of a business. Moreover, Accounting accounts are often audited by government agencies, auditors, firms, and others. For tax, finance, and new investments, as well as to ensure accuracy.</li>
          <li><strong>Profit and Loss Report</strong> Multi-techno Erp fulfillment maintains profit and loss reports for your business. All accounting functions are managed from a single screen, making accounting more trustworthy and simple.</li>
          <li><strong>Trial Balance
          </strong> The trial balance is a financial or accounting report that shows the current amounts in all accounts in the general ledger. Multi-techno offers the best software for accounting professionals who need to handle data from clients to complete tax returns or financial statements because you’ll achieve tasks in less time. And with higher competence than you could with any other software. Due to a low learning curve and smooth data entry methods.

</li>
        </ul>
      </section>
    </div>
      <Footer />{" "}
    </>
  );
}

export default Page;
