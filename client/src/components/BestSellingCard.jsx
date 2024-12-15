import React from "react";

const BestSellingCard = ({ img, title, price }) => {
  return (
    <div className=" flex">
      <div className="h-[600px] w-[400px]  rounded-lg shadow-lg transition-transform duration-200 hover:scale-105 flex flex-col">
        {/* Image Container */}
        <div className="h-[500px] w-full bg-[#A9D4BA] ">
          <img src={img} alt={title} className="h-full w-full object-cover" />
        </div>

        {/* Text Container */}
        <div className="p-4 border-[#224F34] flex-grow">
          <h3 className="font-bold text-lg text-[#224F34] mb-2 truncate">
            {title}
          </h3>
          <span className="text-xl text-[#2A7D3D]">{price}</span>
        </div>
      </div>
    </div>
  );
};

export default BestSellingCard;
