// src/Verify.js
import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import background from './assets/background.jpg';
import './App.css';

function Verify() {
  const location = useLocation();
  const navigate = useNavigate();

  // Safely get data passed from Signup or Login page
  const email = location.state?.email || 'yourmail@gmail.com';
  const isLogin = location.state?.isLogin || false;   // This fixes the 'isLogin is not defined' error

  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [invalidOtp, setInvalidOtp] = useState(false);
  const inputRefs = useRef([]);

  // Auto-focus first input when component mounts
  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (index, value) => {
    if (!/^\d?$/.test(value)) return; // Only allow single digits

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    setInvalidOtp(false);

    // Auto-move to next input if a digit was entered
    if (value !== '' && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && code[index] === '' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleContinue = () => {
    const enteredCode = code.join('');
    if (enteredCode.length === 6) {
      navigate(isLogin ? '/welcome' : '/', { state: { email } });
    } else {
      setInvalidOtp(true);
    }
  };

  const handleResend = () => {
    alert('New code sent! (In a real app this would trigger email again)');
  };

  return (
    <div className="app-container verify-page" style={{ backgroundImage: `url(${background})` }}>
      <h1 className="title">StoryAfrika</h1>

      <div className="toast toast-top">
        <span className="checkmark-circle">✔</span>
        New code sent!
      </div>

      <div className="overlay verify-overlay">
        <h2 className="subtitle">We sent you a mail</h2>

        <p className="description">
          To continue, enter the code or click the magic link we sent to
          <br />
          <strong>{email}</strong>
        </p>

        <div className="otp-container">
          {code.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              ref={(el) => (inputRefs.current[index] = el)}
              className={`otp-input ${invalidOtp ? 'error' : ''}`}
            />
          ))}
        </div>
        {invalidOtp && <p className="otp-error">Invalid OTP</p>}

        <button
          className={`continue-button ${code.join('').length === 6 ? 'enabled' : ''}`}
          onClick={handleContinue}
        >
          Continue
        </button>

        <p className="resend" onClick={handleResend}>
          Resend code
        </p>
      </div>
    </div>
  );
}

export default Verify;
