import React from 'react';

/**
 * ThemeToggle renders a sun/moon button that switches between light and dark mode.
 * Persists the user's preference in localStorage.
 *
 * @param {boolean}  isDark    – current theme state
 * @param {function} onToggle  – callback to flip the theme
 */
const ThemeToggle = ({ isDark, onToggle }) => {
  return (
    <button
      className="theme-toggle"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className="theme-toggle-icon" aria-hidden="true">
        {isDark ? '☀️' : '🌙'}
      </span>
      <span className="theme-toggle-label">
        {isDark ? 'Light' : 'Dark'}
      </span>
    </button>
  );
};

export default ThemeToggle;
