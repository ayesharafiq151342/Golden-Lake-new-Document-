import Footer from '@/app/components/footer'
import Navbar from '@/app/components/navbar'
import React from 'react'
import Button from "@/app/ui/style";
import Link from "next/link";
function page() {
  return (
    <div>
     <Navbar/>
     <section className="flex flex-col-reverse h-screen md:flex-row items-center bg-white p-6 rounded-lg shadow-md">
        {/* Left Side Text */}
        <div className="md:w-1/2  ml-32">
          <h3 className="text-5xl font-bold text-purple-800 mb-4">
          Manufacturing ERP System
          </h3>
          <p>Transform Your Manufacturing Operations, Streamline Processes,
    <br/>      Boost Productivity and Optimize Resources</p>

<Link href="#demo">
            <Button label="Learn More" variant="primary" />
          </Link>

        </div>

        {/* Right Side Image */}
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img
            src="/download.png"
            alt="Golden-Lake ERP"
            className="w-3/4"
          />
        </div>
      </section>
     <Footer/>
    </div>
  )
}

export default page
