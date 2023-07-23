import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.scss';
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import APropos from './pages/a-propos';
import Logement from './pages/fiche-logement';
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './components/Error';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter >
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/logement/:logementId" element={<Logement />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </HashRouter >
  </React.StrictMode>
);