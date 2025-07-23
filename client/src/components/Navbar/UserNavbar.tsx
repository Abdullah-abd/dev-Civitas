import React, { useState } from "react";

import {
  FaBars,
  FaSearch,
  FaShoppingCart,
  FaTimes,
  FaUser,
} from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-[#394E4A] text-white px-6 py-3 shadow-md min-h-[64px]">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-[50px] h-[50px] object-contain"
          />
        </div>

        {/* Hamburger Icon (Mobile Only) */}
        <div className="nav:hidden">
          <button onClick={toggleMenu}>
            {isMobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden nav:flex items-center space-x-6">
          <a href="#" className="hover:text-accent transition">
            Challenges
          </a>
          <a href="#" className="hover:text-accent transition">
            Learn
          </a>
          <a href="#" className="hover:text-accent transition">
            Jobs
          </a>

          <div className="relative w-64">
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-md pl-10 pr-3 py-2 bg-gray-800 text-white placeholder-gray-400 outline-none"
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

          {/* <FaShoppingCart className="cursor-pointer" /> */}
          <div className="flex items-center space-x-2">
            <FaUser />
            <span className="text-sm font-semibold">Rahamat shaikh</span>
          </div>
          <button className="bg-[#E7556E] text-white px-4 py-1 rounded hover:bg-[#d4435c] transition">
            Logout
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="nav:hidden mt-4 space-y-4">
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
          <button className="bg-[#E7556E] text-white px-4 py-1 rounded hover:bg-[#d4435c] w-full">
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
