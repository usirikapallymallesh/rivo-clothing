import React from "react";
import {
  FaShippingFast,
  FaExchangeAlt,
  FaHeadset,
  FaStar,
} from "react-icons/fa";
import DefaultLayout from "../Layout/DefaultLayout";
import { NavLink, useNavigate } from "react-router-dom";

const ClothingServices = () => {
  const navigate = useNavigate();
  return (
    <DefaultLayout>
      <div className="max-w-6xl mx-auto p-6">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#224F34]">Our Services</h1>
          <p className="mt-2 text-gray-600">
            Discover the exceptional services we offer to enhance your shopping
            experience.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Shipping Service */}
          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 transition-transform duration-200 hover:shadow-xl flex flex-col items-center">
            <FaShippingFast className="text-[#224F34] text-5xl mb-4" />
            <h2 className="text-xl font-semibold text-[#224F34] mb-2">
              Fast Shipping
            </h2>
            <p className="text-gray-700 text-center">
              Enjoy quick and reliable shipping on all orders. We ensure your
              items arrive on time!
            </p>
          </div>

          {/* Returns Service */}
          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 transition-transform duration-200 hover:shadow-xl flex flex-col items-center">
            <FaExchangeAlt className="text-[#224F34] text-5xl mb-4" />
            <h2 className="text-xl font-semibold text-[#224F34] mb-2">
              Easy Returns
            </h2>
            <p className="text-gray-700 text-center">
              Not satisfied with your purchase? Our hassle-free return policy
              makes it easy to exchange or return items.
            </p>
          </div>

          {/* Customer Support Service */}
          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 transition-transform duration-200 hover:shadow-xl flex flex-col items-center">
            <FaHeadset className="text-[#224F34] text-5xl mb-4" />
            <h2 className="text-xl font-semibold text-[#224F34] mb-2">
              24/7 Customer Support
            </h2>
            <p className="text-gray-700 text-center">
              Our dedicated support team is here to assist you anytime. Reach
              out with any questions or concerns!
            </p>
          </div>

          {/* Styling Advice Service */}
          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 transition-transform duration-200 hover:shadow-xl flex flex-col items-center">
            <FaStar className="text-[#224F34] text-5xl mb-4" />
            <h2 className="text-xl font-semibold text-[#224F34] mb-2">
              Styling Advice
            </h2>
            <p className="text-gray-700 text-center">
              Get personalized styling advice from our fashion experts to help
              you look your best.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <h3 className="text-xl font-semibold text-[#224F34]">
            Experience the Difference
          </h3>
          <p className="mt-2 text-gray-600">
            Shop with us today and enjoy our exceptional services!
          </p>
          <NavLink
          to={'/'}
          
            className="mt-4 inline-block bg-[#224F34] text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Start Shopping
          </NavLink>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ClothingServices;
