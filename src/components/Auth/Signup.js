import React, { useState } from 'react';
import { components } from 'react-select';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import Flag from 'react-world-flags';
import { Link, useNavigate } from 'react-router-dom';

const SignupPhone = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({ value: 'ET', label: 'Ethiopia', dialCode: '+251' });
  const navigate = useNavigate()

  const countries = countryList().getData().map(country => ({
    ...country,
    dialCode: `+${country.dial_code}`
  }));

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUpClick = () => {
    setShowModal(true);
  };

  const handleEditClick = () => {
    setShowModal(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const customSingleValue = ({ data }) => (
    <div className="flex items-center">
      <Flag code={data.value} className="mr-2" style={{ width: '20px', height: '15px' }} />
      {data.dialCode}
    </div>
  );

  const customOption = (props) => {
    const { data } = props;
    return (
      <components.Option {...props}>
        <div className="flex items-center">
          <Flag code={data.value} className="mr-2" style={{ width: '20px', height: '15px' }} />
          {data.dialCode} - {data.label}
        </div>
      </components.Option>
    );
  };

  const handleContinue = () => {
    navigate({
      pathname: '/email-signup',
      state: {
        phoneNumber,
        dialCode: selectedCountry.dialCode
      }
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full text-center">
        <div className="flex items-center justify-start w-full py-4 border-b border-gray-300 mb-4">
          <Link to="/" className="text-xl font-bold"><img src={require('../../assets/images/back.png')} alt="back button" /></Link>
        </div>
        <h1 className="text-2xl font-bold mb-2">Create an Account</h1>
        <p className="text-gray-600 mb-6">Enter your mobile number to verify your account</p>
        
        <div className="mb-4">
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
            <Select 
              options={countries} 
              value={selectedCountry} 
              onChange={setSelectedCountry} 
              components={{ SingleValue: customSingleValue, Option: customOption }} 
              className="w-28"
              styles={{ control: (provided) => ({ ...provided, border: 'none', boxShadow: 'none' }) }}
            />
            <input 
              type="text"
              placeholder="Mobile Number"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              className="flex-grow bg-transparent outline-none pl-2"
            />
          </div>
        </div>
        
        <div className="mb-6">
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
            <input 
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              className="flex-grow bg-transparent outline-none"
            />
            <button onClick={togglePasswordVisibility} className="text-gray-600">
              <img src={showPassword ? require('../../assets/images/Privacy.png') : require('../../assets/images/Eye.png')} alt="Toggle Password" className="w-6 h-6" />
            </button>
          </div>
        </div>

        <button 
          onClick={handleSignUpClick}
          className={`w-full py-3 text-white rounded-md mt-56 ${phoneNumber && password ? 'bg-teal-600' : 'bg-gray-400 cursor-not-allowed'}`} 
          disabled={!phoneNumber || !password}
        >
          Sign up
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 text-center w-10/12 max-w-md">
            <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-2xl">&times;</button>
            <img src={require('../../assets/images/pop.png')} alt="Confirmation" className="mx-auto mb-4 w-20 h-20" />
            <h2 className="text-xl font-bold mb-2">Confirm Your Phone Number</h2>
            <p className="text-gray-600 mb-4">Is this correct? {selectedCountry.code} {phoneNumber}</p>
            <button 
              onClick={handleContinue} 
              className="w-full py-3 bg-teal-600 text-white rounded-md mb-4"
            >
              Continue
            </button>
            <button 
              onClick={handleEditClick} 
              className="w-full py-3 border border-teal-600 text-teal-600 rounded-md"
            >
              Edit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignupPhone;
