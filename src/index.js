import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/* Minimal global reset applied via App.css */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
