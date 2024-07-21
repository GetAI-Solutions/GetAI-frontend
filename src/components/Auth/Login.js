import React, { useState } from 'react';
import { components } from 'react-select';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import Flag from 'react-world-flags';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [isPhoneLogin, setIsPhoneLogin] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({ value: 'ET', label: 'Ethiopia', dialCode: '+251' });
  const navigate = useNavigate();

  const countries = countryList().getData().map(country => ({
    ...country,
    dialCode: `+${country.dial_code}`
  }));

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Assuming login is successful
    navigate('/welcome');
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

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full text-center">
        <div className="flex items-center justify-start w-full py-4 border-b border-gray-300 mb-4">
          <Link to="/" className="text-xl font-bold"><img src={require('../../assets/images/back.png')} alt="back button" /></Link>
        </div>
        <h1 className="text-2xl font-bold mb-2">Log in to your account</h1>
        <p className="text-gray-600 mb-6">Enter your number or email with password</p>

        {isPhoneLogin ? (
          <div className="mb-4 text-left">
            <label className="block text-gray-700 mb-2" htmlFor="phoneNumber">Mobile Number</label>
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
                id="phoneNumber"
                type="text"
                placeholder="Mobile Number"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                className="flex-grow bg-transparent outline-none pl-2"
              />
            </div>
          </div>
        ) : (
          <div className="mb-4 text-left">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <input 
              id="email"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={handleEmailChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 outline-none"
            />
          </div>
        )}

        <div className="mb-4 text-left">
          <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
            <input 
              id="password"
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

        <div className="flex justify-between mb-6">
          <Link to="/forgot-password" className="text-teal-600">Forgot password?</Link>
          <button onClick={() => setIsPhoneLogin(!isPhoneLogin)} className="text-teal-600">
            {isPhoneLogin ? "Use email instead" : "Use phone instead"}
          </button>
        </div>

        <button 
          onClick={handleLogin}
          className={`w-full py-3 text-white rounded-md ${phoneNumber || email ? 'bg-teal-600' : 'bg-gray-400 cursor-not-allowed'}`} 
          disabled={!phoneNumber && !email}
        >
          Log in
        </button>
      </div>
    </div>
  );
};

export default Login;