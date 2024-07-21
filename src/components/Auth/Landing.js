import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="max-w-md w-full text-center">
        <img src={require('../../assets/images/Frame.png')} alt="Logo" className="mx-auto mb-6 w-10 h-10" />
        <img src={require('../../assets/images/logo.png')} alt="Logo" className="mx-auto mb-6 w-40 h-30" />
        <h1 className="text-2xl font-bold mb-4">Create your GetAI account</h1>
        <p className="text-gray-600 mb-8">
          GetAI is an AI-powered barcode scanner providing comprehensive, localized product information for African consumers.
        </p>
        <Link to="/signup">
          <button className="w-full py-3 mb-4 bg-teal-600 text-white rounded-md">
            Sign up
          </button>
        </Link>
        <Link to="/login">
          <button className="w-full py-3 mb-4 border border-teal-600 text-teal-600 rounded-md">
            Log in
          </button>
        </Link>
        <p className="text-sm text-gray-600">
          By continuing you accept our <a href="#" className="underline">Terms of Service</a> and <a href="/" className="underline">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
};

export default Landing;
