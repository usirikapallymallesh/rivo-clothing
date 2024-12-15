import React from "react";

const DesignerCard = ({ img, title, desc }) => {
  return (
    <div className="flex">
      <div className="h-[650px] w-[400px] rounded-lg shadow-lg transition-transform duration-200 hover:scale-105 flex flex-col bg-white">
        {/* Image Container */}
        <div className="h-[500px] w-full">
          <img src={img} alt={title} className="h-full w-full object-cover rounded-t-lg" />
        </div>

        {/* Text Container */}
        <div className="p-4 border-t border-[#224F34] flex-grow">
          <h3 className="font-bold text-lg text-[#224F34]  truncate text-center">
            {title}
          </h3>
          <p className="text-gray-700 py-4">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default DesignerCard;