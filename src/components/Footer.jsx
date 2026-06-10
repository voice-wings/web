import React from 'react';
import { MessageCircle } from 'lucide-react';
import logoImg from '../assets/logo.png';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer section">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logoImg} alt="Voice Wings Logo" className="logo-img" />
            <p className="tagline">Because every voice has wings. We help them fly.</p>
          </div>
          
          <div className="footer-contact glass-card">
            <h3>Ready to start your journey?</h3>
            <p>Get in touch with us to schedule your first session.</p>
            <a href="https://wa.me/919207470416" target="_blank" rel="noopener noreferrer" className="btn btn-primary contact-cta">
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Voice Wings. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
