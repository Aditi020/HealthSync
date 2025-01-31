import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeProvider';
import Header from './components/Header';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import SymptomChecker from './pages/SymptomChecker';
import HealthJournal from './pages/HealthJournal';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  return (
    <Router>
      <ThemeProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              {/* <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/symptom-checker" element={<SymptomChecker />} />
              <Route path="/health-journal" element={<HealthJournal />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;