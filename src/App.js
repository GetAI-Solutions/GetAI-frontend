import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/Landing';
import SignupPage from './pages/Signup';
import VerifyPage from './pages/PhoneSignup';
// import LoginPage from './pages/Login';
// Import other pages as needed

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/verify-phone" element={<VerifyPage />} />
        {/*<Route path="/login" component={LoginPage} />
        /* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
