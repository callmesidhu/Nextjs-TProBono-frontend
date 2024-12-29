

import React from 'react';


const Navbar = () => {
  return (
    <nav className=" text-white p-4">
      <div className="flex justify-between items-center max-w-7xl ">
        {/* Logo Section */}
        <div className="text-2xl font-bold">
          {/* Add your image here */}
          <img 
        src="/Images/logo.png" 
        alt="TProBono Logo" 
        style={{ width: '120px', height: 'auto' }} 
        className=" h-auto " // Adjust size as needed
      />
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#intro" className="text-9xl hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#projects" className="text-9xl hover:text-gray-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#services" className="text-9xl hover:text-gray-300">
              Services
            </a>
          </li>
          <li>
            <a href="#about" className="text-9xl hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="text-9xl hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden text-white focus:outline-none"
          id="menu-btn"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <ul
        className="flex-col space-y-4 mt-4 md:hidden hidden"
        id="mobile-menu"
      >
        <li>
          <a href="#intro" className="block text-center hover:text-gray-300">
            Home
          </a>
        </li>
        <li>
          <a href="#projects" className="block text-center hover:text-gray-300">
            Projects
          </a>
        </li>
        <li>
          <a href="#services" className="block text-center hover:text-gray-300">
            Services
          </a>
        </li>
        <li>
          <a href="#about" className="block text-center hover:text-gray-300">
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="block text-center hover:text-gray-300">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
