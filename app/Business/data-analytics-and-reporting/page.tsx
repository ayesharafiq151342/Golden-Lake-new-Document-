"use client";

import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import React, { useState } from "react";
import { motion } from "framer-motion";
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
          backgroundImage: "url('/data-analytics-and-reporting.jpg')",
        }}
      >
        {/* White Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative w-full max-w-7xl md:p-8 rounded-lg flex flex-col md:flex-row gap-8 p-6">
          {/* LEFT SIDE - ERP Details */}
          <div className="flex-1 text-center md:text-start">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              Data Analytics and Reporting
              <hr className="w-full border-white border-2 my-4" />
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white">
              Optimize your business with Multi-Techno’s data analytics and
              reporting for smarter, data-driven decisions.
            </p>
            {/* Contact Button */}
            {/* Contact Button Linking to Form */}
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
      <section className=":w-9/12 m-auto mt-10 lg:w-9/12 2-full p-7">
        {/* What is an ERP system, and how can the solar business benefit from
              it? */}
        <section>
          <div className="mt-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-xl xl:text-xl font-bold text-start  mb-5  text-gray-800">
              What Are Data Analytics and Reporting?{" "}
            </h1>
            <p className="text-justify">
              The most successful companies in today’s data-driven environment
              have mastered data analytics. Modern data analytics and reporting
              tools are available at Multi-Techno, allowing businesses to make
              better, quicker, and more educated choices. Discover previously
              unknown insights, track performance in real time, and open doors
              to untapped growth prospects with the help of our tools.
            </p>
            <h1 className="text-2xl sm:text-3xl mt-4 md:text-4xl lg:text-xl xl:text-xl font-bold text-start  mb-5  text-gray-800">
              What Are Data Analytics and Reporting?{" "}
            </h1>

            <p className="text-justify">
              Data analytics analyzes, organizes, and interprets data to derive
              meaningful insights. It helps organizations display complicated
              data straightforwardly and compellingly when used with reporting
              tools.
              <br /> If you want to know how your company is doing, what trends
              are coming up, how to make things run more smoothly, how to boost
              efficiency, and how to make your customers’ experiences more
              memorable, then you need our data analytics and reporting
              solutions. <br /> No matter the size of your company, our keys are
              ready to provide you with the insights you require to excel in a
              highly competitive industry.{" "}
            </p>
          </div>
          <div className="grid mt-10 my-auto">
            <img src="/dashboard2.png" />
          </div>
          
        </section>
      </section>
      {/* ERP Principles of Solar Power and Energy Management Systems */}
      <section className="bg-gray-200 mt-10 py-16">
        {/* Section Title */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Features of Multi-Techno Data Analytics and Reporting
          </h1>
          <h1 className="text-sm sm:text-xl mt-4 font-bold text-gray-800">
          Our robust platform offers a range of features to meet your company needs:
          </h1>
        </motion.div>

        {/* Two-column section */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
          {[
            {
              title: "Customizable Dashboards",
              text: "Attain a real-time view of your influential metrics through personalized dashboards. Monitor performance instantly and access critical insights anytime, anywhere.",
            },
            {
              title: "Advanced-Data Visualization",
              text: "Create visually appealing data visualizations like charts, graphs, and heatmaps to simplify otherwise difficult-to-understand information.",
            },
            {
              title: "Predictive Analytics",
              text: "Forecast trends, consumer behaviors, and industry shift using sophisticated algorithms. Act decisively in light of reliable forecasts.",
            },
            {
              title: "Automated Reporting",
              text: "Efficiently generate reports without human intervention. Set up automatic notifications for when you need updates, which will land in your inbox or dashboard.",
            },
            {
                title: "Real-Time Monitoring",
                text: "Continuously monitor critical metrics to spot problems and opportunities as they arise. Adapt quickly to the ever-shifting demands of your business.",
              },
              {
                title: "Integration Capabilities",
                text: "Effortlessly integrate with your current systems to provide a consolidated view of company operations. This includes ERP platforms, CRM applications, and third-party databases."
              },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }} // Staggered animation
            >
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                {item.title}
              </h2>
              <p className="text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
        
      </section>
     
            <img src="/data-analytics-and-reporting-image2.jpg" 
           className="m-auto bg-red-700  mt-10 w-86   " />
        
          
      {/* Case Studies Demonstrating ERP Adoption in The Solar Business
              Successfully  */}
      <section className=" md:w-9/12 m-auto mt-10 lg:w-9/12 2-full p-7">
        <section>
          <div className="mt-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-xl xl:text-xl font-bold text-start  mb-5  text-gray-800">
            Why Does Your Business Need Data Analytics and Reporting?
            </h1>
            <p className="text-justify">
              Several solar enterprises have deployed ERP systems to improve
              operations and spurred expansion. Leading solar installation
              business Solar Tech is one such example. Solar Tech increased
              efficiency, accelerated project delivery, and improved customer
              satisfaction by centralizing its processes, improving project
              visibility, and reducing manual errors by implementing an ERP
              system.
            </p>
            <p className="text-justify">
              SunPower, a multinational supplier of solar energy solutions, is
              another case study. SunPower upgraded its inventory control,
              strengthened its financial power, and optimized its supply chain
              by implementing an ERP system. As a result, they were able to
              lower expenses, enhance cash flow, and obtain a market advantage.
            </p>
          </div>
          <div className="mt-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-xl xl:text-xl font-bold text-start  mb-5  text-gray-800">
              Implementing ERP for Solar Power and Energy Management Presents
              Some Challenges and Considerations
            </h1>
            <p className="text-justify">
              ERP systems have many advantages, but there are obstacles to their
              implementation in the solar sector. The integration of current
              systems and procedures is one of the primary challenges. Solar
              enterprises frequently have legacy systems; careful planning and
              execution are needed to integrate them with an ERP system.
            </p>
            <p className="text-justify">
              Employee acceptance and training with the ERP system are other
              factors to consider. Change management is essential to guarantee
              that staff members are aware of the advantages of the ERP system
              and can use its functions efficiently. Comprehensive training
              courses and continuous assistance are needed for this.{" "}
            </p>
          </div>
          <div className="mt-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-xl xl:text-xl font-bold text-start  mb-5  text-gray-800">
              How ERP Raises Profitability, Productivity, and Efficiency in The
              Solar Sector
            </h1>
            <p className="text-justify">
              Integrating ERP systems with energy management and solar power
              significantly impacts solar companies’ productivity,
              profitability, and efficiency power.
            </p>
            <p className="text-justify">
              ERP solutions allow solar enterprises to analyze data in real-time
              and make proactive decisions to maximize energy production. This
              entails locating solar panels that aren’t working well, spotting
              maintenance problems, and maximizing energy use.
            </p>
            <p className="text-justify">
              ERP systems also increase departmental collaboration and
              streamline corporate procedures. This leads to decreased human
              errors, more transparency, and expedited project completion. Solar
              enterprises can make the most of their resources and finish
              projects on schedule and under budget with improved project
              management.{" "}
            </p>
          </div>
          <div className="  mt-10">
            <img src="/dashboard2.png" />
          </div>
          <div className="mt-10">
            {/* <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-xl xl:text-xl font-bold text-start  mb-5  text-gray-800">
              Case Studies Demonstrating ERP Adoption in The Solar Business
              Successfully
            </h1>
            <p className="text-justify">
              Several solar enterprises have deployed ERP systems to improve
              operations and spurred expansion. Leading solar installation
              business Solar Tech is one such example. Solar Tech increased
              efficiency, accelerated project delivery, and improved customer
              satisfaction by centralizing its processes, improving project
              visibility, and reducing manual errors by implementing an ERP
              system.{" "}
            </p>
            <p className="text-justify">
              SunPower, a multinational supplier of solar energy solutions, is
              another case study. SunPower upgraded its inventory control,
              strengthened its financial power, and optimized its supply chain
              by implementing an ERP system. As a result, they were able to
              lower expenses, enhance cash flow, and obtain a market advantage.
            </p>
          </div>
          <div className="mt-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-xl xl:text-xl font-bold text-start  mb-5  text-gray-800">
              Implementing ERP for Solar Power and Energy Management Presents
              Some Challenges and Considerations
            </h1>
            <p className="text-justify">
              ERP systems have many advantages, but there are obstacles to their
              implementation in the solar sector. The integration of current
              systems and procedures is one of the primary challenges. Solar
              enterprises frequently have legacy systems; careful planning and
              execution are needed to integrate them with an ERP system.
            </p>
            <p className="text-justify">
              Employee acceptance and training with the ERP system are other
              factors to consider. Change management is essential to guarantee
              that staff members are aware of the advantages of the ERP system
              and can use its functions efficiently. Comprehensive training
              courses and continuous assistance are needed for this.
            </p>
          </div>
          <div className="mt-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-xl xl:text-xl font-bold text-start  mb-5  text-gray-800">
              How ERP Raises Profitability, Productivity, and Efficiency in The
              Solar Sector
            </h1>
            <p className="text-justify">
              Integrating ERP systems with energy management and solar power
              significantly impacts solar companies’ productivity,
              profitability, and efficiency power.
            </p>
            <p className="text-justify">
              ERP solutions allow solar enterprises to analyze data in real-time
              and make proactive decisions to maximize energy production. This
              entails locating solar panels that aren’t working well, spotting
              maintenance problems, and maximizing energy use.
            </p>
            <p className="text-justify">
              ERP systems also increase departmental collaboration and
              streamline corporate procedures. This leads to decreased human
              errors, more transparency, and expedited project completion. Solar
              enterprises can make the most of their resources and finish
              projects on schedule and under budget with improved project
              management.{" "}
            </p>
          </div>
          <div className="mt-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-xl xl:text-xl font-bold text-start  mb-5  text-gray-800">
              How ERP Raises Profitability, Productivity, and Efficiency in The
              Solar Sector
            </h1>
            <p className="text-justify">
              Integrating ERP systems with energy management and solar power
              significantly impacts solar companies’ productivity,
              profitability, and efficiency power.
            </p>
            <p className="text-justify">
              ERP solutions allow solar enterprises to analyze data in real-time
              and make proactive decisions to maximize energy production. This
              entails locating solar panels that aren’t working well, spotting
              maintenance problems, and maximizing energy use.
            </p>
            <p className="text-justify">
              ERP systems also increase departmental collaboration and
              streamline corporate procedures. This leads to decreased human
              errors, more transparency, and expedited project completion. Solar
              enterprises can make the most of their resources and finish
              projects on schedule and under budget with improved project
              management.{" "}
            </p>
          </div>
          <div className="mt-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-xl xl:text-xl font-bold text-start  mb-5  text-gray-800">
              ERP Integration with Additional Technologies in The Solar Sector{" "}
            </h1>
            <p className="text-justify">
              ERP systems can be combined with other technologies to improve
              efficiency and performance in the solar business further. The
              Internet of Things (IoT) is one such technology that makes it
              possible to gather and examine data in real-time from solar panels
              and other devices. Solar enterprises may get essential insights
              into the performance of their installations and take proactive
              measures to remedy any problems by combining IoT with ERP systems.{" "}
            </p>
            <p className="text-justify">
              Artificial Intelligence (AI) is another technology that can be
              connected with ERP systems. AI systems can analyze vast volumes of
              data to forecast energy demand, improve energy production, and
              offer suggestions for increasing efficiency. With this
              integration, solar companies can automate procedures, cut
              expenses, and boost overall performance.{" "}
            </p>
          </div>
          <div className="mt-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-xl xl:text-xl font-bold text-start  mb-5  text-gray-800">
              Future Developments and Trends in Energy Management and Solar
              Power ERP{" "}
            </h1>
            <p className="text-justify">
              With several emerging trends and breakthroughs, the future of ERP
              in the solar business is bright. One such trend is using
              blockchain technology to improve security and transparency in
              solar energy transactions. In the solar energy industry,
              blockchain technology can offer an unchangeable energy production
              and consumption record, promoting accuracy and confidence.{" "}
            </p>
            <p className="text-justify">
              Another breakthrough is utilizing machine learning algorithms in
              ERP systems to automate and improve energy management. Machine
              learning can use past data and trends to forecast energy
              requirements, optimize energy use, and boost productivity.{" "}
            </p>
          </div>
          <div className="mt-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-xl xl:text-xl font-bold text-start  mb-5  text-gray-800">
              In Summary, Utilizing ERP to Propel the Solar Industry Forward{" "}
            </h1>
            <p className="text-justify">
              The solar sector is revolutionized by integrating ERP systems with
              solar power and energy management. ERP solutions improve solar
              enterprises’ productivity, profitability, and efficiency by
              streamlining business operations, facilitating collaboration, and
              providing real-time data analysis. The future of ERP in the solar
              business is bright with the integration of additional technologies
              like AI and IoT. ERP is essential to moving the solar sector
              toward a more efficient and sustainable future.
            </p> */}
          </div>
        </section>
      </section>
      <Footer />{" "}
    </>
  );
}

export default Page;
