import React from "react";
import heroImage from "../assets/images/hero-img.png"; // Replace with your image path

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-16 px-4 md:px-10 bg-[#C2EFD4]" >
      {/* Left Side - Text and Button */}
      <div className="md:w-1/2 mb-8 md:mb-0  px-5 ">
        <h1 className="font-bold text-[#224F34] mb-6 rufina-bold   text-left">
          <span >Discover and </span> <span  >Find Your Own </span><span  >Fashion!</span>
        </h1>
        <p className="text-[24px] text-[#224F34] mb-6  ">
          Explore our curated collection of stylish clothing and accessories
          tailored to your unique taste.
        </p>
        <button className="bg-[#224F34] text-[#ffffff] px-9 py-4 rounded-sm hover:bg-green-500 transition duration-200">
          EXPLORE NOW
        </button>
      </div>

      {/* Right Side - Image */}
      <div className="md:w-1/2 flex items-center justify-end pr-12">
        <img
          src={heroImage}
          alt="Hero"
          className="max-w-md  h-auto rounded-lg "
        />
      </div>
    </section>
  );
};

export default HeroSection;
