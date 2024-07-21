# GetAI - AI-Powered Product Scanner

## Overview

GetAI is an AI-powered web application that allows users to scan products and obtain comprehensive, localized product information. The app is designed to help consumers, particularly in African markets, quickly access detailed information about food, medicines, and beauty products.

## Features

- **User Authentication:** Sign up and log in with email or phone number.
- **Product Scanning:** Use the device's camera to scan product barcodes.
- **Image Upload:** Upload images of product barcodes for recognition.
- **Product Information:** Retrieve detailed product information based on the scanned or uploaded barcode.
- **Chatbot Interaction:** Engage with a chatbot for more details about the product.
- **Responsive Design:** Optimized for mobile view with a clean and intuitive interface.

## Technologies Used

- **Frontend:** React, Tailwind CSS
- **Backend:** Express, MongoDB
- **AI Integration:** TensorFlow.js for barcode recognition

## Project Structure

GetAI
├── public
│ ├── index.html
│ └── ...
├── src
│ ├── assets
│ │ ├── images
│ │ └── ...
│ ├── components
│ │ ├── Auth
│ │ │ ├── Login.js
│ │ │ └── Signup.js
│ │ ├── Home.js
│ │ ├── NoProductHistory.js
│ │ ├── ProductScanner.js
│ │ └── ...
│ ├── hooks
│ │ └── useCamera.js
│ ├── pages
│ │ ├── HomePage.js
│ │ └── ...
│ ├── App.js
│ ├── index.js
│ └── ...
└── ...


## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm or yarn
- MongoDB

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/GetAI.git
   cd GetAI


Install dependencies:


npm install
Set up environment variables:

Create a .env file in the root directory and add your environment variables:

env
REACT_APP_API_URL=http://localhost:5000
Start the development server:

npm start
Run the backend server:


cd backend
npm install
npm start
Usage
Authentication
Sign Up: Users can sign up using their email or phone number.
Log In: Users can log in using their credentials.
Scanning Products
Scan: Click the "Scan" button to open the device's camera and scan a product barcode.
Upload: Click the "Upload" button to upload an image of the product barcode.
Viewing Product Information
After scanning or uploading, users will be presented with detailed information about the product.
Users can interact with a chatbot for more information about the product.
Customization
Changing the Country Code Selector
Install the react-select-country-list package to enable dynamic country code selection with flags:


npm install react-select-country-list
Update the SignupPhone component to use the country selector:


import CountrySelect from 'react-select-country-list';

const options = useMemo(() => CountrySelect().getData(), []);
Toggling Password Visibility
Implement password visibility toggle in the SignupPhone component:


const [passwordVisible, setPasswordVisible] = useState(false);

const togglePasswordVisibility = () => {
  setPasswordVisible(!passwordVisible);
};

// Inside the render method
<input 
  type={passwordVisible ? "text" : "password"}
  placeholder="Password"
  className="flex-grow bg-transparent outline-none"
/>
<button onClick={togglePasswordVisibility}>
  {passwordVisible ? "Hide" : "Show"}
</button>
Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

License
This project is licensed under the MIT License.

Contact
For any inquiries or issues, please contact us at support@getai.com.



Feel free to customize any part of this README to better suit your project's needs.