import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/navbar';
import { HomePage } from './pages/home';
import { PricingPage } from './pages/pricing';

export function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/features" element={<div>Features Page</div>} />
            <Route path="/dashboard/*" element={<div>Dashboard</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}