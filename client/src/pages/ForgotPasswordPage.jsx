import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic here (e.g., send email)
    console.log("Password reset link sent to:", email);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex items-center border border-gray-300 rounded-md focus-within:border-blue-300">
            <FaEnvelope className="text-gray-400 mx-2" />
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full p-2 border-none focus:outline-none focus:ring-0"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#224F34] text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Send Reset Link
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm">Remembered your password?</p>
          <Link to={"/login"} className="text-[#224F34] hover:underline">
            Login here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
