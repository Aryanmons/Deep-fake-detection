import React from 'react';

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20 border-t border-gray-300 px-6'>
      {/* Left Side - Copyright */}
      <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>
        Copyright © Rishikesh.dev | All rights reserved.
      </p>

      {/* Right Side - Terms & Privacy Policy */}
      <div className='flex gap-6 text-sm text-gray-500'>
        <a href="/terms" className="hover:text-blue-600 transition">Terms of Service</a>
        <a href="/privacy" className="hover:text-blue-600 transition">Privacy Policy</a>
      </div>
    </div>
  );
};

export default Footer;
