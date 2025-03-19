import React from "react";
import deepFake from "../assets/deepFake.jpg";
import { NavLink } from "react-router-dom";

const Landing = ({ uploadSectionRef }) => {
  const scrollToUpload = () => {
    uploadSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="flex items-center justify-between p-10 min-h-screen">
        {/* Left Content */}
        <div className="max-w-xl">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
          Deepfake Video Detection
          </h1>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Detect manipulated videos with cutting-edge AI technology. Ensure authenticity and stay ahead of misinformation with our advanced deepfake detection tool.
          </p>

          {/* CTA Buttons */}
          <div className="flex space-x-4">
            <button
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition font-medium"
              onClick={scrollToUpload} // Scroll to Video Upload Section
            >
              Get Started
            </button>
            <NavLink to="/contact">
            <button className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-900 transition font-medium">
              Contact Us
            </button>
            </NavLink>
            
          </div>
        </div>

        {/* Right Image */}
        <div className="w-1/2 flex justify-end">
          <img src={deepFake} alt="DeepFake Detection" className="w-full max-w-md rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
