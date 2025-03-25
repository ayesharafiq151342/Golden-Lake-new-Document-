"use client";

import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import React from "react";
import Link from "next/link";
function page() {
  return (
    <>
      <Navbar />
      {/* Content */}
      <div
        className="relative mt-20 mx-auto flex flex-col items-center justify-center bg-cover bg-center text-center lg:min-h-screen md:h-screen px-4 sm:px-6"
        style={{
          backgroundImage:
            "url('/idustry-blue-chemical-reaction-with-smoke-in-a-flask-concept-of-science-chemistry-experiment-and-laboratory-photo.jpg')",
        }}
      >
        {/* White Overlay */}
        <div className=" bg-white  lg:bg-transparent bg-opacity-80"></div>

        {/* Content */}
        <div className="relative w-full max-w-7xl md:p-8 rounded-lg flex flex-col md:flex-row gap-8 p-6">
          {/* LEFT SIDE - ERP Details */}
          <div className="flex-1 text-center md:text-start">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              Chemical Industry
              <hr className="w-full border-white border-2 my-4" />
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white">
              Leverage your process with unimaginable benefits by automating all
              your processes.
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
      <section className=":w-9/12 m-auto mt-10 lg:w-9/12 2-full p-7">
        {/*ERP Software for Chemical Manufacturers
         */}
        <section>
            {/* ERP Software for Chemical Manufacturers */}
          <div className="">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-xl xl:text-xl font-bold text-start  mb-5  text-gray-800">
              ERP Software for Chemical Manufacturers
            </h1>
            <p className="text-justify">
              These days, the challenge is deciding which technology is best for
              your business. On the one hand, we want to take responsibility for
              the company’s growth and innovation. However, I don’t try to pull
              the trigger on a failed project.
            </p>
            <p className="text-justify">
              So, is ERP software worth the risk for chemical manufacturers? To
              find out, it’s important to weigh the benefits of ERP software..
            </p>
          </div>
          <div className="mt-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-xl xl:text-xl font-bold text-start  mb-5  text-gray-800">
              Overview
            </h1>
            <p className="text-justify">
              At its most basic, ERP software is an application or tool that
              helps consolidate a company’s information databases, automate
              routine tasks, and streamline critical tasks.
            </p>
            <h1 className="text-lg sm:text-lg md:text-4xl lg:text-lg xl:text-lg mt-4  text-start  mb-5  text-gray-800">
              This is an end-to-end solution and includes features such as:
            </h1>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Human Resource</li>
              <li>
                <Link
                  href="/accounting-finance"
                  className="text-blue-600 hover:underline"
                >
                  Accounting and Finance
                </Link>
              </li>
              <li>
                <Link href="/crm" className="text-blue-600 hover:underline">
                  Customer Relationship Management
                </Link>
              </li>
              <li>
                <Link
                  href="/inventory-management"
                  className="text-blue-600 hover:underline"
                >
                  Inventory Management
                </Link>
              </li>
              <li>
                <Link href="/" className="text-blue-600 hover:underline">
                  Manufacturing
                </Link>
              </li>
              <li>Analytics</li>
              <li>Reporting</li>
            </ul>
          </div>
          <div className="mt-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-xl xl:text-xl font-bold text-start  mb-5  text-gray-800">
              What role does ERP software play for chemical manufacturers?
            </h1>
            <p className="text-justify">
              For some companies, complexity is a key point. However, in the
              chemical manufacturing industry, it is usually challenging to
              handle. Lack of streamlined processes and slow data manipulation
              can lead to inefficiencies. This is where his ERP software for
              chemical companies comes in, helping the industry accordingly.
            </p>
          </div>
        </section>
      </section>
      {/* ERP Principles of Solar Power and Energy Management Systems */}
      <section className="bg-gray-200 mt-10 py-16">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Features of ERP software in the Chemical Industry
          </h1>
        </div>

        {/* Two-column section */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Secure Documentation:
            </h2>
            <p className="text-gray-600">
              ERP software Golden Lake can integrate all your existing systems
              into one. In return, efficiency is increased, and top quality is
              maintained everywhere. The software gives you the flexibility and
              power to manage the process from production to distribution. In
              addition, all relevant documents, including master batch records,
              chemical composition, hygiene, and quality control reports, are
              stored in the system. As a result, the use of paper documents is
              reduced, and the human resources required to do so are reduced.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Workflows and Processes:
            </h2>
            <p className="text-gray-600">
              Quality control is an important part of the chemical industry.
              Moreover, it is also the basis for the production of chemicals.
              However, human error cannot be ruled out. Golden Lake ERP
              software manages workflow processes and puts master batch records
              in place that fit perfectly into all business processes. It also
              minimizes errors, improves chemical quality, and benefits your
              business.
            </p>
          </div>
        </div>

        {/* Additional Two-column section */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Chemical Formulations:
            </h2>
            <p className="text-gray-600">
              The chemical industry requires a master batch protocol. Moreover,
              it is ideal for ensuring full traceability and accuracy from one
              product batch to another. It includes all the details of the
              ingredients and mentions every step of the process.{" "}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Planning Decisions:
            </h2>
            <p className="text-gray-600">
              Golden Lake ERP software gives you all the information you need
              to make well-informed decisions. For example, when a production
              manager closely monitors the availability of materials for
              production based on demand, it helps simplify the process of
              supply chain and inventory management.
            </p>
          </div>
        </div>
      </section>
      {/* Benefits of ERP software for chemical manufacturers: */}
      <section className=" md:w-9/12 m-auto mt-10 lg:w-9/12 2-full p-7">
        <section>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li className="font-bold">Recipe Management:</li>
            <p className="text-justify">
              Recipe management is the driving force behind product purchases
              within an enterprise. With integrated ERP software, chemical
              companies can easily track raw material counts. Basic materials
              can be ordered continuously so that production needs can be met.
            </p>
            <li className="font-bold">Inventory Management:</li>
            <p className="text-justify">
              In the chemical manufacturing industry, inventory management is a
              perfect feature when using data elements. Integrated ERP software
              contains the shipping and warehouse information needed for
              location management.
            </p>
            <li className="font-bold">Innovative Products:</li>
            <p className="text-justify">
              A company consists of multiple departments, such as sales,
              marketing, manufacturing, and research and development. They all
              receive and share data. An efficient ERP solution allows chemical
              manufacturing companies to manage their product lifestyles. In
              return, it also anticipates future requirements.
            </p>
            <li className="font-bold">Improved collaboration:</li>
            <p className="text-justify">
              When all departments within an organization include and have
              access to ERP software, the entire organization benefits. This
              results in better collaboration, stronger relationships with
              customers and suppliers, increased purchases, shorter procurement
              processes, and lower prices.
            </p>
            <li className="font-bold">Production Planning:</li>
            <p className="text-justify">
              ERP solutions offer chemical manufacturers the opportunity to
              increase flexibility. Revised or new manufacturing schedules can
              be easily shared across the supply chain network. It then helps to
              manage the manufacturing process based on correct marketing and
              sales activities. If you are looking for integrated ERP software
              for chemical manufacturers, contact the experts at Golden Lake
              ERP.
            </p>
          </ul>
        </section>
      </section>
      <Footer />{" "}
    </>
  );
}

export default page;
