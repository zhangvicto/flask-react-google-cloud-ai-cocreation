import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import Myapp from './myapp';
import Form from './pages/survey'
import Study from './pages/study'
//import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Myapp />} />
      <Route path="/form" element={<Form />} />
      <Route path="/study" element={<Study />} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
