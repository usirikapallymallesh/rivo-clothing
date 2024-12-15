import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaShieldAlt,
  FaBoxOpen,
  FaCheckCircle,
  FaTruck,
} from "react-icons/fa";
import DefaultLayout from "../Layout/DefaultLayout";

const Contact = () => {
  return (
    <DefaultLayout>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 text-[#224F34]">
        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-[#224F34] mb-2">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600">
            We’d love to hear from you! Reach out with any questions or feedback.
          </p>
        </div>

        {/* Office Information Section */}
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          {/* Office Details */}
          <div className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105">
            <h2 className="text-xl font-bold text-[#224F34] mb-4">Our Offices</h2>
            <div className="mb-6 border-b pb-4">
              <h3 className="text-lg font-semibold text-[#224F34]">United States Office</h3>
              <p className="text-gray-500">205 Middle Road, 2nd Floor, New York</p>
              <p className="text-gray-500 mt-1">+1 234 567 88</p>
              <a href="mailto:info@example.com" className="text-[#224F34] hover:underline">
                info@example.com
              </a>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#224F34]">Munich Office</h3>
              <p className="text-gray-500">205 Middle Road, 2nd Floor, Munich</p>
              <p className="text-gray-500 mt-1">+49 456 123 22</p>
              <a href="mailto:contact@example.com" className="text-[#224F34] hover:underline">
                contact@example.com
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-4 mt-6">
              <a href="#" className="text-gray-500 hover:text-[#224F34]">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#224F34]">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#224F34]">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#224F34]">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-8 transition-transform transform hover:scale-105">
            <h2 className="text-xl font-bold text-[#224F34] mb-4">Send Us a Message</h2>
            <form className="grid grid-cols-1 gap-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring focus:ring-[#224F34]"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring focus:ring-[#224F34]"
                required
              />
              <input
                type="text"
                placeholder="Subject"
                className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring focus:ring-[#224F34]"
                required
              />
              <textarea
                placeholder="Your Message"
                className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring focus:ring-[#224F34]"
                rows="5"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-[#224F34] text-white p-3 rounded-lg hover:bg-[#061c0f] transition duration-200 ease-in-out"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer Icons Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-y-8 max-w-screen-xl gap-14 mb-4">
          {[
            { icon: <FaShieldAlt size={40} color="#224F34" />, text: "Secure Payments" },
            { icon: <FaBoxOpen size={40} color="#224F34" />, text: "New Arrivals Daily" },
            { icon: <FaCheckCircle size={40} color="#224F34" />, text: "Quality Assurance" },
            { icon: <FaTruck size={40} color="#224F34" />, text: "Fast Delivery" },
          ].map(({ icon, text }) => (
            <div key={text} className="flex flex-col items-center text-center transition-transform transform hover:scale-105">
              {icon}
              <p className="mt-2 text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Contact;