import React, { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if fields are empty
    if (!email || !password) {
      toast.error("Please fill in all fields.", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
      return; // Exit the function if validation fails
    }

    // Simulate a successful login action
    toast.success("Login successful!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });

    // Add additional logic for login here (e.g., API call)
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border-2">
        <div className="flex justify-center py-8">
          <RiAccountCircleFill className="h-32 w-32 text-[#224F34]" />
        </div>
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4 flex items-center border border-gray-300 rounded-md focus-within:border-blue-300">
            <FaEnvelope className="text-gray-400 mx-2" />
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state
              required
              className="mt-1 block w-full p-2 border-none focus:outline-none focus:ring-0"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4 flex items-center border border-gray-300 rounded-md focus-within:border-blue-300">
            <FaLock className="text-gray-400 mx-2" />
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
              required
              className="mt-1 block w-full p-2 border-none focus:outline-none focus:ring-0"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="text-blue-500 mx-2 focus:outline-none"
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#224F34] text-white py-2 mt-4 rounded-md hover:bg-[#C2EFD4] hover:outline hover:bg-transparent hover:text-[#224F34] transition duration-200"
          >
            LOGIN
          </button>
        </form>

        {/* Forgot Password Link */}
        <div className="mt-4 text-right">
          <NavLink
            to={"/forgot-password"}
            className="text-sm text-blue-500 hover:underline"
          >
            Forgot Password?
          </NavLink>
        </div>

        {/* Registration Link */}
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-600">Don't have an account? </span>
          <NavLink
            to={"/register"}
            className="text-sm text-blue-500 hover:underline"
          >
            Register here
          </NavLink>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default LoginPage;