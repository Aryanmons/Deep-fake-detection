import React from "react";

const AboveFooter = () => {
  return (
    <div className="bg-gray-800 py-8 px-6 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <h2 className="text-xl font-bold">DeepFakeDe</h2>
          <p className="mt-2 text-sm">2021 &copy; DeepFakeDetect All</p>
        </div>
        
        <div>
          <ul className="space-y-2">
            <li className="cursor-pointer hover:text-gray-400">Detect</li>
            <li className="cursor-pointer hover:text-gray-400">Pricing</li>
            <li className="cursor-pointer hover:text-gray-400">About us</li>
            <li className="cursor-pointer hover:text-gray-400">Contact</li>
          </ul>
        </div>
        
        <div>
          <ul className="space-y-2">
            <li className="cursor-pointer hover:text-gray-400">Facebook</li>
            <li className="cursor-pointer hover:text-gray-400">Instagram</li>
            <li className="cursor-pointer hover:text-gray-400">Twitter</li>
            <li className="cursor-pointer hover:text-gray-400">LinkedIn</li>
          </ul>
        </div>
        
        <div>
          <ul className="space-y-2">
            <li className="cursor-pointer hover:text-gray-400">Privacy Policy</li>
            <li className="cursor-pointer hover:text-gray-400">Terms Of Service</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboveFooter;