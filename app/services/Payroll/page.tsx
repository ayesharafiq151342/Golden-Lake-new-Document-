import Footer from '@/app/components/footer'
import Navbar from '@/app/components/navbar'
import React from 'react'

function page() {
  return (
    <div>
      
  <Navbar/>
  <div
  className="relative mt-20 mx-auto h-96 flex flex-col items-center justify-center bg-cover bg-center text-center lg:min-h-screen md:h-screen px-4 sm:px-6"
  style={{ backgroundImage: "url('/payrol-bg-1.jpg')" }}
>
  {/* White Overlay */}
  <div className="absolute inset-0 bg-black  lg:bg-transparent bg-opacity-30"></div>

  {/* Content */}
  <div className="relative w-full max-w-7xl md:p-8 rounded-lg flex flex-col md:flex-row gap-8 p-6">
    {/* LEFT SIDE - ERP Details */}
    <div className="flex-1 text-center md:text-start">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
      HR AND PAYROLL
      MANAGEMENT SYSTEM
        <hr className="w-full border-white border-2 my-4" />
      </h1>
      <p className="text-sm sm:text-base md:text-lg text-white">
        Optimize construction and project workflows with our comprehensive ERP system,
        enhancing efficiency and collaboration for unparalleled success.
      </p>
     
    </div>

    {/* RIGHT SIDE - Request for Demo Form (Placeholder) */}
    <div className="flex-1 hidden md:block"></div>
  </div>
</div>
<section className="flex flex-col md:flex-row items-center  rounded-lg shadow-md p-6 lg:w-9/12 lg:m-auto">
        {/* Left Side Image */}
        <div className="md:w-1/2 flex justify-center mb-6 md:mb-0 ">
          <img
            src="/payrol-image.webp"
            alt="Ngo-image-acocount"
            className="w-96  rounded-lg"
          />
        </div>

        {/* Right Side Text */}
        <div className="md:w-1/2 text-left ml-5">
        <h2 className="text-3xl font-bold text-purple-800 mb-4">
        Revolutionize HR & Payroll Processing with Multiapp Payroll Automation
          </h2>
          <p className="text-gray-600">
          For NGOs to preserve financial integrity and guarantee that donor funds are used properly, a robust accounting system is necessary. NGOs can track spending, manage their money, and create financial reports with the help of Golden-lake’s Accounts and Financial Module. Advantages include:
          </p>
                 <ul className="list-disc ml-2 list-inside text-gray-700 mt-3" >
        <li>
        Monitor revenue and expenditures
        </li>
        <li>
        Streamline financial reporting and audits
        </li>
        <li>
        Guarantee adherence to donor and regulatory mandates
        </li>
        <li>
        Establish financial transparency for stakeholders and donors
        </li>
       </ul>
        </div>
      </section>
      <div className="bg-gray-100  min-h-screen  p-6">
      {/* Header Section */}
      <div className="mx-auto bg-white p-6 lg:mt-44 lg:w-9/12  rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold text-gray-800">Employee Self-Service Portal: Updated Features</h1>
        <p className="text-gray-600 mt-2">
          A fully interactive and enhanced employee management portal designed to streamline self-service functionalities.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3   gap-6 mt-6 lg:w-9/12 mx-auto">
        {/* Left Column (Feature Details) */}
      
        <div className="md:col-span-2 bg-white p-6 rounded-2xl  shadow-md lg:h-[75%] h-screen">
        <h1 className='text-5xl'>Employee Self-Service Portal</h1>
          <h2 className="text-lg font-semibold mt-10 text-gray-700">Employee Self-Service Portal: Updated Features</h2>
          <p className="text-gray-600 text-sm mt-1">
          As businesses strive for enhanced employee engagement and streamlined processes, the updated features in the employee self-service portal play a pivotal role. These features empower employees and contribute to a more efficient HR and payroll management process.
          </p>
          
          <h2 className="mt-4 text-lg font-semibold text-gray-700">Streamlined Personal Information Management</h2>
          <p className="text-gray-600 text-sm mt-1">
          One of the key features allows employees to effortlessly view and update their details, including contact information and emergency contacts. This functionality ensures the accuracy of employee records and facilitates better communication within the organization.       </p>
          <h2 className="mt-4 text-lg font-semibold text-gray-700 ">Enhanced Payroll Accessibility:</h2>
          <p className="text-gray-600 text-sm mt-1 ">
          The payroll experience is elevated for employees through seamless access to pay stubs and current and past pay periods and the convenience of downloading W-2 forms. This heightened accessibility fosters transparency, enabling employees to effortlessly stay informed about their financial information. </p>
     
         </div>

        {/* Right Column (Profile & Actions) */}
        <div className="bg-gray-100 min-h-screen -auto  flex justify-center" >
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md lg:h-[75%] h-screen">
        {/* Profile Section */}
        <div className="flex items-center gap-4">
          <img
            src="/payrol-boy.jpg"
            alt="Profile"
            className="rounded-full border-2 w-20 h-16 border-gray-300"
          />
          <div>
            <h3 className="text-lg font-bold">Mr. Kashif</h3>
            <p className="text-sm text-gray-600">+92390061612</p>
            <p className="text-xs text-gray-500"> Faisalabad</p>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="mt-4 flex gap-2">
          <button className="bg-orange-500 text-white px-3 py-1 rounded-lg text-sm">Expense Claim</button>
          <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg text-sm">Attendance</button>
          <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg text-sm">Salary</button>
        </div>
        
        {/* Expense Summary */}
        <div className="mt-4 bg-orange-100 p-4 rounded-lg">
          <h4 className="text-orange-700 font-semibold">Expense Claim Approved:</h4>
          <p className="text-sm text-gray-600">Pending For Approval <span className="font-bold text-black">5600</span></p>
        </div>
        
        {/* Expense List */}
        <div className="mt-4">
          <div className="flex justify-between items-center bg-red-500 text-white p-2 rounded-lg">
            <span>Expense Claim List</span>
            <button className="bg-white text-red-500 px-2 py-1 rounded text-xs">Add Expense</button>
          </div>
          
          {/* Expense Items */}
          <div className="mt-3 bg-white p-3 rounded-lg shadow">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-semibold">Mr. Muddassar</p>
                <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">EXPENSE PAID</span>
                <p className="text-sm text-gray-700">Freight Expense</p>
                <p className="text-sm font-bold">3000</p>
              </div>
              <span className="text-xs text-gray-500">3 months ago</span>
            </div>
          </div>
          
          <div className="mt-3 bg-white p-3 rounded-lg shadow">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-semibold">Mr. Muddassar</p>
                <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">EXPENSE PAID</span>
                <p className="text-sm text-gray-700">Freight Expense</p>
                <p className="text-sm font-bold">600</p>
              </div>
              <span className="text-xs text-gray-500">3 months ago</span>
            </div>
          </div>
          
          <div className="mt-3 bg-white p-3 rounded-lg shadow">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-semibold">Mr. Muddassar</p>
                <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded">PENDING APPROVAL</span>
                <p className="text-sm text-gray-700">Freight Expense</p>
                <p className="text-sm font-bold">600</p>
              </div>
              <span className="text-xs text-gray-500">2 weeks ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div></div>
      <img
            src="/h.webp"
            alt="Profile"
             className='m-auto'
            
          />
  <Footer/>
    </div>
  )
}

export default page
