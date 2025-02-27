import React from 'react'

function Payroll_services() {
  return (
    <>  <div className="bg-gray-100      p-6">
    {/* Header Section */}
    <div className="mx-auto bg-white p-6 lg:mt-44 mt-32  lg:w-9/12   rounded-2xl shadow-md">
      <h1 className="text-2xl font-bold text-gray-800">Employee Self-Service Portal: Updated Features</h1>
      <p className="text-gray-600 mt-2">
        A fully interactive and enhanced employee management portal designed to streamline self-service functionalities.
      </p>
    </div>

    {/* Main Content */}
    <div className="grid grid-cols-1 md:grid-cols-3   gap-6 mt-6 lg:w-9/12 mx-auto">
      {/* Left Column (Feature Details) */}
    
      <div className="md:col-span-2 bg-white p-6 rounded-2xl  shadow-md lg:h-[75%] h-[100%]">
      <h1 className='text-3xl lg:text-5xl '>Employee Self-Service Portal</h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl font-semibold mt-10 text-gray-700">Employee Self-Service Portal: Updated Features</h2>
        <p className="text-gray-600 text-sm mt-1">
        As businesses strive for enhanced employee engagement and streamlined processes, the updated features in the employee self-service portal play a pivotal role. These features empower employees and contribute to a more efficient HR and payroll management process.
        </p>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl font-semibold mt-10 text-gray-700">Streamlined Personal Information Management:</h2>
        <p className="text-gray-600 text-sm mt-1">
        One of the key features allows employees to effortlessly view and update their details, including contact information and emergency contacts. This functionality ensures the accuracy of employee records and facilitates better communication within the organization.
        </p> <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl font-semibold mt-10 text-gray-700">Enhanced Payroll Accessibility:</h2>
        <p className="text-gray-600 text-sm mt-1">
        Simplifying the leave process is another critical aspect of the employee self-service portal. Employees can submit leave requests, check leave balances, and conveniently view their time-off schedules. This streamlines HR processes and enhances employee satisfaction by providing a user-friendly platform for managing time off.   </p>
         <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl font-semibold mt-10 text-gray-700">Efficient Leave and Time Off Management:</h2>
        <p className="text-gray-600 text-sm mt-1">
        As businesses strive for enhanced employee engagement and streamlined processes, the updated features in the employee self-service portal play a pivotal role. These features empower employees and contribute to a more efficient HR and payroll management process.
        </p>
        <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl lg:text-2xl font-semibold text-gray-700">Comprehensive Benefits Enrollment and Management:</h2>
        <p className="text-gray-600 text-sm mt-1">
        A holistic benefits experience allows employees to review current benefits and participate in easy enrollment for new benefits during open enrollment periods. This feature ensures that employees have access to vital information about their benefits, promoting better understanding and utilization.
        </p>

   
       </div>

      {/* Right Column (Profile & Actions) */}
      <div className="bg-gray-100 min-h-screen -auto  flex justify-center" >
    <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md lg:h-[75%] h-[75%]">
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
    </div></div></>
  )
}

export default Payroll_services
