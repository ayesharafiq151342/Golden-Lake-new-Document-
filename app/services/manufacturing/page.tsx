import Footer from '@/app/components/footer';
import Navbar from '@/app/components/navbar';
import React from 'react';
import Button from "@/app/ui/style";
import Link from "next/link";
import ManufacturingERP from './mani_modules';

function Page() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="flex h-screen flex-col-reverse md:flex-row items-center bg-purple-900 text-white p-6 rounded-lg shadow-md">
        <div className=" mb-32  lg:mb-0 ml-10 text-center md:text-left lg:ml-72 lg:mt-32 text-start">
          <h3 className="text-4xl md:text-5xl font-bold mb-4">Manufacturing ERP System</h3>
          <p className="mb-4 text-start">Transform Your Manufacturing Operations, Streamline Processes, <br /> Boost Productivity and Optimize Resources</p>
          <Link href="#demo">
            <Button label="Learn More" variant="primary" />
          </Link>
        </div>

        <div className="flex justify-center  mb-20 md:mt-0 lg:mt-32">
          <img src="/download.png" alt="Golden-Lake ERP" className="w-3/4   " />
        </div>
      </section>

      {/* Golden Lake ERP Section */}
      <section className='w-full lg:w-9/12 m-auto p-4'>
        <h1 className='text-2xl font-bold mt-10 mb-4 text-center md:text-left'>ERP: Why Golden Lake for ERP in Manufacturing?</h1>
        <p className='text-justify'>Golden Lake, as SAP Platinum partner and Oracle Gold partner, has played a pivotal role in guiding numerous companies toward manufacturing excellence. Our expertise lies in harnessing advanced planning and optimization tools and seamlessly integrating these into intelligent ERP solutions like SAP or Oracle. We help organizations embrace IoT, AI, and RPA technologies.</p>
      </section>

      {/* SAP Insights Section */}
      <section className="w-full lg:w-9/12 m-auto p-4">
        <h3 className="text-2xl font-bold mb-4 text-center md:text-left">Leveraging SAP Manufacturing: Key Insights</h3>
        <ul className="space-y-4 text-gray-700">
          <li><span className="font-semibold text-purple-600">Understanding SAP Manufacturing:</span><br />SAP Manufacturing manages BOMs, routings, and production planning using MRP and PPDS, seamlessly integrating with material management, quality control, and plant maintenance.</li>
          <li><span className="font-semibold text-purple-600">The Power of SAP:</span><br />It supports process, discrete, and mixed-mode manufacturing, offering end-to-end solutions for production efficiency.</li>
          <li><span className="font-semibold text-purple-600">Real-Time Manufacturing:</span><br />With SAP MII, get real-time visibility and optimize processes using analytics and integration tools.</li>
        </ul>
      </section>

      {/* Industry 4.0 Section */}
      <section className="flex flex-col md:flex-row items-start p-4 lg:w-9/12 m-auto">
        <div className="md:w-1/2 text-left mt-6">
          <h3 className="text-2xl font-bold mb-4">Embracing Industry 4.0RP</h3>
          <p className='text-justify mb-4'>Industry 4.0, often termed the fourth industrial revolution, denotes a profound transformation in manufacturing, reshaping how products are conceived, refined, and disseminated. This revolution integrates emerging technologies, comprehensively reshaping shop floors and procedures. Enhancing Productivity through advanced technologies fundamentally alters the manufacturing landscape, fostering a more agile, intelligent, interconnected ecosystem. This shift yields heightened efficiency, reduced costs, and increased competitiveness. Industry 4.0 symbolizes the metamorphosis of traditional manufacturing into interconnected, intelligent systems, creating an efficient, responsive industrial environment poised for future challenges.</p>
        </div>
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img src="/mani-2.jpg" alt="Golden-Lake ERP" className="lg:w-9/12 h-auto rounded-lg" />
        </div>
      </section>

      {/* Process Bottlenecks Section */}
      <section className="w-full lg:w-9/12 m-auto first-letter: p-4">
        <h3 className="text-2xl font-bold mb-4 text-center md:text-left">How Industry 4.0 is Removing Process Bottlenecks?</h3>
        <p className='text-justify mb-4'>Industrys 4.0 transforms manufacturing by integrating cutting-edge technologies:</p>
        <ul className="space-y-4 text-gray-700">
          <li><span className="font-semibold text-purple-600">Internet of Things (IoT):</span><br />IoT connects devices, optimizing machine performance, safety, and agility.</li>
          <li><span className="font-semibold text-purple-600">Digital Manufacturing Cloud (DMC):</span><br />A cloud-based ERP offering simplified machine integration and advanced analytics.</li>
          <li><span className="font-semibold text-purple-600">Real-Time Insights:</span><br />Enable predictive operations and optimized efficiency with real-time data.</li>
        </ul>
        <p className='text-justify mt-6'>Golden Lake provides tailored ERP solutions, helping you navigate complex supply chains, boost productivity, and embrace innovation for sustained growth.</p>
      </section>

      {/* Manufacturing ERP Module */}
      <ManufacturingERP />

      <Footer />
    </div>
  );
}

export default Page;
