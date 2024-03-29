import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/HomePage'
import Err404page from './pages/Err404page'
import Contact from './pages/ContactPage';
import './index.css'
import './container/PortfolioContainer/index.css'
import './container/AboutUsContainer/index.css'
import Portfolio_section from './pages/Portfolio_section'; 
import AboutUsPage from './pages/AboutUsPage';
import TeamPage from "./pages/TeamPage"
import CareerPage from './pages/CareerPage';
function App() {
  return (
    <>
        <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/career" element={<CareerPage />} />

          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/portfolio" element={<Portfolio_section />} />
          <Route path="/*" element={<Err404page />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
