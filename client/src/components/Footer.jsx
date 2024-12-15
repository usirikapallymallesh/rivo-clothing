import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#224F34] py-14 px-4 md:px-10 text-white">
      <div className="grid grid-cols-1 md:grid-cols-7 gap-10">
        {/* Brand Section */}
        <div className="flex flex-col col-span-2 justify-center items-start">
          <h1 className="text-4xl font-bold uppercase">Rivo</h1>
          <p className="mt-2 text-gray-300">Follow us on social media:</p>
          <div className="flex space-x-4 mt-2">
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-300 text-2xl hover:text-white transition duration-200"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-300 text-2xl hover:text-white transition duration-200"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-300 text-2xl hover:text-white transition duration-200"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Shop Links */}
        <div className="flex flex-col justify-center items-start text-[#C2EFD4]">
          <h3 className="text-lg font-semibold uppercase mb-2 text-white">Shop</h3>
          {["Products", "Overview", "Pricing", "Resources"].map((link) => (
            <span
              key={link}
              className="hover:text-white transition duration-200 cursor-pointer mb-1"
            >
              {link}
            </span>
          ))}
        </div>

        {/* Company Links */}
        <div className="flex flex-col justify-center items-start text-[#C2EFD4]">
          <h3 className="text-lg font-semibold uppercase mb-2 text-white">Company</h3>
          {["About Us", "Contact", "News", "Support"].map((link) => (
            <span
              key={link}
              className="hover:text-white transition duration-200 cursor-pointer mb-1"
            >
              {link}
            </span>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="col-span-3 flex flex-col justify-center ">
          <h3 className="text-lg font-semibold uppercase mb-2">Stay Up to Date</h3>
          <div className="flex mt-4 w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-l-md border focus:outline-none w-full bg-transparent border-gray-400 placeholder-gray-300"
            />
            <button className="bg-[#A3F3BE] text-[#224F34] px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-200 shadow-md">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Separator Line and Links */}
      <div className="my-8 flex items-center flex-col md:flex-row">
        <div className="w-full md:w-[80%] border-t border-gray-500">
          <svg width="100%" height="2" xmlns="http://www.w3.org/2000/svg">
            <line
              x1="0"
              y1="1"
              x2="100%"
              y2="1"
              stroke="white"
              strokeWidth="2" // Corrected to strokeWidth for JSX
            />
          </svg>
        </div>
        <div className="flex gap-10 mt-4 md:mt-0 md:ml-3">
          <p>Terms</p>
          <p>Privacy</p>
          <p>Cookies</p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-10 text-center border-gray-500">
        <p className="text-gray-200">&copy; 2024 Rivo. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;