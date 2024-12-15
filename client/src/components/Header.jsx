import React from "react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems);

  return (
    <div
      className="bg-white shadow-md px-14 flex justify-between items-center py-4 sticky top-0 z-10"
      style={{ color: "#224F34" }}
    >
      <div className="nav-left">
        <h1 className="font-bold text-2xl">Rivo</h1>
      </div>
      <div className="nav-center">
        <ul className="nav-item flex gap-7">
          <li>
            <NavLink
              to={"/"}
              className="hover:text-blue-500 transition duration-200"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about-us"}
              className="hover:text-blue-500 transition duration-200"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/collections"}
              className="hover:text-blue-500 transition duration-200"
            >
              Collections
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/clothing-services"}
              className="hover:text-blue-500 transition duration-200"
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contact"}
              className="hover:text-blue-500 transition duration-200"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="  border border-green-950 w-56 flex items-center justify-center rounded-md overflow-hidden">
        <input
          type="text"
          name=""
          id=""
          placeholder="search item"
          className=" w-[100%] px-4 py-1 outline-none"
        />
        <FaSearch className="text-gray-700 text-2xl mx-2" />
      </div>
      <div className="nav-right flex items-center gap-4">
        {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200">Register</button> */}
        <div className="relative ">
          <NavLink to={"/cart"}>
            <FaShoppingCart className="text-gray-700 text-2xl mr-5" />
            <span className="absolute -top-1 right-2 bg-green-500 text-white rounded-full text-xs px-1">
              {cartItems.length}
            </span>
          </NavLink>
          {/* You can add a badge for cart items if needed */}
          {/* <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-1">3</span> */}
        </div>
        <Link
          to={"/login"}
          className=" border-2 uppercase border-green-900 px-6 py-2 rounded-sm hover:bg-gray-300 transition duration-200"
        >
          Login
        </Link>
        <Link
          to={"/register"}
          className=" border-2 uppercase border-green-900 px-6 py-2 rounded-sm hover:bg-gray-300 transition duration-200"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Header;
