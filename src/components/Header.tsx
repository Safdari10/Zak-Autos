import { useState } from "react";

const Header = () => {
  const [ismobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header>
      <div className="flex justify-between items-center p-4 bg-blue-800 text-white">
        <div className="text-lg font-bold">Zak Autos</div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-6">
          <a href="#home" className="hover:text-gray-300">Home</a>
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
          <button className="hover:text-gray-300">Login</button>
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
