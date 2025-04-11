import React from "react";
import { useNavigate } from "react-router-dom";
import image1 from "../assets/image1.webp";
import image2 from "../assets/image2.avif";
import image3 from "../assets/image3.avif";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-10 py-8 max-w-screen-xl mx-auto flex-grow">
      <h3 className="text-xl sm:text-2xl md:text-3xl mx-auto lg:text-4xl font-semibold text-center mb-12">
        Connecting People Across Faiths & Interests.
      </h3>
      {/* Hero Tagline */}
      <div className="mb-12 flex flex-col sm:flex-row">
        <div className="flex flex-col items-center sm:items-start mb-12 sm:w-1/2 sm:pr-4 gap-y-4">
          <span className="flex text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            "Unite, Innovate,
          </span>

          <span className="flex text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold ">
            Connect, Inspires
          </span>

          <span className="flex  text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            Together
          </span>
        </div>
        {/* Hero images */}
        <div className="flex flex-row px-4 sm:flex-row gap-8 sm:gap-16 sm:w-1/2 relative">
          <img
            src={image3}
            className="w-24 h-48 sm:w-28 sm:h-64 md:w-32 md:h-72 lg:w-36 lg:h-80 object-cover rounded-b-full rounded-t-full relative -top-5 "
          />
          <img
            src={image2}
            className="w-24 h-48 sm:w-28 sm:h-64 md:w-32 md:h-72 lg:w-36 lg:h-80 object-cover rounded-b-full rounded-t-full"
          />
          <img
            src={image1}
            className="w-24 h-48 sm:w-28 sm:h-64 md:w-32 md:h-72 lg:w-36 lg:h-80 object-cover rounded-b-full rounded-t-full relative -bottom-5"
          />
        </div>
      </div>

      <p className=" text-xl sm:text-base md:text-lg md:text-left md:ml-16 lg:text-xl max-w-2xl text-center mx-auto text-black">
        Join us to be part of a community where spirituality meets innovation.
        Together, we'll build a world that's more inclusive, engaging, and
        connected than ever before!
      </p>

      <div className="flex justify-center">
        <button
          onClick={() => navigate("/events")}
          className="inline-flex items-center justify-center 
          bg-blue-600 text-white 
          text-sm sm:text-base md:text-lg 
          px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 
          rounded-xl shadow-lg mt-10 
          hover:bg-blue-700 active:scale-95 
          transition duration-300 ease-in-out"
        >
          Explore Events
        </button>
      </div>
    </section>
  );
};

export default Hero;
