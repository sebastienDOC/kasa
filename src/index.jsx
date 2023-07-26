import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.scss';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router';
import Header from './components/Header';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter >
      <Header />
      <Router />
      <Footer />
    </BrowserRouter >
  </React.StrictMode>
);