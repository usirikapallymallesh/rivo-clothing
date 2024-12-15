import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaPhone } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-[#224F34] mb-6">Register</h2>
        <form>
          <div className="mb-4 flex items-center border border-gray-300 rounded-md focus-within:border-blue-300">
            <FaUser className="text-gray-400 mx-2" />
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              required
              className="mt-1 block w-full p-2 border-none focus:outline-none focus:ring-0"
            />
          </div>
          <div className="mb-4 flex items-center border border-gray-300 rounded-md focus-within:border-blue-300">
            <FaEnvelope className="text-gray-400 mx-2" />
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              className="mt-1 block w-full p-2 border-none focus:outline-none focus:ring-0"
            />
          </div>
          <div className="mb-4 flex items-center border border-gray-300 rounded-md focus-within:border-blue-300">
            <FaPhone className="text-gray-400 mx-2" />
            <input
              type="tel"
              id="mobile"
              placeholder="Enter your mobile number"
              required
              className="mt-1 block w-full p-2 border-none focus:outline-none focus:ring-0"
            />
          </div>
          <div className="mb-4 flex items-center border border-gray-300 rounded-md focus-within:border-blue-300">
            <FaLock className="text-gray-400 mx-2" />
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
              required
              className="mt-1 block w-full p-2 border-none focus:outline-none focus:ring-0"
            />
            <button 
              type="button" 
              onClick={togglePasswordVisibility} 
              className="text-[#224F34] mx-2">
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          <div className="mb-4 flex items-center border border-gray-300 rounded-md focus-within:border-blue-300">
            <FaLock className="text-gray-400 mx-2" />
            <input
              type={showPassword ? "text" : "password"}
              id="confirm-password"
              placeholder="Confirm your password"
              required
              className="mt-1 block w-full p-2 border-none focus:outline-none focus:ring-0"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#224F34] text-white py-2 mt-4 rounded-md hover:bg-[#C2EFD4] hover:outline hover:bg-transparent hover:text-[#224F34] transition duration-200"
          >
            REGISTER
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm">Already have an account?</p>
          <NavLink to={'/login'} className="text-blue-500 hover:underline">
            Login here
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;