import React, { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import logo from "../assets/header/Group.png";

function Header() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark" || false;
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <header className="shadow-md dark:bg-gray-900 dark:text-white sticky top-0 z-50 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src={logo}
            alt="Logo"
            className="h-10 dark:invert dark:brightness-150 transition duration-300"
          />
        </div>

        {/* Center Nav Links (Desktop) */}
        <nav className="hidden md:flex space-x-6 font-medium">
        <a
            href="#profile"
            className="border p-2 rounded-md border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-500 transition-colors duration-200"
          >
            Profile
          </a>
          <a
            href="#about"
            className="border p-2 rounded-md border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-500 transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#project"
            className="border p-2 rounded-md border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-500 transition-colors duration-200"
          >
            Project
          </a>
          <a
            href="#contact"
            className="border p-2 rounded-md border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-500 transition-colors duration-200"
          >
            Contact
          </a>
        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-4 p-4">
        <a
            href="#profile"
            className="text-sm p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-500 transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Profile
          </a>
          <a
            href="#about"
            className="text-sm p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-500 transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#project"
            className="text-sm p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-500 transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Project
          </a>
          <a
            href="#contact"
            className="text-sm p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-500 transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
