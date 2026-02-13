import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import background from './assets/background.jpg';
import './App.css';

function WelcomeBack() {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || 'user@example.com';

  return (
    <div className="app-container" style={{ backgroundImage: `url(${background})` }}>
      <h1 className="title">StoryAfrika</h1>

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
          <a href="#" onClick={() => navigate('/')}>← Back</a>
        </p>
      </div>
    </div>
  );
}

export default WelcomeBack;
