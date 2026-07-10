import React from 'react';
import { Check } from 'lucide-react';

export default function Pricing() {
  const benefits = [
    "Weekly 2 personalised sessions",
    "Individual attention",
    "Goal-oriented therapy",
    "Regular assessment & progress monitoring"
  ];

  return (
    <section id="pricing" className="px-4 sm:px-10 lg:px-12 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-askan text-white text-3xl sm:text-5xl tracking-wide mb-4">
            Transparent <span className="text-white/70 italic">Pricing</span>
          </h2>
          <p className="text-white/70 text-sm sm:text-lg">
            Invest in a voice that soars
          </p>
        </div>

        <div className="max-w-md mx-auto bg-black/20 backdrop-blur-md rounded-3xl border border-white/10 p-8 sm:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#F281B3] rounded-full mix-blend-screen filter blur-[50px] opacity-20"></div>
          
          <div className="relative z-10 text-center mb-8 border-b border-white/10 pb-8">
            <h3 className="text-white/70 text-sm uppercase tracking-widest font-medium mb-4">Monthly Fee</h3>
            <div className="flex items-start justify-center text-white">
              <span className="text-xl mt-2 mr-1">₹</span>
              <span className="font-askan text-6xl">5,000</span>
              <span className="text-white/50 text-base self-end mb-2 ml-1">/month</span>
            </div>
          </div>
          
          <div className="relative z-10 mb-8">
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                    <Check size={12} className="text-white" />
                  </div>
                  <span className="text-white/80 text-sm sm:text-base leading-snug">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative z-10">
            <a 
              href="https://wa.me/919207470416" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block w-full bg-white text-gray-900 font-medium text-sm sm:text-base px-6 py-4 rounded-full text-center hover:bg-gray-100 transition-colors"
            >
              Register Your Seats Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
