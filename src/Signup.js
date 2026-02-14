// src/Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import background from './assets/background.jpg';
import googleIcon from './assets/google.png';
import logo from './assets/storyafricalogo.png';
import './App.css'; 

function Signup() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleContinue = (e) => {
    e.preventDefault();
    if (email.trim() === '') {
      alert('Please enter your email');
      return;
    }
    navigate('/verify', { state: { email } });
  };

  return (
    <div className="app-container" style={{ backgroundImage: `url(${background})` }}>
      <img src={logo} alt="StoryAfrika" className="title-logo" />

      <div className="overlay">
        <h2 className="subtitle">Create an account</h2>

        <form onSubmit={handleContinue}>
          <input
            type="email"
            placeholder="Enter email address"
            className={`email-input ${email ? 'has-input' : ''}`}
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

        <p className="login-link">
          Already have an account? <a href="/login">Log in</a>
        </p>

        <p className="terms-links">
          <a href="#terms">Terms of use</a> | <a href="#privacy">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
