// Footer.jsx

import React from "react";
import { RiYoutubeLine, RiInstagramLine, RiWhatsappLine } from "react-icons/ri";
import ImageLogo from "../images/logo5.png";

const Footer = () => {
  return (
    <footer className="container mx-auto py-8 lg:py-12 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        <div className="column">
          <div className="logo">
            <img src={ImageLogo} height={150} width={150} alt="Logo" />
          </div>
          <p className="text-sm text-gray-600 mt-4 sm:max-w-screen-sm sm:mx-auto">
            Discover, connect, and grow with us. Explore our community-driven
            platform today!
          </p>
          <div className="socials flex mt-4">
            <a href="https://youtube.com/@rensans" className="mr-4">
              <RiYoutubeLine className="text-xl" />
            </a>
            <a href="https://instagram.com/userrrrnn77" className="mr-4">
              <RiInstagramLine className="text-xl" />
            </a>
            <a href="https://wa.me/6289647300193?text=Hai%20bang">
              <RiWhatsappLine className="text-xl" />
            </a>
          </div>
        </div>
        <div className="column">
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <a href="/" className="text-sm text-gray-600 block mb-2">
            Business
          </a>
          <a href="/" className="text-sm text-gray-600 block mb-2">
            Partnership
          </a>
          <a href="/" className="text-sm text-gray-600 block mb-2">
            Network
          </a>
        </div>
        <div className="column">
          <h4 className="text-lg font-semibold mb-4">About Us</h4>
          <a href="/" className="text-sm text-gray-600 block mb-2">
            Blogs
          </a>
          <a href="/" className="text-sm text-gray-600 block mb-2">
            Channels
          </a>
          <a href="/" className="text-sm text-gray-600 block mb-2">
            Sponsors
          </a>
        </div>
        <div className="column">
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <a href="/" className="text-sm text-gray-600 block mb-2">
            Contact Us
          </a>
          <a href="/" className="text-sm text-gray-600 block mb-2">
            Privacy Policy
          </a>
          <a href="/" className="text-sm text-gray-600 block mb-2">
            Terms &amp; Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
