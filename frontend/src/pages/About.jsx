import React, { useEffect } from "react";
import a3 from "../assets/a3.jpg";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component is mounted
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-20 bg-black text-white">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-4xl w-full text-center">
        {/* Image */}
        <img
          src={a3}
          alt="Deepfake Detection Model"
          className="w-full max-w-3xl mx-auto mb-6 rounded-lg shadow-md"
        />

        {/* Title */}
        <h1 className="text-4xl font-bold mb-4">
          About Deepfake Video Detector
        </h1>

        {/* Description */}
        <p className="text-gray-300 text-lg leading-relaxed">
          Our Deepfake Video Detector is designed to help users determine
          whether a video is AI-generated or real. By leveraging
          state-of-the-art deep learning techniques, it analyzes video content
          and provides a confidence score to indicate potential deepfake
          manipulation.
        </p>

        {/* How It Works Section */}
        <div className="mt-6 border-t border-gray-500 pt-6">
          <h2 className="text-2xl font-semibold">How It Works</h2>
          <p className="text-gray-300 text-lg leading-relaxed mt-2">
            Our model utilizes a hybrid deep learning approach combining
            <span className="font-bold">EfficientNetLiteV0</span> for efficient feature extraction, TFLite for
            optimized inference, and <span className="font-bold">LSTM</span> networks for temporal sequence
            analysis. The detection pipeline employs systematic preprocessing
            methods such as face identification, frame extraction, and
            augmentation to enhance model generalization. Furthermore, edge
            computing allows real-time data processing on low-end devices such
            as Raspberry Pis, microcontrollers, and mobile phones, making
            deepfake detection accessible and efficient. Trained on the Celeb-DF
            dataset, our model learns intricate temporal and spatial anomalies
            to accurately differentiate between authentic and manipulated
            videos.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mt-6 border-t border-gray-500 pt-6">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="text-gray-300 text-lg leading-relaxed mt-2">
            By integrating this technology, we aim to assist journalists,
            researchers, and the general public in identifying manipulated media
            and ensuring the authenticity of digital content. Our commitment to
            digital security helps combat misinformation and identity fraud in
            an era of AI-generated content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
