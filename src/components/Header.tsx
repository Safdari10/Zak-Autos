import { useState } from "react";
import logo from '../assets/logo4.png'

const Header = () => {
  const [ismobileMenuOpen, setIsMobileMenuOpen] = useState <Boolean>(false);

  return (
    <header>
      <div className="flex justify-between items-center p-2 bg-blue-800 text-white ">

        <div className="flex justify-center items-center gap-2 md:ml-36 " >
          <img src={logo} alt="logo" className="w-20 h-14" />
          <div className="text-lg font-bold">ZAK AUTOS</div></div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-6 mr-36 text-2xl" >
          <a href="#home" className="p-1 hover:text-gray-300">Home</a>
          <a href="#about" className="p-1 hover:text-gray-300">About</a>
          <a href="#contact" className="p-1 hover:text-gray-300">Contact</a>
          <button className="border-solid border-2 border-white rounded-lg w-28 p-1 hover:text-blue-800 hover:bg-white ">Login</button>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!ismobileMenuOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile navigation menu */}
      {ismobileMenuOpen && (
        <nav className="md:hidden bg-blue-700 text-white flex flex-col items-center space-y-2 py-4">
          <a href="#home" className="hover:text-gray-300">Home</a>
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
          <button className="hover:text-gray-300">Login</button>
        </nav>
      )}
    </header>
  );
};

export default Header;
