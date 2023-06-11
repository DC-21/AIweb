import React, { useState } from 'react';
import QRCode from 'qrcode.react';

function QRCodeGenerator() {
  const [inputValue, setInputValue] = useState('');
  const [qrCodeValue, setQRCodeValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const generateQRCode = () => {
    // Make a request to the backend API to generate the QR code
    fetch('/api/qrcode', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: inputValue }),
    })
      .then((response) => response.json())
      .then((data) => {
        setQRCodeValue(data.qrCodeData);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <h2>QR Code Generator</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter data for QR code"
      />
      <button onClick={generateQRCode}>Generate QR Code</button>
      {qrCodeValue && <QRCode value={qrCodeValue} />}
    </div>
  );
}

export default QRCodeGenerator;
