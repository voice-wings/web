import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const LogoSVG = ({ className }) => (
  <svg viewBox="0 0 256 256" fill="currentColor" className={className}>
    <path d="M 228 0 C 172.772 0 128 44.772 128 100 L 128 0 L 0 0 L 0 28 C 0 83.228 44.772 128 100 128 L 0 128 L 0 256 L 28 256 C 83.228 256 128 211.228 128 156 L 128 256 L 256 256 L 256 228 C 256 172.772 211.228 128 156 128 L 256 128 L 256 0 Z" />
  </svg>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-4 sm:px-10 lg:px-12 py-4 sm:py-8 relative z-50">
      <div className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 px-4 py-2.5 sm:px-6 sm:py-4 flex items-center">
        <LogoSVG className="w-5 h-5 sm:w-7 sm:h-7 text-white mr-3" />
        <span className="font-askan text-white text-base sm:text-xl tracking-wide">Voice Wings</span>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="ml-4 sm:ml-32 md:ml-64 lg:ml-96 text-white"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      <a href="#services" className="hidden sm:block bg-white text-gray-900 font-medium text-sm px-6 py-3 rounded-full hover:bg-gray-100 transition-colors">
        Explore Services
      </a>

      {isMenuOpen && (
        <div className="sm:hidden absolute top-[4.5rem] left-4 right-4 bg-black/30 backdrop-blur-xl rounded-2xl p-5 border border-white/10 flex flex-col gap-4">
          <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-white text-sm font-medium hover:text-white/70">Services</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-white text-sm font-medium hover:text-white/70">About</a>
          <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="text-white text-sm font-medium hover:text-white/70">Pricing</a>
          <a href="#contact" className="bg-white text-gray-900 font-medium text-sm px-6 py-3 rounded-full text-center mt-2 hover:bg-gray-100">
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}
