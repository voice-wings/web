import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import './Pricing.css';

export default function Pricing() {
  const benefits = [
    "Weekly 2 personalised sessions",
    "Individual attention",
    "Goal-oriented therapy",
    "Regular assessment & progress monitoring"
  ];

  return (
    <section id="pricing" className="section pricing-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Transparent <span className="text-gradient">Pricing</span></h2>
          <p className="section-subtitle">Invest in a voice that soars</p>
        </motion.div>

        <motion.div 
          className="pricing-card-wrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="pricing-card glass-card">
            <div className="pricing-header">
              <h3>Monthly Fee</h3>
              <div className="price">
                <span className="currency">₹</span>
                <span className="amount">5,000</span>
                <span className="period">/month</span>
              </div>
            </div>
            
            <div className="pricing-body">
              <ul className="pricing-features">
                {benefits.map((benefit, index) => (
                  <li key={index}>
                    <div className="check-circle">
                      <Check size={16} />
                    </div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="pricing-footer">
              <a href="https://wa.me/919207470416" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-block">
                Register Your Seats Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
