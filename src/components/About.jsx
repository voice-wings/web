import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Ear, Sparkles } from 'lucide-react';
import fidhaImg from '../assets/fidha.jpeg';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <motion.div 
          className="about-card glass-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">Meet Your <span className="text-gradient">Therapist</span></h2>
              <h3 className="therapist-name">Mrs Fidha Febin <span className="degree">(M. Tech)</span></h3>
              <p className="therapist-title">Cochlear Implantee, Speech Therapy Specialist</p>
              
              <div className="therapist-highlights">
                <div className="highlight-item">
                  <GraduationCap className="highlight-icon" />
                  <span>Qualified & Experienced Professional</span>
                </div>
                <div className="highlight-item">
                  <Ear className="highlight-icon" />
                  <span>First-hand Cochlear Implant Experience</span>
                </div>
                <div className="highlight-item">
                  <Sparkles className="highlight-icon" />
                  <span>Kerala's First Pediatric Cochlear Implant Recipient</span>
                </div>
              </div>

              <div className="special-class-banner glass">
                <Sparkles className="special-icon" />
                <div>
                  <h4>Classes for Fluent Malayalam</h4>
                  <p>Tailored specifically for Cochlear Implant users.</p>
                </div>
              </div>
            </div>
            
            <div className="about-image-wrapper">
              <div className="image-decoration"></div>
              <img src={fidhaImg} alt="Mrs Fidha Febin" className="therapist-image" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
