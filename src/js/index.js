import React from 'react';
import { createRoot } from 'react-dom/client';

// Import global styles
import "./styles/styles.css"; 

// Import App component correctly
import App from "../App";  // ✅ FIXED: Correct path

const root = createRoot(document.querySelector("#app"));

// Render your React application
root.render(<App />);

