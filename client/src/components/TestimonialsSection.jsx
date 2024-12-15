import React, { useState } from "react";
import {
  FaQuoteLeft,
  FaQuoteRight,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Jane Doe",
    title: "Fashion Enthusiast",
    text: "The designer clothes I purchased are of exceptional quality and style.",
  },
  {
    id: 2,
    name: "John Smith",
    title: "Satisfied Customer",
    text: "I love shopping here! The selection is fantastic and the service is top-notch.",
  },
  {
    id: 3,
    name: "Emily Johnson",
    title: "Happy Shopper",
    text: "Great selection and amazing service! I will definitely come back for more.",
  },
  {
    id: 4,
    name: "Michael Brown",
    title: "Loyal Customer",
    text: "The best shopping experience I've ever had!",
  },
  {
    id: 5,
    name: "Sarah Wilson",
    title: "Fashion Lover",
    text: "I always find what I'm looking for here.",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonialsPerPage = 3;

  const nextTestimonials = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + testimonialsPerPage >= testimonials.length
        ? 0
        : prevIndex + testimonialsPerPage
    );
  };

  const prevTestimonials = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - testimonialsPerPage < 0
        ? Math.max(0, testimonials.length - testimonialsPerPage)
        : prevIndex - testimonialsPerPage
    );
  };

  return (
    <div className="my-8 p-6 rounded-lg ">
      <h2 className="text-center font-bold text-3xl text-[#224F34] mb-6 roboto-slab-item">
      Feedback Corner
      </h2>
      <div className="flex flex-col">
        <div className="flex flex-wrap justify-center gap-4 w-full">
          {testimonials
            .slice(currentIndex, currentIndex + testimonialsPerPage)
            .map((testimonial) => (
              <div
                key={testimonial.id}
                className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white p-4 flex flex-col"
              >
                <FaQuoteLeft className="text-4xl text-[#224F34] mb-2" />
                <p className="text-gray-700 italic text-center mb-2">
                  "{testimonial.text}"
                </p>
                <h3 className="font-bold text-lg text-[#224F34]">
                  {testimonial.name}
                </h3>
                <p className="text-gray-600">{testimonial.title}</p>
                <FaQuoteRight className="text-4xl text-[#224F34] mt-2" />
              </div>
            ))}
        </div>
        <div className="flex  justify-center py-4 gap-6 mt-4">
          <button
            onClick={prevTestimonials}
            className="flex items-center bg-gray-300 p-2 rounded-md hover:bg-gray-400 transition duration-200"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextTestimonials}
            className="flex items-center bg-gray-300 p-2 rounded-md hover:bg-gray-400 transition duration-200"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
