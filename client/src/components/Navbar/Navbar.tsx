import React, { useState } from "react";
import { FaBars, FaChevronDown, FaTimes, FaUser } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [role, setRole] = useState<"user" | "employer">("user");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  return (
    <nav className="bg-mutedGreen text-white px-6 py-3 shadow-md min-h-[64px]">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-[50px] h-[50px] object-contain"
          />
        </div>

        {/* Hamburger Icon */}
        <div className="nav:hidden">
          <button onClick={toggleMenu}>
            {isMobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden nav:flex items-center space-x-6">
          <a href="#" className="hover:text-accent transition">
            Home
          </a>
          <a href="#" className="hover:text-accent transition">
            About
          </a>
          <a href="#" className="hover:text-accent transition">
            Services
          </a>

          {/* Role Dropdown */}
          <div className="relative">
            <button
              className="flex items-center gap-2 hover:text-accent transition"
              onClick={toggleDropdown}
            >
              <FaUser />
              <span className="capitalize">{role}</span>
              <FaChevronDown size={12} />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white text-mutedGreen rounded shadow-md z-50">
                <button
                  className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                  onClick={() => {
                    setRole("user");
                    setIsDropdownOpen(false);
                  }}
                >
                  User
                </button>
                <button
                  className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                  onClick={() => {
                    setRole("employer");
                    setIsDropdownOpen(false);
                  }}
                >
                  Employer
                </button>
              </div>
            )}
          </div>

          {/* Auth Buttons */}
          <button className="bg-secondary text-white px-4 py-1 rounded hover:bg-[#b84850] transition">
            Login
          </button>
          <button className="bg-accent text-white px-4 py-1 rounded hover:bg-[#d94646] transition">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="nav:hidden mt-4 space-y-4">
          <a href="#" className="block hover:text-accent">
            Home
          </a>
          <a href="#" className="block hover:text-accent">
            About
          </a>
          <a href="#" className="block hover:text-accent">
            Services
          </a>

          {/* Role Dropdown */}
          <div className="relative">
            <button
              className="flex items-center gap-2 hover:text-accent"
              onClick={toggleDropdown}
            >
              <FaUser />
              <span className="capitalize">{role}</span>
              <FaChevronDown size={12} />
            </button>
            {isDropdownOpen && (
              <div className="mt-2 bg-white text-mutedGreen rounded shadow-md z-50">
                <button
                  className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                  onClick={() => {
                    setRole("user");
                    setIsDropdownOpen(false);
                  }}
                >
                  User
                </button>
                <button
                  className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                  onClick={() => {
                    setRole("employer");
                    setIsDropdownOpen(false);
                  }}
                >
                  Employer
                </button>
              </div>
            )}
          </div>

          {/* Auth Buttons */}
          <button className="bg-secondary text-white px-4 py-1 rounded w-full hover:bg-[#b84850] transition">
            Login
          </button>
          <button className="bg-accent text-white px-4 py-1 rounded w-full hover:bg-[#d94646] transition">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
