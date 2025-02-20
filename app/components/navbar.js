"use client";
import React, { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import Button from "../ui/style";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null); // Tracks active dropdown
  const [activeLink, setActiveLink] = useState(""); // Tracks active link
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Tracks mobile menu state

  // Toggle dropdown menus
  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  // Toggle Mobile Menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null); // Close dropdowns when toggling the mobile menu
  };

  // Set active link and close dropdowns
  const handleLinkClick = (link) => {
    setActiveLink(link);
    setActiveDropdown(null);
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className="bg-white border-b fixed top-0 left-0 right-0 z-50 border-gray-300 dark:bg-gray-900 dark:border-gray-700 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-3">
          <span className="text-2xl font-semibold dark:text-white">
            Golden <span className="text-purple-700">Lake</span>
          </span>
        </a>

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
            {/* Home Link */}
            <li>
              <a
                href="#"
                onClick={() => handleLinkClick("home")}
                className={`block px-3 py-2 ${
                  activeLink === "home" ? "bg-purple-100 text-purple-700" : "text-gray-900"
                } dark:text-white hover:bg-gray-100 rounded-lg`}
              >
                Home
              </a>
            </li>

            {/* Services Dropdown */}
            <li className="relative">
              <button
                onClick={() => toggleDropdown("services")}
                className={`flex items-center w-full px-3 py-2 ${
                  activeDropdown === "services" ? "bg-purple-100 text-purple-700" : "text-gray-900"
                } dark:text-white hover:bg-gray-100 rounded-lg`}
              >
                Services <ChevronDown className="ml-2 w-4 h-4" />
              </button>

              {(activeDropdown === "services" || (!isMobileMenuOpen && activeDropdown === "services")) && (
                <div className={`${
                    isMobileMenuOpen ? "block" : "absolute"
                  } left-0 mt-2 w-56 bg-white border rounded-md shadow-lg dark:bg-gray-800 z-50`}
                >
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    {["Trading & Distribution", "Manufacturing ERP", "Project Management", "CRM"].map((item, index) => (
                      <li key={index}>
                        <a
                          href="/services"
                          onClick={() => handleLinkClick(item)}
                          className={`block px-4 py-2 hover:bg-gray-100 ${
                            activeLink === item ? "bg-purple-100 text-purple-700" : ""
                          }`}
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>

            {/* Industries Dropdown */}
            <li className="relative">
              <button
                onClick={() => toggleDropdown("industries")}
                className={`flex items-center w-full px-3 py-2 ${
                  activeDropdown === "industries" ? "bg-purple-100 text-purple-700" : "text-gray-900"
                } dark:text-white hover:bg-gray-100 rounded-lg`}
              >
                Industries <ChevronDown className="ml-2 w-4 h-4" />
              </button>

              {(activeDropdown === "industries" || (!isMobileMenuOpen && activeDropdown === "industries")) && (
                <div className={`${
                    isMobileMenuOpen ? "block" : "absolute"
                  } left-0 mt-2 w-56 bg-white border rounded-md shadow-lg dark:bg-gray-800 z-50`}
                >
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    {["Trading", "Manufacturing", "Textiles", "Foods"].map((industry, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          onClick={() => handleLinkClick(industry)}
                          className={`block px-4 py-2 hover:bg-gray-100 ${
                            activeLink === industry ? "bg-purple-100 text-purple-700" : ""
                          }`}
                        >
                          {industry}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>

            {/* More Dropdown */}
            <li className="relative">
              <button
                onClick={() => toggleDropdown("more")}
                className={`flex items-center w-full px-3 py-2 ${
                  activeDropdown === "more" ? "bg-purple-100 text-purple-700" : "text-gray-900"
                } dark:text-white hover:bg-gray-100 rounded-lg`}
              >
                More <ChevronDown className="ml-2 w-4 h-4" />
              </button>

              {(activeDropdown === "more" || (!isMobileMenuOpen && activeDropdown === "more")) && (
                <div className={`${
                    isMobileMenuOpen ? "block" : "absolute"
                  } left-0 mt-2 w-56 bg-white border rounded-md shadow-lg dark:bg-gray-800 z-50`}
                >
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    {["About Us", "Blog", "Testimonials", "Partner Program"].map((moreItem, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          onClick={() => handleLinkClick(moreItem)}
                          className={`block px-4 py-2 hover:bg-gray-100 ${
                            activeLink === moreItem ? "bg-purple-100 text-purple-700" : ""
                          }`}
                        >
                          {moreItem}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>

            {/* Contact Link */}
            <li>
              <a
                href="#"
                onClick={() => handleLinkClick("contact")}
                className={`block px-3 py-2 ${
                  activeLink === "contact" ? "bg-purple-100 text-purple-700" : "text-gray-900"
                } dark:text-white hover:bg-gray-100 rounded-lg`}
              >
                Contact Us
              </a>
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
