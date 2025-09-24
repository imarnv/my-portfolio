import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'; // Corrected the import path
import './index.css';

// Removed the '!' from this line
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);