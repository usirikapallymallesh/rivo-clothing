import React from "react";

const TestimonialCard = ({ heading, text }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white transition-transform duration-200 hover:scale-105 p-6">
      <h3 className="font-bold text-xl text-[#224F34] mb-4">{heading}</h3>
      <p className="text-gray-700 italic">"{text}"</p>
    </div>
  );
};

export default TestimonialCard;