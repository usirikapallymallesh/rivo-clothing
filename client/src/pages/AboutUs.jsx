import React from "react";
import { FaCheckCircle } from "react-icons/fa";
// import logo from "../assets/images/logo.png"; // Replace with your logo image path
import DefaultLayout from "../Layout/DefaultLayout";

const AboutUs = () => {
  return (
    <DefaultLayout>
      <div className="max-w-6xl mx-auto p-6"> 
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#224F34]">About Us</h1>
          <p className="mt-2 text-gray-600">Discover our journey and values.</p>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Side: Brand Story */}
          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 transition-transform duration-200 hover:shadow-xl flex flex-col">
            <h2 className="text-2xl font-semibold mb-4 text-[#224F34]">
              Our Story
            </h2>
            <p className="text-gray-700 mb-4">
              Founded in 2020, we are a passionate team dedicated to bringing
              you the latest trends in fashion. Our journey began with a simple
              idea: to create stylish, high-quality clothing that empowers
              individuals to express themselves.
            </p>
            <p className="text-gray-700 mb-4">
              We believe that fashion is not just about clothing; it's about
              confidence, creativity, and individuality. Our collections are
              designed with you in mind, ensuring that you feel comfortable and
              stylish no matter the occasion.
            </p>
          </div>

          {/* Right Side: Values */}
          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 transition-transform duration-200 hover:shadow-xl flex flex-col">
            <h2 className="text-2xl font-semibold mb-4 text-[#224F34]">
              Our Values
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li className="flex items-center mb-2">
                <FaCheckCircle className="text-[#224F34] mr-2" />
                Quality: We prioritize high-quality materials and craftsmanship.
              </li>
              <li className="flex items-center mb-2">
                <FaCheckCircle className="text-[#224F34] mr-2" />
                Sustainability: We are committed to eco-friendly practices.
              </li>
              <li className="flex items-center mb-2">
                <FaCheckCircle className="text-[#224F34] mr-2" />
                Community: We support local artisans and ethical production.
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center bg-[#f9f9f9] p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-[#224F34]">
            Join Our Community
          </h3>
          <p className="mt-2 text-gray-600">
            Follow us on social media to stay updated on our latest collections
            and promotions!
          </p>
          <a
            href="/shop"
            className="mt-4 inline-block bg-[#224F34] text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Shop Now
          </a>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default AboutUs;
