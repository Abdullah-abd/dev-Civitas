import React from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black text-white px-6 py-3 flex items-center justify-between shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="bg-yellow-400 text-black font-bold rounded-full px-2 py-1">
          TS
        </div>
        <span className="text-lg font-semibold">Ta-Square</span>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex space-x-6 ml-10">
        <a href="#" className="hover:text-yellow-400">
          Services
        </a>
        <a href="#" className="hover:text-yellow-400">
          About
        </a>
        <a href="#" className="hover:text-yellow-400">
          Contact
        </a>
      </div>

      {/* Search Input */}
      <div className="relative hidden md:block w-64">
        <input
          type="text"
          placeholder="Search services..."
          className="w-full rounded-md pl-10 pr-3 py-2 bg-gray-800 text-white placeholder-gray-400 outline-none"
        />
        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
      </div>

      {/* Icons and Logout */}
      <div className="flex items-center space-x-4 ml-4">
        <FaShoppingCart className="text-white cursor-pointer" />
        <div className="flex items-center space-x-2">
          <FaUser />
          <span className="text-sm font-semibold">Rahamat shaikh</span>
        </div>
        <button className="bg-yellow-400 text-black px-4 py-1 rounded hover:bg-yellow-500">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
