import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import './Services.css';

export default function Services() {
  const services = [
    "Speech Delay",
    "Pronunciation & Clarity",
    "Stuttering",
    "Language Development",
    "Voice & Fluency",
    "Articulation Difficulties",
    "Social Communication Skills"
  ];

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="services-content">
          <motion.div 
            className="services-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">We Help With</h2>
            <p className="section-subtitle" style={{ marginBottom: '40px' }}>Comprehensive speech therapy solutions personalized to your needs.</p>
            
            <div className="services-list">
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  className="service-item glass-card"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <CheckCircle2 className="check-icon" />
                  <span>{service}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="personalized-banner">
              <span className="heart">❤️</span> Personalized sessions tailored for your needs.
            </div>
          </motion.div>

          <motion.div 
            className="services-image"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="image-placeholder glass">
               <div className="blob blob-1"></div>
               <div className="blob blob-2"></div>
               <h3 className="text-gradient">Every Voice Matters</h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
