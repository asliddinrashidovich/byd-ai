import React, { useState } from 'react';
import { DEALERS, DICTIONARY } from '../data';
import { Dealer, Language } from '../types';
import { MapPin, Phone, Clock, Search, Navigation } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface DealershipsProps {
  currentLang: Language;
}

export default function Dealerships({ currentLang }: DealershipsProps) {
  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [activeDealer, setActiveDealer] = useState<Dealer>(DEALERS[0]);

  // Extract unique cities (in selected language)
  const cities = Array.from(new Set(DEALERS.map((d) => d.city[currentLang])));

  // Filter dealers
  const filteredDealers = DEALERS.filter((dealer) => {
    if (selectedCity === 'all') return true;
    return dealer.city[currentLang] === selectedCity;
  });

  const handleDealerSelect = (dealer: Dealer) => {
    setActiveDealer(dealer);
  };

  return (
    <section id="dealers" className="py-24 bg-black text-white border-t border-neutral-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">
            {DICTIONARY.dealers[currentLang]}
          </h2>
          <p className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-white">
            {DICTIONARY.dealersTitle[currentLang]}
          </p>
          <p className="text-neutral-400 text-sm max-w-2xl mx-auto">
            {DICTIONARY.dealersSubtitle[currentLang]}
          </p>
          <div className="h-1 w-20 bg-white mx-auto mt-4 rounded-full" />
        </div>

        {/* City Filters Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => setSelectedCity('all')}
            className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase transition-all duration-300 cursor-pointer ${
              selectedCity === 'all'
                ? 'bg-brand-blue text-white border-brand-blue shadow-md shadow-brand-blue/20'
                : 'bg-neutral-950/40 text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            {DICTIONARY.allCities[currentLang]}
          </button>
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase transition-all duration-300 cursor-pointer ${
                selectedCity === city
                  ? 'bg-brand-blue text-white border-brand-blue shadow-md shadow-brand-blue/20'
                  : 'bg-neutral-950/40 text-gray-400 hover:text-white border border-white/5'
              }`}
            >
              {city}
            </button>
          ))}
        </div>

        {/* Dealer Interactive Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* LEFT: Showroom List (takes 5 cols) */}
          <div className="lg:col-span-5 space-y-4 max-h-[580px] overflow-y-auto pr-2 custom-scrollbar">
            <AnimatePresence mode="popLayout">
              {filteredDealers.map((dealer) => {
                const isActive = activeDealer.id === dealer.id;
                return (
                  <motion.div
                    layout
                    key={dealer.id}
                    onClick={() => handleDealerSelect(dealer)}
                    className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col space-y-4 ${
                      isActive
                        ? 'border-brand-blue bg-brand-blue/10 shadow-lg shadow-brand-blue/10'
                        : 'border-white/5 bg-neutral-950/40 hover:border-white/10'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <span className="text-[10px] uppercase font-mono tracking-widest text-brand-blue font-bold">
                          {dealer.city[currentLang]}
                        </span>
                        <h4 className="text-base font-bold text-white font-sans">{dealer.name[currentLang]}</h4>
                      </div>
                      <MapPin className={`w-5 h-5 shrink-0 ${isActive ? 'text-brand-blue animate-pulse' : 'text-gray-600'}`} />
                    </div>

                    <div className="space-y-2 text-xs font-mono text-gray-400">
                      <p className="leading-relaxed">{dealer.address[currentLang]}</p>
                      
                      <div className="flex items-center space-x-2 pt-1 text-[11px]">
                        <Clock className="w-3.5 h-3.5 shrink-0 text-gray-500" />
                        <span>{dealer.hours[currentLang]}</span>
                      </div>
                    </div>

                    {/* Quick CTA */}
                    <div className="flex space-x-2.5 pt-2 text-xs">
                      <a
                        href={`tel:${dealer.phone.replace(/\s+/g, '')}`}
                        className="flex-1 py-2.5 rounded-xl border border-white/10 text-center hover:bg-brand-blue/10 text-gray-300 hover:text-white transition-all flex items-center justify-center font-mono"
                      >
                        <Phone className="w-3.5 h-3.5 mr-2 text-brand-blue" />
                        <span>{DICTIONARY.callDealer[currentLang]}</span>
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* RIGHT: High-tech Visual Vector Map representation (takes 7 cols) */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative min-h-[400px] sm:min-h-[480px]">
            {/* Ambient vector grid background */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 pb-6 border-b border-white/10 relative z-10">
              <div className="font-mono text-xs">
                <span className="text-gray-500 uppercase tracking-widest block">Active Dealer Showroom</span>
                <span className="text-brand-blue font-bold text-sm mt-1 block">{activeDealer.name[currentLang]}</span>
              </div>
              <div className="text-xs font-mono uppercase bg-brand-blue/15 px-3.5 py-1.5 rounded-full text-brand-blue border border-brand-blue/20 font-bold">
                GPS: {activeDealer.lat.toFixed(4)}° N, {activeDealer.lng.toFixed(4)}° E
              </div>
            </div>

            {/* Custom interactive Map Display Vector */}
            <div className="flex-grow flex items-center justify-center relative my-6 min-h-[220px]">
              {/* Uzbekistan Outline Simulated map */}
              <svg className="w-full h-full max-h-[300px] text-gray-800/20 fill-current opacity-45" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
                {/* Simulated contour lines */}
                <path d="M 50 200 Q 150 100 250 150 T 450 120 T 650 200 T 750 150 L 780 250 Q 650 350 450 300 T 250 280 T 100 320 Z" />
                <path d="M 120 180 Q 200 130 300 180 T 500 150 T 700 220" stroke="rgba(0,163,255,0.08)" strokeWidth="1" fill="none" />
                <path d="M 80 250 Q 220 280 380 220 T 680 280" stroke="rgba(0,163,255,0.08)" strokeWidth="1" fill="none" />
              </svg>

              {/* Dynamic Map Pins */}
              {DEALERS.map((dealer) => {
                const isActive = activeDealer.id === dealer.id;
                // Calculate pseudo coordinate placement
                let x = 600; // default Tashkent
                let y = 160;

                if (dealer.id === 'byd-sergeli') { x = 600; y = 175; }
                else if (dealer.id === 'byd-yashnabod') { x = 620; y = 150; }
                else if (dealer.id === 'byd-samarkand') { x = 450; y = 200; }
                else if (dealer.id === 'byd-bukhara') { x = 320; y = 220; }
                else if (dealer.id === 'byd-fergana') { x = 700; y = 190; }

                return (
                  <button
                    key={dealer.id}
                    onClick={() => setActiveDealer(dealer)}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group/pin"
                    style={{ left: `${x}px`, top: `${y}px` }}
                  >
                    <div className="relative flex items-center justify-center">
                      {isActive && (
                        <span className="animate-ping absolute inline-flex h-10 w-10 rounded-full bg-brand-blue opacity-30" />
                      )}
                      <div className={`p-2 rounded-full border shadow-xl transition-all duration-300 ${
                        isActive 
                          ? 'bg-brand-blue text-white border-brand-blue scale-110 shadow-brand-blue/30' 
                          : 'bg-neutral-900 text-white border-white/20 hover:scale-105'
                      }`}>
                        <MapPin className="w-4 h-4" />
                      </div>

                      {/* Tooltip on hover */}
                      <span className="absolute bottom-full mb-2 bg-neutral-900 text-white font-mono text-[9px] px-2.5 py-1.5 rounded border border-white/10 opacity-0 group-hover/pin:opacity-100 transition whitespace-nowrap z-30 pointer-events-none uppercase tracking-wider shadow-xl">
                        {dealer.name[currentLang].split(' ')[1] || dealer.name[currentLang]}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Dealer Detail Summary Card inside map */}
            <div className="glass-card p-5 rounded-2xl border-white/15 space-y-4 relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div className="space-y-1 font-mono text-xs">
                <div className="text-white font-bold text-sm uppercase flex items-center">
                  <Navigation className="w-4 h-4 mr-1.5 text-brand-blue animate-pulse" />
                  {activeDealer.name[currentLang]}
                </div>
                <p className="text-gray-400 leading-relaxed font-light">{activeDealer.address[currentLang]}</p>
              </div>
              <a 
                href={`https://yandex.com/maps/?ll=${activeDealer.lng},${activeDealer.lat}&z=15&text=${encodeURIComponent(activeDealer.name[currentLang])}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-brand-blue text-white hover:bg-brand-blue/90 px-5 py-3 rounded-xl text-xs font-bold uppercase transition duration-300 shrink-0 flex items-center justify-center border border-brand-blue/20 shadow-md shadow-brand-blue/15"
              >
                <span>{DICTIONARY.viewOnMap[currentLang]}</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
