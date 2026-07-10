import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import About from './components/About';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 z-0 w-full h-full object-cover object-[80%_center] md:object-[right_center] lg:object-center"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260618_174853_aac61aa2-0f3f-4cf1-bc78-7f657dd11164.mp4"
      />

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <Header />
        <main className="flex flex-col flex-1">
          <Hero />
          
          {/* Below Hero Content - Glassmorphism theme */}
          <div className="bg-black/30 backdrop-blur-xl border-t border-white/10 w-full mt-4 sm:mt-10 lg:mt-16 py-12 sm:py-24">
            <Features />
            <Services />
            <About />
            <Pricing />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
