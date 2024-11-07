import { useState } from "react";
import logo from "../assets/logo4.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  return (
    <header className="md:sticky">
      {/* Main Header Section */}
      <div className="flex justify-between items-center p-1 bg-blue-800 text-white taller:h-28">
        {/* Logo and Title */}
        <div className="flex items-center gap-2 md:ml-16 lg:ml-24">
          <img src={logo} alt="logo" className="w-20 h-14 taller:w-32 taller:h-24" />
          <div className="text-2xl font-bold taller:text-5xl">ZAK AUTOS</div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-lg md:mr-16 lg:mr-24 taller:text-5xl">
          <a href="#home" className="p-1 hover:text-gray-300 taller:mt-1">
            Home
          </a>
          <a href="#about" className="p-1 hover:text-gray-300 taller:mt-1">
            About
          </a>
          <a href="#contact" className="p-1 hover:text-gray-300 taller:mt-1">
            Contact
          </a>
          <button className="border-2 border-white rounded-lg w-fit p-1 hover:bg-white hover:text-blue-800 taller:p-3 taller:w-fit taller:mb-2">
            Login
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-blue-700 text-white flex flex-col items-center py-4 space-y-2">
          <a
            href="#home"
            className="w-full p-3 text-center hover:bg-white hover:text-blue-800">
            Home
          </a>
          <a
            href="#about"
            className="w-full p-3 text-center hover:bg-white hover:text-blue-800">
            About
          </a>
          <a
            href="#contact"
            className="w-full p-3 text-center hover:bg-white hover:text-blue-800">
            Contact
          </a>
          <button className="w-full p-3 text-center hover:bg-white hover:text-blue-800">
            Login
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;
