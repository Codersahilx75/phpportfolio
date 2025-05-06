import React from "react";
import logo from "../assets/header/Group.png";
import { Twitter, Linkedin, Github, Facebook } from "lucide-react";

function Footer() {
  return (
    <footer className="dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-6 mt-8">
      {/* Centered Logo */}
      <div className="flex justify-center mb-4">
        <img
          src={logo}
          alt="Footer Logo"
          className="h-10 dark:invert dark:brightness-150 transition duration-300"
        />
      </div>

      {/* Nav Links */}
      <ul className="flex flex-wrap justify-center gap-6 font-medium text-sm text-gray-700 dark:text-gray-300 mb-4">
        <li className="hover:underline cursor-pointer">About</li>
        <li className="hover:underline cursor-pointer">Project</li>
        <li className="hover:underline cursor-pointer">Contact</li>
      </ul>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mb-4">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Twitter className="w-5 h-5 hover:text-blue-500 transition" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-5 h-5 hover:text-blue-500 transition" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <Github className="w-5 h-5 hover:text-blue-500 transition" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <Facebook className="w-5 h-5 hover:text-blue-500 transition" />
        </a>
      </div>

      {/* Bottom Text with Top Border */}
      <div className="border-t border-gray-900 dark:border-green-400 pt-4 text-center text-xs sm:text-sm">
        © 2025 My Website
      </div>
    </footer>
  );
}

export default Footer;
