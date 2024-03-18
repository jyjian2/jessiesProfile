// index.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css'; // Optional CSS file
import App from './App.js';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(<Router>
  <React.StrictMode>
    <App />
  </React.StrictMode>
</Router>);
