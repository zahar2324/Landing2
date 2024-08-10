import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Типізація для root element
const rootElement = document.getElementById('root') as HTMLElement;

const root = ReactDOM.createRoot(rootElement);
 
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
