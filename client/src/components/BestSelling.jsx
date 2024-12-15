import React from "react";
import { FaArrowRight } from 'react-icons/fa'; // Import the desired icon
import bestone from "../assets/images/best-1.png";
import besttwo from "../assets/images/best-2.png";
import bestthree from "../assets/images/best-3.png";
import BestSellingCard from "./BestSellingCard";

const BestSelling = () => {
  return (
    <div className="my-4 p-6 rounded-lg  bg-white">
      <h2 className="text-center font-bold text-3xl py-4 text-[#224F34] roboto-slab-item">Best Selling</h2>
      <p className="text-center text-xl py-2 pb-7 text-[#748d7e]">
      Get in on the trend with our curated selection of best-selling styles.
      </p>
      
      {/* Product Cards Container */}
      <div className="flex flex-wrap justify-center gap-6 mb-6">
        {/* Product Cards */}
        <BestSellingCard
          img={bestone}
          title="Textured Sunset Shirt"
          price="$29.99"
        />
        <BestSellingCard
          img={besttwo}
          title="Floral Printed Sweater"
          price="$39.99"
        />
        <BestSellingCard
          img={bestthree}
          title="Printed Cotton Dress"
          price="$49.99"
        />
      </div>
      
      {/* See All Button */}
      <div className="text-center mt-6 flex justify-center my-2 py-2">
        <button className="border-2 uppercase border-green-900 px-6 py-2 rounded-sm hover:bg-gray-300 transition duration-200 flex items-center justify-center">
          See All 
          <FaArrowRight className="ml-2" /> {/* Add icon with margin */}
        </button>
      </div>
    </div>
  );
};

export default BestSelling;