import React from 'react';
import { CheckCircle2 } from 'lucide-react';

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
    <section id="services" className="px-4 sm:px-10 lg:px-12 py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
        <div className="flex-1">
          <h2 className="font-askan text-white text-3xl sm:text-5xl tracking-wide mb-4">We Help With</h2>
          <p className="text-white/70 text-sm sm:text-lg mb-10">Comprehensive speech therapy solutions personalized to your needs.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-black/20 backdrop-blur-md rounded-xl border border-white/10 p-4 flex items-center"
              >
                <CheckCircle2 className="text-white w-5 h-5 mr-3 shrink-0" />
                <span className="text-white/90 font-medium text-sm">{service}</span>
              </div>
            ))}
          </div>
          
          <div className="inline-flex items-center bg-white/5 backdrop-blur-md rounded-full px-6 py-3 border border-white/10 text-white/80 text-sm font-medium">
            <span className="mr-2">❤️</span> Personalized sessions tailored for your needs.
          </div>
        </div>

        <div className="w-full lg:w-5/12 aspect-square max-w-md bg-gradient-to-br from-black/40 to-white/5 backdrop-blur-xl rounded-3xl border border-white/10 flex items-center justify-center p-8 relative overflow-hidden">
          {/* Abstract blobs */}
          <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-[#40247C] rounded-full mix-blend-screen filter blur-[60px] opacity-50"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#F281B3] rounded-full mix-blend-screen filter blur-[60px] opacity-50"></div>
          
          <h3 className="font-askan text-white text-3xl sm:text-4xl text-center relative z-10">Every Voice Matters</h3>
        </div>
      </div>
    </section>
  );
}
