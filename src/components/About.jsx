import React from 'react';
import { GraduationCap, Ear, Sparkles } from 'lucide-react';
import fidhaImg from '../assets/fidha.jpeg';

export default function About() {
  return (
    <section id="about" className="px-4 sm:px-10 lg:px-12 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="bg-black/20 backdrop-blur-md rounded-3xl border border-white/10 p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          <div className="flex-1 order-2 lg:order-1">
            <h2 className="font-askan text-white text-3xl sm:text-5xl tracking-wide mb-6">
              Meet Your <span className="text-white/70 italic">Therapist</span>
            </h2>
            <h3 className="text-white text-xl sm:text-2xl font-medium mb-1">
              Mrs Fidha Febin <span className="text-white/60 text-base font-normal">(M. Tech)</span>
            </h3>
            <p className="text-[#F281B3] text-sm sm:text-base mb-8">
              Cochlear Implantee, Speech Therapy Specialist
            </p>
            
            <div className="flex flex-col gap-4 mb-8">
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <span className="text-white/90 text-sm sm:text-base">Qualified & Experienced Professional</span>
              </div>
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Ear className="w-5 h-5 text-white" />
                </div>
                <span className="text-white/90 text-sm sm:text-base">First-hand Cochlear Implant Experience</span>
              </div>
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-white/90 text-sm sm:text-base">Kerala's First Pediatric Cochlear Implant Recipient</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#40247C]/40 to-[#F281B3]/20 border border-white/10 rounded-2xl p-6 flex items-start gap-4">
              <Sparkles className="w-6 h-6 text-white shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-medium text-lg mb-1">Classes for Fluent Malayalam</h4>
                <p className="text-white/70 text-sm">Tailored specifically for Cochlear Implant users.</p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-5/12 max-w-md order-1 lg:order-2">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 p-2 bg-white/5">
              <img 
                src={fidhaImg} 
                alt="Mrs Fidha Febin" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
