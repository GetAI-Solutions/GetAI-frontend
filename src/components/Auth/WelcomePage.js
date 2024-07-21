import React from 'react';
import { Link } from 'react-router-dom';

const NoProductHistory = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="w-full text-center border-b border-gray-300 mb-4">
        {/* Top line */}
      </div>
      <div className="max-w-md w-full text-center">
        <img src={require('../../assets/images/phone-barcode.png')} alt="Phone Barcode" className="mx-auto mb-6" />
        <h1 className="text-2xl font-bold mb-2">No Product History</h1>
        <p className="text-gray-600 mb-6">Scan or upload to get started</p>
        <p className="text-gray-600 mb-6">Scan or upload an image of your products' barcode to identify your product</p>
        <div className="flex justify-around mb-6">
          <button className="flex flex-col items-center text-teal-600">
            <img src={require('../../assets/images/upload.png')} alt="Upload" className="w-12 h-12 mb-2" />
            <span>Upload</span>
          </button>
          <button className="flex flex-col items-center text-teal-600">
            <img src={require('../../assets/images/scan.png')} alt="Scan" className="w-12 h-12 mb-2" />
            <span>Scan</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoProductHistory;