import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import background from './assets/background.jpg';
import './App.css';
import logo from './assets/storyafricalogo.png';

function WelcomeBack() {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || 'user@example.com';

  return (
    <div className="app-container" style={{ backgroundImage: `url(${background})` }}>
      <img src={logo} alt="StoryAfrika" className="title-logo" />

      <div className="overlay">
        <h2 className="subtitle">Welcome back! 👋</h2>
        
        <p className="description">
          You're logged in as <strong>{email}</strong>
        </p>

        <div style={{ marginTop: '30px' }}>
          <button 
            className="continue-button"
            onClick={() => navigate('/')}
          >
            Go to Home
          </button>
        </div>

        <p className="signup-link">
          <button 
            className="back-link-button"
            onClick={() => navigate('/')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', padding: 0 }}
          >
            ← Back
          </button>
        </p>
      </div>
    </div>
  );
}

export default WelcomeBack;
