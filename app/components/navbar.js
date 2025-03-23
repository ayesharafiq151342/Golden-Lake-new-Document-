"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Search } from "lucide-react";
import Button from "../ui/style";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null); 
  const [activeLink, setActiveLink] = useState(""); 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 

  // Toggle dropdown menus
  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  // Toggle Mobile Menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  // Set active link
  const handleLinkClick = (link) => {
    setActiveLink(link);
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white border-b fixed top-0 left-0 right-0 z-50 border-gray-300 dark:bg-gray-900 dark:border-gray-700 shadow-md">
      <div className="w-3/4 mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <span className="text-2xl font-semibold dark:text-white">
            Golden <span className="text-purple-700">Lake</span>
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-gray-500 dark:text-gray-400 p-2 rounded-lg focus:ring-2"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

        {/* Navbar Links */}
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-6 w-full md:w-auto absolute md:relative top-16 md:top-0 left-0 bg-white md:bg-transparent shadow-lg md:shadow-none z-50`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 border md:border-0 rounded-lg bg-gray-50 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            
            {/* Home */}
            <li>
              <Link
                href="/"
                onClick={() => handleLinkClick("home")}
                className={`block px-3 py-2 ${
                  activeLink === "home" ? "bg-purple-100 text-purple-700" : "text-gray-900"
                } dark:text-white hover:bg-gray-100 rounded-lg`}
              >
                Home
              </Link>
            </li>

            {/* Services Dropdown with Navigation */}
            <li className="relative">
              <div className="flex items-center">
                <Link
                  href="/services"
                  className={`block px-3 py-2 ${
                    activeLink === "services" ? "bg-purple-100 text-purple-700" : "text-gray-900"
                  } dark:text-white hover:bg-gray-100 rounded-lg`}
                  onClick={() => handleLinkClick("services")}
                >
                  Services
                </Link>
                <ChevronDown
                  className="ml-1 w-4 h-4 cursor-pointer"
                  onClick={() => toggleDropdown("services")}
                />
              </div>

              {activeDropdown === "services" && (
                <div className="absolute left-0 mt-2 w-56 bg-white border rounded-md shadow-lg dark:bg-gray-800 z-50">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    {[
                      { name: "Trading & Distribution System", link: "/services/trading" },
                      { name: "Manufacturing ERP System", link: "/services/manufacturing" },
                      { name: "Supply Chain Management System", link: "/services/supply_chain" },
                      { name: "Project management system", link: "/services/project-managment" },
                      { name: "Customer Relationship Management", link: "/services/CRM" },
                      { name: "Golden-lake  NGOS", link: "/services/Ngo" },
                      { name: "HR or Payroll  system", link: "/services/Payroll" },



                    ].map((service, index) => (
                      <li key={index}>
                        <Link
                          href={service.link}
                          className="block px-4 py-2 hover:bg-gray-100"
                          onClick={() => handleLinkClick(service.name)}
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
  {/* Services Dropdown with Navigation */}
  <li className="relative">
              <div className="flex items-center">
                <Link
                  href="/industry"
                  className={`block px-3 py-2 ${
                    activeLink === "industry" ? "bg-purple-100 text-purple-700" : "text-gray-900"
                  } dark:text-white hover:bg-gray-100 rounded-lg`}
                  onClick={() => handleLinkClick("industry")}
                >Industry
                  
                </Link>
                <ChevronDown
                  className="ml-1 w-4 h-4 cursor-pointer"
                  onClick={() => toggleDropdown("industry")}
                />
              </div>

              {activeDropdown === "industry" && (
                <div className="absolute left-0 mt-2 w-56 bg-white border rounded-md shadow-lg dark:bg-gray-800 z-50">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    {[
                      { name: "Trading ", link: "/industry/trading" },
                      { name: "Manufacturing ", link: "/industry/industry-manufacturing" },
                      { name: "Food", link: "/industry/food" },
                      { name: "Services", link: "/industry/services" },
                      { name: "Project management system", link: "/services/project-managment" },
                      { name: "Customer Relationship Management", link: "/services/CRM" },
                      { name: "Golden-lake  NGOS", link: "/services/Ngo" },
                     



                    ].map((service, index) => (
                      <li key={index}>
                        <Link
                          href={service.link}
                          className="block px-4 py-2 hover:bg-gray-100"
                          onClick={() => handleLinkClick(service.name)}
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
           
            {/* Contact */}
            <li>
              <Link
                href="/contact"
                className={`block px-3 py-2 ${
                  activeLink === "contact" ? "bg-purple-100 text-purple-700" : "text-gray-900"
                } dark:text-white hover:bg-gray-100 rounded-lg`}
                onClick={() => handleLinkClick("contact")}
              >
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Search & Button */}
          <div className="mt-4 md:mt-0 flex items-center space-x-3">
            <Search className="text-gray-500 dark:text-purple-900 cursor-pointer" size={22} />
            <Button label="Submit" variant="secondary" type="submit" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
