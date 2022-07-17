import React, { useEffect } from 'react'
import './App.css';
import Navbar from './navbar.js';
import Home from './pages/home.js'; 
import Research from './pages/research.js';
import Photography from './pages/photography.js';
import { Routes, Route } from "react-router-dom";

function App() {
useEffect(() => {
    document.title = "Ricardo Sandoval"
  }, [])
  return (
        <div>
          <Navbar />
          <div className="container">
            <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/research" element={<Research />} />
                    <Route path="/photography" element={<Photography />} />
            </Routes>
          </div>
        </div>
  );
}

export default App;
