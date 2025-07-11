import React, { useState } from "react";
import {
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-black text-white px-6 py-3 shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="bg-yellow-400 text-black font-bold rounded-full px-2 py-1">
            TS
          </div>
          <span className="text-lg font-semibold">Ta-Square</span>
        </div>

        {/* Hamburger Icon (Mobile Only) */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="hover:text-yellow-400">
            Services
          </a>
          <a href="#" className="hover:text-yellow-400">
            About
          </a>
          <a href="#" className="hover:text-yellow-400">
            Contact
          </a>

          <div className="relative w-64">
            <input
              type="text"
              placeholder="Search services..."
              className="w-full rounded-md pl-10 pr-3 py-2 bg-gray-800 text-white placeholder-gray-400 outline-none"
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

          <FaShoppingCart className="cursor-pointer" />
          <div className="flex items-center space-x-2">
            <FaUser />
            <span className="text-sm font-semibold">Rahamat shaikh</span>
          </div>
          <button className="bg-yellow-400 text-black px-4 py-1 rounded hover:bg-yellow-500">
            Logout
          </button>
        </div>
      </div>

      {/* Mobile Menu (conditionally shown) */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <a href="#" className="block hover:text-yellow-400">
            Services
          </a>
          <a href="#" className="block hover:text-yellow-400">
            About
          </a>
          <a href="#" className="block hover:text-yellow-400">
            Contact
          </a>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search services..."
              className="flex-1 rounded-md pl-3 pr-3 py-2 bg-gray-800 text-white placeholder-gray-400 outline-none"
            />
            <FaSearch className="text-gray-400" />
          </div>
          <div className="flex items-center gap-2">
            <FaUser />
            <span>Rahamat shaikh</span>
          </div>
          <FaShoppingCart className="text-white" />
          <button className="bg-yellow-400 text-black px-4 py-1 rounded hover:bg-yellow-500 w-full">
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
