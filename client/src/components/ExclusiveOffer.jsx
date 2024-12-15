import React, { useEffect, useState } from "react";
import offerIcon from "../assets/images/exclusive-offer.png";

const ExclusiveOffer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    // Set the target date for the countdown
    const targetDate = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000); // 2 days from now

    const interval = setInterval(() => {
      const now = new Date();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      setTimeLeft({ days, hours, minutes });
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-20  ">
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 bg-[#C2EFD4] rounded-md shadow-lg ">
      {/* Left Side Image */}
      <div className="md:w-1/3 mb-4 md:mb-0">
        <img
          src={offerIcon}
          alt="Exclusive Offer"
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>

      {/* Right Side Text and Button */}
      <div className="md:w-1/2 md:pl-6">
        <h2 className="text-2xl font-bold text-[#224F34] roboto-slab-item mb-6 ">
          Exclusive Offer Just for You!
        </h2>
        <p className="text-gray-700 mb-4 text-xl">
          Unlock the ultimate style upgrade with our exclusive offer! Enjoy
          savings of up to 40% off on our latest New Arrivals.
        </p>

        {/* Countdown Timer */}
        <div className="flex justify-between space-x-4 mb-10  my-10 w-16">
          <div className="text-center border bg-white p-4 px-5">
            <div className="text-3xl font-bold">{timeLeft.days}</div>
            <div className="text-xl text-gray-600">Days</div>
          </div>
          <div className="text-center bg-white p-5 px-5">
            <div className="text-3xl font-bold">{timeLeft.hours}</div>
            <div className="text-xl text-gray-600">Hours</div>
          </div>
          <div className="text-center bg-white p-4 px-5">
            <div className="text-3xl font-bold">{timeLeft.minutes}</div>
            <div className="text-xl text-gray-600">Minutes</div>
          </div>
        </div>

        <button className="bg-[#224F34] text-white px-8 py-3 rounded-sm  hover:bg-green-700 transition duration-200">
          BUY NOW
        </button>
      </div>
      </div>
    </div>
  );
};

export default ExclusiveOffer;
