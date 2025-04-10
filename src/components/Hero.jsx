import React from "react";
import { useNavigate } from "react-router-dom";
import image1 from "../assets/image1.webp";
import image2 from "../assets/image2.avif";
import image3 from "../assets/image3.avif";
import smallcard from "../assets/small-card-1.png";
import smallcard2 from "../assets/small-card2.png";
import smallcard3 from "../assets/small-card-3.png";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-10 py-8 max-w-screen-lg mx-auto flex-grow">
      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-12">
        Connecting People Across Faiths & Interests.
      </h3>
      {/* Hero Tagline */}
      <div className="mb-12 flex flex-col sm:flex-row">
        <div className="flex flex-col items-center sm:items-start mb-12">
          <span className="flex text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            "Unite, Innovate,
            <img
              src={smallcard}
              alt="smallcard"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />
          </span>

          <span className="flex text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-2 ">
            <img
              src={smallcard2}
              alt="smallcard2"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />
            Connect, Inspires
          </span>

          <span className="flex  text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-2">
            Together
            <img
              src={smallcard3}
              alt="smallcard3"
              className="w-20 h-auto sm:w-24 md:w-28 object-contain"
            />
          </span>
        </div>
        {/* Hero images */}
        <div className="flex flex-row sm:flex-row gap-8 sm:ml-[50px] relative">
          <img
            src={image3}
            className="w-32 h-64 object-cover rounded-b-full rounded-t-full relative -top-5 "
          />
          <img
            src={image2}
            className="w-32 h-64 object-cover rounded-b-full rounded-t-full"
          />
          <img
            src={image1}
            className="w-32 h-64 object-cover rounded-b-full rounded-t-full relative -bottom-5"
          />
        </div>
      </div>

      <p className=" text-xl sm:text-base md:text-lg lg:text-xl text-center max-w-prose  text-black">
        Join us to be part of a community where spirituality meets innovation.
        Together, <br />
        we'll build a world that's more inclusive, engaging, and connected than
        ever before!
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
