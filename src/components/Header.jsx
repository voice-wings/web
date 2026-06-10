import React from 'react';
import { MessageCircle } from 'lucide-react';
import './Header.css';

export default function Header() {
  return (
    <header className="header glass">
      <div className="container header-container">
        <div className="logo-container">
          <img src="/logo.png" alt="Voice Wings Logo" className="logo-img" />
        </div>
        <nav className="nav-links">
          <a href="#services">Services</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#pricing">Pricing</a>
        </nav>
        <div className="header-actions">
          <a href="https://wa.me/919207470416" target="_blank" rel="noopener noreferrer" className="btn btn-outline contact-btn">
            <MessageCircle size={18} />
            WhatsApp Us
          </a>
        </div>
      </div>
    </header>
  );
}
