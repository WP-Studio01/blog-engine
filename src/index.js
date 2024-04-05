import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import cb from './oauth.js'

let title='Blog';
document.title=title;
cb();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);