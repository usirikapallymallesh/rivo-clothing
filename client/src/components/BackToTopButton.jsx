import React, { useEffect, useState } from "react";
import car from "../assets/images/BackToTopIcon.png";
const BackToTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false); // State for button click
  const [buttonPosition, setButtonPosition] = useState(4); // Initial bottom position

  const [showSpan, setShowSpan] = useState(false); // State to control span visibility

  const handleMouseEnter = () => {
    setShowSpan(true); // Show span on hover
  };

  const handleMouseLeave = () => {
    setShowSpan(false); // Hide span when not hovering
  };

  const handleShowLight = () => {
    setShowSpan((prev) => !prev); // Toggle span visibility on click
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Show or hide button based on scroll position
      if (scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }

      // Reset button position if not clicked
      if (!isButtonClicked) {
        setButtonPosition(4); // Reset to original position
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isButtonClicked]); // Dependency array includes isButtonClicked

  const handleClick = () => {
    setIsButtonClicked(true); // Set clicked state
    window.scrollTo({ top: 0, behavior: "smooth" });
    setButtonPosition(900);

    // // Reset clicked state after a delay
    setTimeout(() => {
      setIsButtonClicked(false);
    }, 2000); // Adjust this delay as needed
  };

  return (
    <div>
      {backToTopButton && (
        <div
          onClick={handleClick}
          className="text-white text-xl fixed right-4  rounded-xl transition-opacity duration-300 flex items-center cursor-pointer"
          style={{
            bottom: `${isButtonClicked ? buttonPosition : 4}px`, // Adjust bottom position dynamically
            transition: "bottom 1.2s linear", // Smooth transition for position change
          }}
        >
          <div className="relative">
            {showSpan && (
              <>
                <span className="absolute left-[26px] bg-white h-2 w-2 rounded-full  blur-sm text-white brightness-90"></span>
                <span className="absolute right-[27px] bg-white h-2 w-2 rounded-full blur-sm text-white brightness-90"></span>
              </>
            )}
            <img
              src={car}
              alt="back to top"
              className="h-14"
              title="back to top"
              onClick={handleShowLight}
            />
            {/* Right Dot */}
          </div>
        </div>
      )}
    </div>
  );
};

export default BackToTopButton;
