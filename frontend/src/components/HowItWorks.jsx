import React from "react";
import { FaCamera, FaBrain, FaMobileAlt, FaDatabase } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <div className="bg-black py-12 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">How It Works</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-md hover:bg-gray-700 transition-all duration-300">
            <FaCamera className="text-4xl mx-auto text-blue-400" />
            <h3 className="text-xl font-semibold mt-4 text-white">Data Preprocessing</h3>
            <p className="text-gray-300 mt-2">
              Face detection, frame extraction, and augmentation enhance model generalization.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-md hover:bg-gray-700 transition-all duration-300">
            <FaBrain className="text-4xl mx-auto text-green-400" />
            <h3 className="text-xl font-semibold mt-4 text-white">Feature Extraction</h3>
            <p className="text-gray-300 mt-2">
              EfficientNetLiteV0 extracts spatial features, aiding deepfake detection.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-md hover:bg-gray-700 transition-all duration-300">
            <FaDatabase className="text-4xl mx-auto text-purple-400" />
            <h3 className="text-xl font-semibold mt-4 text-white">Deep Learning Analysis</h3>
            <p className="text-gray-300 mt-2">
              LSTM networks analyze temporal sequences to detect deepfake patterns.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-md hover:bg-gray-700 transition-all duration-300">
            <FaMobileAlt className="text-4xl mx-auto text-red-400" />
            <h3 className="text-xl font-semibold mt-4 text-white">Real-Time Processing</h3>
            <p className="text-gray-300 mt-2">
              Edge computing ensures optimal performance on low-end devices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
