import React, { useState, useRef } from "react";
import Landing from "../components/Landing";
import AboveFooter from "../components/AboveFooter";
import HowItWorks from "../components/HowItWorks";

const Home = () => {
  const [file, setFile] = useState(null);
  const uploadSectionRef = useRef(null); // Reference for the upload section

  return (
    <div className="min-h-screen">
      {/* Landing Section */}
      <Landing uploadSectionRef={uploadSectionRef} />

      {/* Video Upload Section */}
      <div ref={uploadSectionRef} className="flex flex-col items-center justify-center min-h-screen p-6">
        <div className="p-8 rounded-lg shadow-lg max-w-2xl w-full text-center border">
          <h1 className="text-4xl font-bold mb-4">VidShield Video Detector</h1>
          <p className="text-lg leading-relaxed mb-6">
            Upload a video to check if it's AI-generated or real. Our advanced AI model will analyze the content
            and provide you with accurate results.
          </p>

          {/* File Upload Section */}
          <div className="w-full p-6 border-dashed border-2 rounded-xl text-center cursor-pointer hover:bg-opacity-75 transition">
            <p className="font-medium">Drag & Drop your video here</p>
            <p className="text-sm">or</p>
            <input
              type="file"
              accept="video/*"
              className="mt-2 px-4 py-2 border rounded-lg cursor-pointer"
              onChange={(e) => setFile(e.target.files[0])}
            />
            {file && <p className="text-sm mt-2 font-semibold">Selected: {file.name}</p>}
          </div>

          {/* Analyze Button */}
          <button className="mt-6 px-6 py-3 rounded-lg font-medium shadow-md transition">
            Analyze Video
          </button>
        </div>
      </div>

      <HowItWorks />
      <AboveFooter />
    </div>
  );
};

export default Home;
