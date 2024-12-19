import React, { useState } from "react";
import { FaComments, FaPlus, FaSearch, FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#05324B] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">

        <div className="flex items-center space-x-8">
          <div className="flex items-center">
            <img
              src="/images/logo.png"
              alt="Phlo Logo"
              className="w-24 object-contain mr-4"
            />
          </div>

          <div className="hidden md:flex items-center bg-[#022f47] rounded-md px-4 py-3">
            <FaSearch className="text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent focus:outline-none text-gray-200 placeholder-gray-400 ml-2"
            />
          </div>
        </div>

        <div className="hidden md:flex space-x-6">
          <a href="#networking" className="hover:text-gray-300">
            Networking
          </a>
          <a href="#funding" className="hover:text-gray-300">
            Funding Opportunities
          </a>
          <a href="#projects" className="hover:text-gray-300">
            Projects
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <button className="flex items-center bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600">
            <FaPlus className="mr-2" /> Create
          </button>
          <div className="cursor-pointer">
            <FaComments className="w-6 h-6 text-white" />
          </div>
          <div className="cursor-pointer relative">
            <img
              src="/images/user.jpg"
              alt="User"
              className="w-12 h-12 rounded-full border border-gray-200"
            />
          </div>
        </div>

        <div className="flex md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <a href="#networking" className="block text-gray-200 hover:text-gray-400">
            Networking
          </a>
          <a href="#funding" className="block text-gray-200 hover:text-gray-400">
            Funding Opportunities
          </a>
          <a href="#projects" className="block text-gray-200 hover:text-gray-400">
            Projects
          </a>
          <div className="flex flex-col space-y-4">
            <button className="flex items-center justify-center bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600">
              <FaPlus className="mr-2" /> Create
            </button>
            <div className="flex justify-center">
              <FaComments className="w-6 h-6 text-white" />
            </div>
            <div className="flex justify-center">
              <img
                src="/images/user.jpg"
                alt="User"
                className="w-12 h-12 rounded-full border border-gray-200"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
