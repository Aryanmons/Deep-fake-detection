import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const AboveFooter = () => {
  return (
    <div className="bg-black py-8 px-6 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        
        {/* Logo & Copyright */}
        <div>
          <h2 className="text-xl font-bold">DeepFakeDetection</h2>
          <p className="mt-2 text-sm text-gray-400">2021 &copy; DeepFakeDetect All Rights Reserved</p>
        </div>

        {/* Navigation Links */}
        <div>
          <ul className="space-y-2">
            <li className="cursor-pointer hover:text-gray-300 transition-colors duration-300">
              <Link to="/">Detect</Link>
            </li>
            <li className="cursor-pointer hover:text-gray-300 transition-colors duration-300">
              <Link to="/pricing">Pricing</Link>
            </li>
            <li className="cursor-pointer hover:text-gray-300 transition-colors duration-300">
              <Link to="/about">About Us</Link> {/* Link to About page */}
            </li>
            <li className="cursor-pointer hover:text-gray-300 transition-colors duration-300">
              <Link to="/contact">Contact</Link> {/* Link to Contact page */}
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <ul className="space-y-2">
            <li className="cursor-pointer hover:text-gray-300 transition-colors duration-300">Facebook</li>
            <li className="cursor-pointer hover:text-gray-300 transition-colors duration-300">Instagram</li>
            <li className="cursor-pointer hover:text-gray-300 transition-colors duration-300">Twitter</li>
            <li className="cursor-pointer hover:text-gray-300 transition-colors duration-300">LinkedIn</li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <ul className="space-y-2">
            <li className="cursor-pointer hover:text-gray-300 transition-colors duration-300">Privacy Policy</li>
            <li className="cursor-pointer hover:text-gray-300 transition-colors duration-300">Terms of Service</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default AboveFooter;
