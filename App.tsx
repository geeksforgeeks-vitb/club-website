import React from 'react';
import { Analytics } from "@vercel/analytics/react"
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import BorderlandsPage from './pages/Borderlands';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/events" element={<Events />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/borderlands" element={<BorderlandsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Analytics />
      </Layout>
    </Router>
  );
};

export default App;
