import React from 'react';
import ReactDOM from 'react-dom';


import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

ReactDOM.render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>,
  document.getElementById("root")
)