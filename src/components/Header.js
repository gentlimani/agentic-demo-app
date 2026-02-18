import React, { useState, useEffect } from 'react';

/**
 * Header component displaying the app title, subtitle, and live date/time.
 */
const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) =>
    date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

  const formatTime = (date) =>
    date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });

  return (
    <header className="header" role="banner">
      <div className="header-content">
        <div className="header-left">
          <div className="header-logo" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="currentColor" />
              <path
                d="M8 16L14 22L24 10"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <h1 className="header-title">ProductHub Dashboard</h1>
            <p className="header-subtitle">Real-time Product Analytics</p>
          </div>
        </div>
        <div className="header-right" aria-label="Current date and time">
          <span className="header-date">{formatDate(currentTime)}</span>
          <span className="header-time">{formatTime(currentTime)}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
