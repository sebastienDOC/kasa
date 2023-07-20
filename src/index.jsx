import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/home';
import APropos from './pages/A-Propos/a-propos';
import Logement from './pages/Fiche-Logement/details';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Error from './components/Error/Error';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/logement" element={<Logement />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);