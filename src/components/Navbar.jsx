// Navbar.jsx

import React, { useState, useEffect } from "react";
import Logo from "../images/logo5.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const scrollToElement = (elementSelector, instance = 0) => {
      const elements = document.querySelectorAll(elementSelector);
      if (elements.length > instance) {
        elements[instance].scrollIntoView({ behavior: 'smooth' });
      }
    };

    const id1 = document.getElementById("home");
    const id2 = document.getElementById("features");
    const id3 = document.getElementById("pricing");
    const id4 = document.getElementById("footer");

    if (id1) id1.addEventListener('click', () => scrollToElement('.home'));
    if (id2) id2.addEventListener('click', () => scrollToElement('.features'));
    if (id3) id3.addEventListener('click', () => scrollToElement('.pricing'));
    if (id4) id4.addEventListener('click', () => scrollToElement('.footer'));

    return () => {
      if (id1) id1.removeEventListener('click', () => scrollToElement('.home'));
      if (id2) id2.removeEventListener('click', () => scrollToElement('.features'));
      if (id3) id3.removeEventListener('click', () => scrollToElement('.pricing'));
      if (id4) id4.removeEventListener('click', () => scrollToElement('.footer'));
    };
  }, []);

  return (
    <nav className="bg-indigo-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="hover:cursor-pointer"
                src={Logo}
                height={50}
                width={50}
                alt="Logo"
              />
            </div>
            <div className="hidden md:flex md:ml-10 md:space-x-4">
              <a
                href="/home"
                className="text-gray-300 hover:bg-indigo-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium home"
                id="home"
              >
                Home
              </a>
              <a
                href="/features"
                className="text-gray-300 hover:bg-indigo-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium features"
                id="features"
              >
                Features
              </a>
              <a
                href="/pricing"
                className="text-gray-300 hover:bg-indigo-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium pricing"
                id="pricing"
              >
                Pricing
              </a>
              <a
                href="/about"
                className="text-gray-300 hover:bg-indigo-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium footer"
                id="footer"
              >
                About
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="/">
              <button className="bg-indigo-700 hover:bg-indigo-900 text-white py-1 px-4 font-bold text-xl rounded">
                Get Started
              </button>
            </a>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={toggleNavbar}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="/home"
            className="text-gray-300 hover:bg-indigo-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </a>
          <a
            href="/features"
            className="text-gray-300 hover:bg-indigo-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Features
          </a>
          <a
            href="/pricing"
            className="text-gray-300 hover:bg-indigo-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Pricing
          </a>
          <a
            href="/about"
            className="text-gray-300 hover:bg-indigo-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </a>
          <a href="/home">
            <button className="bg-indigo-700 hover:bg-indigo-900 text-white py-1 px-4 font-bold text-xl rounded w-full">
              Get Started
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
