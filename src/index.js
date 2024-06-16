import React from 'react';
import ReactDOM from 'react-dom/client';
import "normalize.css";
import './index.css';
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/montserrat/700.css";
import App from './components/App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
