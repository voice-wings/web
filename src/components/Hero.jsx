import React, { useState } from 'react';

export default function Hero() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thanks! We'll contact you at ${email}`);
      setEmail('');
    }
  };

  const featurePills = [
    "Speech Therapy",
    "Cochlear Implant",
    "Online Sessions"
  ];

  return (
    <section className="flex flex-col flex-1 px-4 sm:px-10 lg:px-12 pb-4 sm:pb-12 lg:pb-16 min-h-[calc(100vh-120px)] sm:min-h-max relative z-10">
      <div className="flex-1 sm:hidden"></div>
      
      <div className="flex flex-col sm:flex-1 sm:flex-row sm:items-end justify-between sm:mt-auto h-full">
        <div className="flex flex-col gap-4 sm:gap-6 w-full">
          <h1 className="font-askan text-white text-[2rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] leading-[1.05] tracking-tight max-w-[700px]">
            Because every voice has wings.
          </h1>
          <p className="text-white/70 text-xs sm:text-base md:text-lg max-w-[520px] leading-relaxed">
            Voice Wings is your always-on speech therapy companion. Built by leading therapists, it brings you personalized care and clarity right from the comfort of your home.
          </p>
          
          <form onSubmit={handleSubmit} className="relative bg-black/30 backdrop-blur-md rounded-full border border-white/10 max-w-sm mt-2 sm:mt-4 w-full">
            <input 
              type="email" 
              placeholder="Your email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent text-white placeholder-white/50 px-4 sm:px-6 py-3 sm:py-4 text-sm outline-none rounded-full"
              required
            />
            <button type="submit" className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-white text-gray-900 text-xs sm:text-sm font-medium px-3 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-gray-100 transition-colors">
              Get Started
            </button>
          </form>

          {/* Mobile Pills */}
          <div className="flex sm:hidden flex-wrap gap-2 mt-4">
            {featurePills.map((pill, i) => (
              <span key={i} className="bg-black/30 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full border border-white/10">
                {pill}
              </span>
            ))}
          </div>
        </div>

        {/* Desktop Pills */}
        <div className="hidden sm:flex flex-col items-end gap-2 self-end pb-2 shrink-0">
          {featurePills.map((pill, i) => (
            <span key={i} className="bg-black/30 backdrop-blur-md text-white text-sm px-4 py-2 rounded-full border border-white/10">
              {pill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
