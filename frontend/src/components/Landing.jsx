import React from "react";
import deepFake from "../assets/deepFake.jpg";
import { NavLink } from "react-router-dom";

const Landing = ({ uploadSectionRef }) => {
  const scrollToUpload = () => {
    uploadSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-10">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center w-full max-w-6xl">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">
            Deepfake Video Detection
          </h1>
          <p className="text-lg mb-6 leading-relaxed tracking-wide">
            Detect manipulated videos with cutting-edge AI technology. Ensure authenticity and stay ahead of misinformation with our advanced deepfake detection tool.
          </p>

          {/* CTA Buttons */}
          <div className="flex space-x-4 justify-center md:justify-start">
            <button
              className="px-6 py-3 rounded-xl shadow-md transition font-medium"
              onClick={scrollToUpload}
            >
              Get Started
            </button>
            <NavLink to="/contact">
              <button className="px-6 py-3 rounded-xl shadow-md transition font-medium">
                Contact Us
              </button>
            </NavLink>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img
            src={deepFake}
            alt="DeepFake Detection"
            className="w-full max-w-sm md:max-w-md rounded-xl shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
