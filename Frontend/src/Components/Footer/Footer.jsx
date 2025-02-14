import React from "react";
import { useState } from "react";
import { FaChevronDown, FaTimes } from "react-icons/fa";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <footer className="w-full bg-white border border-t-gray-200 text-gray-600 py-3 bottom-0 fixed left-0 text-sm">
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-40"></div>
      )}
      {!isOpen && (
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="text-gray-600">© 2025 Airbnb Inc.</div>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Privacy
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Terms
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Sitemap
            </a>
          </div>
          <div className="relative">
            <div
              className="flex items-center cursor-pointer"
              onClick={toggleDropdown}
            >
              <span className="text-gray-600 font-bold underline">Support and resources</span>
              <FaChevronDown className="ml-2" />
            </div>
          </div>
        </div>
      )}
      {isOpen && (
        <div className="fixed text-sm  flex z-40 bottom-0 right-0 mt-2 w-full bg-white rounded-t-2xl max-h-[30rem] border border-gray-200 rounded shadow-lg"
              onBlur={()=> setTime(()=> (toggleDropdown(false),200))} 
        >
          <div className="flex p-4" onClick={toggleDropdown}>
            <FaTimes className="ml-2 cursor-pointer hover:text-gray-400" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-40 p-5">
            <div>
            <a
              href="#"
              className="block px-4 py-2 text-gray-600 font-semibold"
            >
              Support
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-600 "
            >
              Help Center
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-600 "
            >
              Get help with a safety issue
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-600 "
            >
              AirCover
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-600 "
            >
              Anti-discrimination
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-600 "
            >
              Disability support
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-600 "
            >
              Cancellation options
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-600 "
            >
              Report neighborhood concern
            </a>
            </div>
            <div>
            <a
              href="#"
              className="block px-4 py-2 text-gray-600 font-semibold"
            >
              Hosting
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-600 "
            >
              Airbnb your home
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-600 "
            >
              Get help with a safety issue
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-600 "
            >
              AirCover for Hosts
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-600 "
            >
              Hosting resources
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-600 "
            >
              Hosting responsibly
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-600 "
            >
              Airbnb-friendly apartments
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-600 "
            >
              Join a free Hosting class
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-600 "
            >
              Find a co‑host
            </a>
            </div>
            <div>
            <a
              href="#"
              className="block px-4 py-2 text-gray-600 font-semibold"
            >
              Airbnb
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-600 "
            >
              Newsroom
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-600 "
            >
              New features
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-600 "
            >
              Careers
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-600 "
            >
              Investors
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-600 "
            >
              Gift cards
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-600 "
            >
              Airbnb.org emergency stays
            </a>
            </div>
            
          </div>
        </div>        
      )}
    </footer>
  );
};

export default Footer;
