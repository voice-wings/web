import React from 'react';
import { Home, Users, Target, HeartPulse } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Home className="w-6 h-6 text-white" />,
      title: "Comfort of Your Home",
      description: "Professional sessions delivered directly to your device."
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "1:1 Online Sessions",
      description: "Individual attention with personalised therapy plans."
    },
    {
      icon: <Target className="w-6 h-6 text-white" />,
      title: "Goal-Oriented Therapy",
      description: "Structured sessions with regular assessment and progress monitoring."
    },
    {
      icon: <HeartPulse className="w-6 h-6 text-white" />,
      title: "Supportive Parent Guidance",
      description: "We equip parents with the right strategies to support their child."
    }
  ];

  return (
    <section id="features" className="px-4 sm:px-10 lg:px-12 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-askan text-white text-3xl sm:text-5xl tracking-wide mb-4">
            Why Choose <span className="text-white/70 italic">Voice Wings?</span>
          </h2>
          <p className="text-white/70 text-sm sm:text-lg">
            Safe & comfortable environment for effective learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 p-8 flex flex-col items-center text-center hover:bg-white/5 transition-colors"
            >
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-white font-medium text-lg mb-3">{feature.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
