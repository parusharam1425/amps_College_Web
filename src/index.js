
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';



import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



