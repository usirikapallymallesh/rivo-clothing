import React from "react";
import { FaArrowRight } from "react-icons/fa"; // Import the desired icon
import bestone from "../assets/images/designer-1.png";
import besttwo from "../assets/images/designer-2.png";
import bestthree from "../assets/images/designer-3.png";
import DesignerCard from "./DesignerCard";

const DesignerSection = () => {
  return (
    <div className="my-4 p-6 rounded-lg bg-white">
      <h2 className="text-center font-bold text-3xl py-4 text-[#224F34] roboto-slab-item">
        Designer Clothes For You
      </h2>
      <p className="text-center py-2 pb-7 text-xl text-[#748d7e]">
        Immerse yourself in the world of luxury fashion with our meticulously crafted designer clothes!
      </p>

      {/* Product Cards Container */}
      <div className="flex flex-wrap justify-center gap-6 mb-6">
        {/* Product Cards */}
        <DesignerCard
          img={bestone}
          title="Designer Accessories"
          desc="Complete your ensemble with designer accessories such as handbags, scarves, belts, and hats."
        />
        <DesignerCard
          img={besttwo}
          title="Floral Printed Sweater"
          desc="Explore a stunning range of designer dresses, including evening gowns and chic day dresses."
        />
        <DesignerCard
          img={bestthree}
          title="Printed Cotton Dress"
          desc="Browse luxurious designer coats, jackets, and blazers to stay stylishly warm during colder seasons."
        />
      </div>
  
     
    </div>
  );
};

export default DesignerSection;