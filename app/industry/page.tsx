import React from 'react'
import Navbar from '../components/navbar'
import Services_Industries from './components/Services_Industries'
import Footer from '../components/footer'
function page() {
  return (
   <>
   <Navbar/>
 
  {/* Content */}
  <div
  className="relative mt-20 mx-auto flex flex-col items-center justify-center bg-cover bg-center text-center lg:min-h-screen md:h-screen px-4 sm:px-6"
  style={{ backgroundImage: "url('/industry-bgimage.webp')" }}
>
  {/* White Overlay */}
  <div className=" bg-white  lg:bg-transparent bg-opacity-80"></div>

  {/* Content */}
  <div className="relative w-full max-w-7xl md:p-8 rounded-lg flex flex-col md:flex-row gap-8 p-6">
    {/* LEFT SIDE - ERP Details */}
    <div className="flex-1 text-center md:text-start">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
      Industries
        <hr className="w-full border-white border-2 my-4" />
      </h1>
      <p className="text-sm sm:text-base md:text-lg text-white">
      ERP systems can be customized to meet the unique needs
      and challenges of different industries
      </p>
      {/* Contact Button */}
      <a href="#demo" 
        className="bg-purple-500 text-white px-6 py-2 rounded-lg mt-4 inline-block w-54 sm:w-auto"
      >
        Get Free Demo
      </a>
    </div>

    {/* RIGHT SIDE - Request for Demo Form (Placeholder) */}
    <div className="flex-1 hidden md:block"></div>
  </div>
</div>

  
<Services_Industries/>
<Footer/>
   </>
  )
}

export default page
