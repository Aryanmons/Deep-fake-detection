import React from "react";
import a3 from "../assets/a3.jpg";
const About = () => {
    
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100 bg-black min-h-screen text-white">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full text-center">
        <img
          src={a3}
          alt="Deepfake Detection Model"
          className="w-full max-w-3xl mx-auto mb-6 rounded-lg shadow-md"
        />
        <h1 className="text-4xl font-bold text-blue-600 mb-4">About Deepfake Video Detector</h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          Our Deepfake Video Detector helps users determine whether a video is AI-generated or real.
          Using cutting-edge machine learning techniques, it analyzes video content and provides a confidence score
          to indicate potential deepfake manipulation.
        </p>
        <div className="mt-6 border-t pt-6">
          <h2 className="text-2xl font-semibold text-gray-800">How It Works</h2>
          <p className="text-gray-700 text-lg leading-relaxed mt-2">
            Our model leverages deep learning architectures like <span className="font-bold">ResNeXt</span> and
            <span className="font-bold"> LSTM</span> to analyze video frames, detect synthetic modifications,
            and generate accurate predictions. It has been trained on diverse datasets to improve reliability and precision.
          </p>
        </div>
        <div className="mt-6 border-t pt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed mt-2">
            By integrating this technology, we aim to assist journalists, researchers, and the general public in
            identifying manipulated media and ensuring the authenticity of digital content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;