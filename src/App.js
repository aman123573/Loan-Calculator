import React from 'react';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import { CurrencyProvider } from './context/CurrencyContext';
import Navbar from './components/Navbar';

import { Routes, Route, Navigate } from 'react-router-dom';
import Content from './components/Content';
import ErrorPage from './components/ErrorPage';
import ExchangeRatesPage from './components/ExchangeRatePage';

function App() {
  return (
    <ThemeProvider>
      <CurrencyProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/exchange-rates" element={<ExchangeRatesPage />} />
          <Route path="/error-page" element={<ErrorPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </CurrencyProvider>
    </ThemeProvider>
  );
}

export default App;
