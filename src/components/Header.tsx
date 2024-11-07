import { useState } from "react";
import logo from "../assets/logo4.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<Boolean>(false);

  return (
    <header>
      {/* Main Header Section */}
      <div className="flex justify-between items-center p-2 bg-blue-800 text-white">
        {/* Logo and Title */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-20 h-14" />
          <div className="text-lg font-bold">ZAK AUTOS</div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-2xl md:mr-24">
          <a href="#home" className="p-1 hover:text-gray-300">
            Home
          </a>
          <a href="#about" className="p-1 hover:text-gray-300">
            About
          </a>
          <a href="#contact" className="p-1 hover:text-gray-300">
            Contact
          </a>
          <button className="border-2 border-white rounded-lg w-28 p-1 hover:bg-white hover:text-blue-800">
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
          <a href="#home" className="hover:text-gray-300">
            Home
          </a>
          <a href="#about" className="hover:text-gray-300">
            About
          </a>
          <a href="#contact" className="hover:text-gray-300">
            Contact
          </a>
          <button className="hover:text-gray-300">Login</button>
        </nav>
      )}
    </header>
  );
};

export default Header;
