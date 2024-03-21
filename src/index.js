import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';


import Home from "./views/Home";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
            <Router>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/app" element={<App />} />
                </Routes >
            </Router >
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
