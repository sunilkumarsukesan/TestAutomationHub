import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Home from './pages/Home';
import GettingStarted from './pages/GettingStarted';
import Framework from './pages/Framework';
import Reports from './pages/Reports';
import BestPractices from './pages/BestPractices';
import Team from './pages/Team';
import Contact from './pages/Contact';
import { useScrollToTop } from './hooks/useScrollToTop';

function AppContent() {
  const location = useLocation();
  useScrollToTop();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/getting-started" element={<GettingStarted />} />
          <Route path="/framework" element={<Framework />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/best-practices" element={<BestPractices/>} />
          <Route path="/team" element={<Team/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;