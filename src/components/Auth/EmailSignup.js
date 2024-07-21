import React, { useState } from 'react';
import { components } from 'react-select';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import Flag from 'react-world-flags';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const AddEmail = () => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [selectedCountry, setSelectedCountry] = useState({ value: 'ET', label: 'Ethiopia' });
  const navigate = useNavigate();
  const location = useLocation();
  const { phoneNumber, dialCode } = location.state || {};

  const countries = countryList().getData();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleContinue = () => {
    // Handle the continuation logic here, e.g., form submission
    navigate({
        pathname: '/verify-phone',
        state: {
          email,
          fullName,
          country: selectedCountry.label,
          phoneNumber,
          dialCode
        }
      });
    console.log({ email, fullName, country: selectedCountry.label, phoneNumber, dialCode });
  };

  const customSingleValue = ({ data }) => (
    <div className="flex items-center">
      <Flag code={data.value} className="mr-2" style={{ width: '20px', height: '15px' }} />
      {data.label}
    </div>
  );

  const customOption = (props) => {
    const { data } = props;
    return (
      <components.Option {...props}>
        <div className="flex items-center">
          <Flag code={data.value} className="mr-2" style={{ width: '20px', height: '15px' }} />
          {data.label}
        </div>
      </components.Option>
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full text-center">
        <div className="flex items-center justify-start w-full py-4 border-b border-gray-300 mb-4">
          <Link to="/" className="text-xl font-bold"><img src={require('../../assets/images/back.png')} alt="back button" /></Link>
        </div>
        <h1 className="text-2xl font-bold mb-2">Add your email</h1>
        <p className="text-gray-600 mb-6">You can use your email to login to your account.</p>
        
        <div className="mb-4 text-left">
          <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
          <input 
            id="email"
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={handleEmailChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none"
          />
        </div>
        
        <div className="mb-4 text-left">
          <label className="block text-gray-700 mb-2" htmlFor="fullName">Full Name</label>
          <input 
            id="fullName"
            type="text"
            placeholder="e.g. John Smith"
            value={fullName}
            onChange={handleFullNameChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none"
          />
        </div>
        
        <div className="mb-4 text-left">
          <label className="block text-gray-700 mb-2" htmlFor="country">Country</label>
          <Select 
            id="country"
            options={countries} 
            value={selectedCountry} 
            onChange={setSelectedCountry} 
            components={{ SingleValue: customSingleValue, Option: customOption }} 
            className="w-full"
            styles={{ control: (provided) => ({ ...provided, border: '1px solid #d1d5db', boxShadow: 'none' }) }}
          />
        </div>

        <button 
          onClick={handleContinue}
          className={`w-full py-3 text-white rounded-md ${email && fullName ? 'bg-teal-600' : 'bg-gray-400 cursor-not-allowed'}`} 
          disabled={!email || !fullName}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default AddEmail;