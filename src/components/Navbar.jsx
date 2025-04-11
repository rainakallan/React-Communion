import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="fixed top-0 left-0 right-0 shadow-sm bg-white text-black z-50 ">
      <div className="flex justify-between items-center px-4 sm:px-6 py-5">
        <img
          src={logo}
          alt="Communion"
          className="h-auto w-[150px] sm:w-[180px]"
        />
        <nav className="hidden sm:flex justify-center gap-10 font-semibold text-lg">
          <Link to="/">Home</Link>
          <Link to="/events">Events</Link>
        </nav>
        {/* Hamburger Menu */}
        <div
          className="sm:hidden fixed top-5 right-5 z-50 cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </div>
      </div>
      {/* Navigation Link */}

      {/* Mobile view nav */}
      {isOpen && (
        <div
          className=" sm:hidden absolute top-0
         left-0 w-50 h-screen bg-white flex flex-col items-start px-6 py-10  gap-6
         text-xl font-semibold z-40 shadow-lg"
        >
          <Link className="pl-2" to="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link className="pl-2" to="/events" onClick={toggleMenu}>
            Events
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
