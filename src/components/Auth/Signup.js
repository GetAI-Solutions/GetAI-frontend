import React from 'react';
import { Link } from 'react-router-dom';

const SignupPhone = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full text-center">
        <div className="flex items-center justify-start w-full py-4 border-b border-gray-300 mb-4">
          <Link to="/" className="text-xl font-bold"><img src={require('../../assets/images/back.png')} alt="back button" /> </Link>
        </div>
        <h1 className="text-2xl font-bold mb-2">Create an Account</h1>
        <p className="text-gray-600 mb-6">Enter your mobile number to verify your account</p>
        
        <div className="mb-4">
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
            <img src={require('../../assets/images/flag.png')} alt="Country Code" className="w-6 h-6 mr-2" />
            <span className="mr-2">+251</span>
            <input 
              type="text"
              placeholder="Mobile Number"
              className="flex-grow bg-transparent outline-none"
            />
          </div>
        </div>
        
        <div className="mb-6">
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
            <img src={require('../../assets/images/Privacy.png')} alt="Password" className="w-6 h-6 mr-2" />
            <input 
              type="password"
              placeholder="Password"
              className="flex-grow bg-transparent outline-none"
            />
            <button className="text-gray-600">
              <img src={require('../../assets/images/Eye.png')} alt="Show Password" className="w-6 h-6" />
            </button>
          </div>
        </div>

        <button className="w-full py-3 bg-gray-400 text-black rounded-md cursor-not-allowed mt-52" disabled>
          Sign up
        </button>
      </div>
    </div>
  );
};

export default SignupPhone;

