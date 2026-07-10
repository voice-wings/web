import React from 'react';
import { MessageCircle } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="relative z-20 px-4 sm:px-10 lg:px-12 py-12 sm:py-20 bg-black/40 backdrop-blur-2xl border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-20 mb-16">
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <img src={logoImg} alt="Voice Wings Logo" className="h-16 sm:h-20 mb-6" />
            <p className="font-askan text-white/90 text-2xl sm:text-3xl italic max-w-sm">
              Because every voice has wings. We help them fly.
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8 sm:p-12 text-center w-full max-w-md">
            <h3 className="text-white text-xl sm:text-2xl font-medium mb-3">Ready to start your journey?</h3>
            <p className="text-white/70 text-sm sm:text-base mb-8">Get in touch with us to schedule your first session.</p>
            <a 
              href="https://wa.me/919207470416" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center bg-white text-gray-900 font-medium px-8 py-4 rounded-full hover:bg-gray-100 transition-colors w-full"
            >
              <MessageCircle size={20} className="mr-2" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center flex flex-col gap-2">
          <p className="text-white/50 text-sm">&copy; {new Date().getFullYear()} Voice Wings. All rights reserved.</p>
          <p className="text-white/50 text-sm">
            Designed and developed by <a href="https://odoocrafts.com" target="_blank" rel="noopener noreferrer" className="text-white hover:underline transition-all">odoocrafts.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
