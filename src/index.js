import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './home';
import About from './Component/About';
import Clans from './Component/Clans';
import Troops from './Component/Troops';
import Training from './Component/Training hall';
import Contact from './Component/Contact';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="clans" element={<Clans />} />
      <Route path="troops" element={<Troops />} />
      <Route path="training_hall" element={<Training />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>,
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
