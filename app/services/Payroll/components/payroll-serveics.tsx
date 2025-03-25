"use client"
import React from "react";
import { motion } from "framer-motion";

function PayrollServices() {
  return (
    <div className="  ">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-auto bg-white p-6 lg:mt-44 mt-2 lg:w-9/12 rounded-2xl shadow-md text-center"
      >
        <h1 className="text-2xl font-bold text-gray-800">
          Employee Self-Service Portal: Updated Features
        </h1>
        <p className="text-gray-600 mt-2">
          A fully interactive and enhanced employee management portal designed to streamline self-service functionalities.
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 lg:w-9/12 mx-auto">
        {/* Left Column (Feature Details) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-2 bg-white p-6 rounded-2xl shadow-md"
        >
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-800">
            Employee Self-Service Portal
          </h1>

          {/* Feature Sections */}
          {[
            {
              title: "Streamlined Personal Information Management",
              text: "Employees can effortlessly view and update their details, including contact information and emergency contacts.",
            },
            {
              title: "Enhanced Payroll Accessibility",
              text: "Employees can submit leave requests, check leave balances, and conveniently view their time-off schedules.",
            },
            {
              title: "Efficient Leave and Time Off Management",
              text: "Updated features empower employees and contribute to a more efficient HR and payroll management process.",
            },
            {
              title: "Comprehensive Benefits Enrollment and Management",
              text: "Employees can review current benefits and easily enroll in new benefits during open enrollment periods.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
              className="mt-8"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-gray-700">{feature.title}</h2>
              <p className="text-gray-600 text-sm mt-1">{feature.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Column (Profile & Actions) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-gray-100 flex justify-center"
        >
          <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
            {/* Profile Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-4"
            >
              <img src="/payrol-boy.jpg" alt="Profile" className="rounded-full border-2 w-20 h-16 border-gray-300" />
              <div>
                <h3 className="text-lg font-bold">Mr. Kashif</h3>
                <p className="text-sm text-gray-600">+92390061612</p>
                <p className="text-xs text-gray-500">Faisalabad</p>
              </div>
            </motion.div>

            {/* Tabs */}
            <div className="mt-4 flex gap-2">
              {["Expense Claim", "Attendance", "Salary"].map((tab, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.2 }}
                  className={`px-3 py-1 rounded-lg text-sm ${
                    tab === "Expense Claim" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {tab}
                </motion.button>
              ))}
            </div>

            {/* Expense Summary */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="mt-4 bg-orange-100 p-4 rounded-lg"
            >
              <h4 className="text-orange-700 font-semibold">Expense Claim Approved:</h4>
              <p className="text-sm text-gray-600">
                Pending For Approval <span className="font-bold text-black">5600</span>
              </p>
            </motion.div>

            {/* Expense List */}
            <div className="mt-4">
              <div className="flex justify-between items-center bg-red-500 text-white p-2 rounded-lg">
                <span>Expense Claim List</span>
                <button className="bg-white text-red-500 px-2 py-1 rounded text-xs">Add Expense</button>
              </div>

              {/* Expense Items */}
              {[
                { name: "Mr. Muddassar", status: "EXPENSE PAID", type: "Freight Expense", amount: "3000", time: "3 months ago" },
                { name: "Mr. Muddassar", status: "EXPENSE PAID", type: "Freight Expense", amount: "600", time: "3 months ago" },
                { name: "Mr. Muddassar", status: "PENDING APPROVAL", type: "Freight Expense", amount: "600", time: "2 weeks ago" },
              ].map((expense, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 + index * 0.2 }}
                  className="mt-3 bg-white p-3 rounded-lg shadow"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-semibold">{expense.name}</p>
                      <span className={`text-xs px-2 py-1 rounded ${expense.status === "EXPENSE PAID" ? "bg-blue-500 text-white" : "bg-yellow-500 text-white"}`}>
                        {expense.status}
                      </span>
                      <p className="text-sm text-gray-700">{expense.type}</p>
                      <p className="text-sm font-bold">{expense.amount}</p>
                    </div>
                    <span className="text-xs text-gray-500">{expense.time}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default PayrollServices;
