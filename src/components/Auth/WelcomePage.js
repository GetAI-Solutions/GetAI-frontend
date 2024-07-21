import React, { useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Webcam from 'react-webcam';
import jsQR from 'jsqr';

const NoProductHistory = () => {
    const [showCamera, setShowCamera] = useState(false);
    const [scanResult, setScanResult] = useState('');
    const [uploadResult, setUploadResult] = useState('');
    const webcamRef = useRef(null);
    const fileInputRef = useRef(null);

    const handleScanClick = () => {
        setShowCamera(true);
    };

    const handleUploadClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            const imageData = reader.result;
            const image = new Image();
            image.src = imageData;
            image.onload = () => {
                const canvas = document.createElement('canvas');
                canvas.width = image.width;
                canvas.height = image.height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const code = jsQR(imageData.data, imageData.width, imageData.height);
                if (code) {
                    setUploadResult(`Barcode found: ${code.data}`);
                } else {
                    setUploadResult('No barcode found.');
                }
            };
        };
        reader.readAsDataURL(file);
    };

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        const image = new Image();
        image.src = imageSrc;
        image.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = image.width;
            canvas.height = image.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const code = jsQR(imageData.data, imageData.width, imageData.height);
            if (code) {
                setScanResult(`Barcode found: ${code.data}`);
                setShowCamera(false);
            }
        };
    }, [webcamRef]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
            <div className="flex items-center justify-center w-full py-4 border-b border-gray-300 mb-4">
                <Link to="/" className="text-xl font-bold">
                    <img src={require('../../assets/images/back.png')} alt="back button" />
                </Link>
            </div>
            <div className="max-w-md w-full text-center">
                <img src={require('../../assets/images/phone-barcode.png')} alt="Phone Barcode" className="mx-auto mb-6" />
                <h1 className="text-2xl font-bold mb-2">No Product History</h1>
                <p className="text-gray-600 mb-6">Scan or upload to get started</p>
                <p className="text-gray-600 mb-6">Scan or upload an image of your products' barcode to identify your product</p>
                <div className="flex justify-around mb-6">
                    <button onClick={handleUploadClick} className="flex flex-col items-center text-teal-600">
                        <img src={require('../../assets/images/upload.png')} alt="Upload" className="w-12 h-12 mb-2 rounded-full bg-teal-500 p-1" />
                        <span className="text-black">Upload</span>
                    </button>
                    <button onClick={handleScanClick} className="flex flex-col items-center text-teal-600">
                        <img src={require('../../assets/images/scan.png')} alt="Scan" className="w-12 h-12 mb-2 rounded-full bg-teal-500 p-1" />
                        <span className="text-black">Scan</span>
                    </button>
                </div>
                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    style={{ display: 'none' }}
                />
                {showCamera && (
                    <div className="w-full h-64 relative">
                        <Webcam
                            audio={false}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                            className="w-full h-full"
                        />
                        <button
                            onClick={capture}
                            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-teal-500 text-white rounded-full p-4"
                        >
                            Capture
                        </button>
                    </div>
                )}
                {scanResult && (
                    <div className="mt-4">
                        <p>{scanResult}</p>
                        <Link to="/chatbot" className="w-full py-3 bg-teal-600 text-white rounded-md mt-4 inline-block text-center">
                            Proceed to Chatbot
                        </Link>
                    </div>
                )}
                {uploadResult && (
                    <div className="mt-4">
                        <p>{uploadResult}</p>
                        <Link to="/chatbot" className="w-full py-3 bg-teal-600 text-white rounded-md mt-4 inline-block text-center">
                            Proceed to Chatbot
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NoProductHistory;
