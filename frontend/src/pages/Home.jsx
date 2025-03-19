import React, { useState, useRef } from "react";
import Landing from "../components/Landing";

const Home = () => {
  const [file, setFile] = useState(null);
  const uploadSectionRef = useRef(null); // Reference for the upload section

  return (
    <div>
      {/* Pass the ref to Landing so "Get Started" scrolls here */}
      <Landing uploadSectionRef={uploadSectionRef} />

      {/* Video Upload Section */}
      <div ref={uploadSectionRef} className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full text-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">VidShield Video Detector</h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Upload a video to check if it's AI-generated or real. Our advanced AI model will analyze the content
            and provide you with accurate results.
          </p>

          {/* File Upload Section */}
          <div className="w-full p-6 border-dashed border-2 border-gray-400 rounded-xl text-center cursor-pointer hover:bg-gray-100">
            <p className="text-gray-700 font-medium">Drag & Drop your video here</p>
            <p className="text-gray-500 text-sm">or</p>
            <input
              type="file"
              accept="video/*"
              className="mt-2 px-4 py-2 border rounded-lg text-blue-600 cursor-pointer"
              onChange={(e) => setFile(e.target.files[0])}
            />
            {file && <p className="text-sm text-green-600 mt-2 font-semibold">Selected: {file.name}</p>}
          </div>

          {/* Analyze Button */}
          <button
            className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg font-medium shadow-md hover:bg-blue-600 transition"
          >
            Analyze Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
