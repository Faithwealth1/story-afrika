// src/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import background from './assets/background.jpg';
import googleIcon from './assets/google.png'; // Your Google icon
import './App.css';

function Login() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleContinue = (e) => {
    e.preventDefault();
    if (email.trim() === '') {
      alert('Please enter your email');
      return;
    }
    // In real app: Send OTP/magic link for login
    navigate('/verify', { state: { email, isLogin: true } }); // Pass flag to differentiate from signup
  };

  return (
    <div className="app-container" style={{ backgroundImage: `url(${background})` }}>
      <h1 className="title">StoryAfrika</h1>

      <div className="overlay">
        <h2 className="subtitle">Welcome back</h2>

        <form onSubmit={handleContinue}>
          <input
            type="email"
            placeholder="Enter email address"
            className="email-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="continue-button">
            Continue
          </button>
        </form>

        <div className="or-separator">OR</div>

        <button className="google-button">
          <img src={googleIcon} alt="Google" className="google-icon" />
          Continue with Google
        </button>

        <p className="signup-link">
          Don't have an account? <a href="/">Sign up</a>
        </p>

        <p className="terms-links">
          <a href="#terms">Terms of use</a> | <a href="#privacy">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
