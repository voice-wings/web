import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WebGLBackground from './components/WebGLBackground';
import Features from './components/Features';
import Services from './components/Services';
import About from './components/About';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <WebGLBackground />
      <Header />
      
      <main className="main-content">
        <Hero />
        <Features />
        <Services />
        <About />
        <Pricing />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
