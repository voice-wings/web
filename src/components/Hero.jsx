import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="section hero-section">
      <div className="container hero-container">
        <motion.div 
          className="hero-content glass-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Every Voice Deserves to be <span className="text-gradient highlight-text">Heard</span>
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Professional online speech therapy for children and adults by a qualified speech-language therapist.
          </motion.p>
          
          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <a href="https://wa.me/919207470416" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <MessageCircle size={20} />
              REGISTER YOUR SEATS NOW
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
