import React from 'react';
import { motion } from 'framer-motion';
import { Home, Users, Target, HeartPulse } from 'lucide-react';
import './Features.css';

export default function Features() {
  const features = [
    {
      icon: <Home className="feature-icon" />,
      title: "Comfort of Your Home",
      description: "Professional sessions delivered directly to your device."
    },
    {
      icon: <Users className="feature-icon" />,
      title: "1:1 Online Sessions",
      description: "Individual attention with personalised therapy plans."
    },
    {
      icon: <Target className="feature-icon" />,
      title: "Goal-Oriented Therapy",
      description: "Structured sessions with regular assessment and progress monitoring."
    },
    {
      icon: <HeartPulse className="feature-icon" />,
      title: "Supportive Parent Guidance",
      description: "We equip parents with the right strategies to support their child."
    }
  ];

  return (
    <section id="features" className="section features-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Why Choose <span className="text-gradient">Voice Wings?</span></h2>
          <p className="section-subtitle">Safe & comfortable environment for effective learning</p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="feature-card glass-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="icon-wrapper">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
