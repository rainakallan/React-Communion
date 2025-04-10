import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="p-8 sm:px-4 md:px-6 text-center">
        <h2 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-bold mb-5 pt-15">
          Connect Communities
        </h2>
        <p className="text-lg sm:text-base md:text-xl mt-10 text-gray-500">
          Bridging gaps between faiths with tech and a dash of fun!
        </p>
      </section>
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
