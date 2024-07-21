import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const VerifyPhone = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const location = useLocation();
  const phoneNumber = location.state?.phoneNumber || '';
  const dialCode = location.state?.dialCode || '';

  const handleChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);

    // Automatically focus the next input field
    if (e.target.value && index < 5) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleSubmit = () => {
    const enteredOtp = otp.join('');
    console.log('Entered OTP:', enteredOtp);
    // Implement OTP verification logic here
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full text-center">
        <div className="flex items-center justify-start w-full py-4 border-b border-gray-300 mb-4">
          <Link to="/" className="text-xl font-bold"><img src={require('../../assets/images/back.png')} alt="back button" /></Link>
        </div>
        <h1 className="text-2xl font-bold mb-2">Confirm Your Phone Number</h1>
        <p className="text-gray-600 mb-6">We've sent a code to {dialCode} {phoneNumber}</p>
        
        <div className="flex justify-center mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e, index)}
              className="w-10 h-10 mx-1 border border-gray-300 rounded-md text-center text-lg"
            />
          ))}
        </div>

        <p className="text-gray-600 mb-4">
          Didn't get a code? <button className="text-teal-600">Resend</button>
        </p>

        <button 
          onClick={handleSubmit}
          className={`w-full py-3 text-white rounded-md ${otp.every(digit => digit) ? 'bg-teal-600' : 'bg-gray-400 cursor-not-allowed'}`} 
          disabled={!otp.every(digit => digit)}
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default VerifyPhone;
