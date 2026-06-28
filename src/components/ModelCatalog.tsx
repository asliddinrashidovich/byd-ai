import React, { useState } from 'react';
import { VEHICLES, DICTIONARY } from '../data';
import { Vehicle, Language } from '../types';
import { Zap, Compass, ShieldAlert, Cpu, Gauge, Maximize2, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ModelCatalogProps {
  currentLang: Language;
  onConfigureModel: (modelId: string) => void;
  onBookTestDrive: (modelId: string) => void;
}

export default function ModelCatalog({
  currentLang,
  onConfigureModel,
  onBookTestDrive,
}: ModelCatalogProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'hybrid' | 'ev'>('all');
  const [expandedModelId, setExpandedModelId] = useState<string | null>(null);

  // Filter vehicles
  const filteredVehicles = VEHICLES.filter((vehicle) => {
    if (activeFilter === 'all') return true;
    return vehicle.type === activeFilter;
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US').format(price) + ' UZS';
  };

  const toggleDetails = (modelId: string) => {
    if (expandedModelId === modelId) {
      setExpandedModelId(null);
    } else {
      setExpandedModelId(modelId);
    }
  };

  return (
    <section id="models" className="py-24 bg-neutral-950 text-white border-t border-neutral-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">
            {DICTIONARY.models[currentLang]}
          </h2>
          <p className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-white">
            {currentLang === 'uz' ? 'Yashil va Aqlli Innovatsiyalar Olami' : currentLang === 'ru' ? 'Мир экологичных и умных инноваций' : 'The World of Green & Smart Innovations'}
          </p>
          <div className="h-1 w-20 bg-white mx-auto mt-4 rounded-full" />
        </div>

        {/* Filters bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/25 border border-brand-blue/30'
                : 'glass-card text-gray-300 hover:text-white hover:bg-white/10'
            }`}
          >
            {DICTIONARY.allVehicles[currentLang]}
          </button>
          <button
            onClick={() => setActiveFilter('hybrid')}
            className={`px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer ${
              activeFilter === 'hybrid'
                ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/25 border border-brand-blue/30'
                : 'glass-card text-gray-300 hover:text-white hover:bg-white/10'
            }`}
          >
            {DICTIONARY.hybrids[currentLang]}
          </button>
          <button
            onClick={() => setActiveFilter('ev')}
            className={`px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer ${
              activeFilter === 'ev'
                ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/25 border border-brand-blue/30'
                : 'glass-card text-gray-300 hover:text-white hover:bg-white/10'
            }`}
          >
            {DICTIONARY.evs[currentLang]}
          </button>
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle) => (
            <motion.div
              layout
              key={vehicle.id}
              className="glass-card glass-card-hover rounded-3xl overflow-hidden shadow-2xl flex flex-col group"
            >
              {/* Image Section */}
              <div className="relative overflow-hidden aspect-video bg-neutral-950">
                {/* Badges */}
                <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                  <span className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-md ${
                    vehicle.type === 'ev' 
                      ? 'bg-brand-blue text-white border border-brand-blue/30 shadow-brand-blue/15' 
                      : 'bg-white/10 backdrop-blur-md border border-white/20 text-white'
                  }`}>
                    {vehicle.type === 'ev' ? 'Electric' : 'DM-i Hybrid'}
                  </span>
                </div>

                <img
                  src={vehicle.featuredImage}
                  alt={vehicle.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-sans font-light tracking-tight text-white mb-2 group-hover:text-brand-blue transition-colors">
                    {vehicle.name}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed font-light line-clamp-3">
                    {vehicle.description[currentLang]}
                  </p>
                </div>

                {/* Grid Specs Dashboard */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 font-mono text-xs">
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Compass className="w-4 h-4 text-brand-blue shrink-0" />
                    <div>
                      <div className="text-[10px] uppercase text-gray-500">{DICTIONARY.drivingRange[currentLang]}</div>
                      <div className="font-semibold text-white">{vehicle.specs.range}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Gauge className="w-4 h-4 text-brand-blue shrink-0" />
                    <div>
                      <div className="text-[10px] uppercase text-gray-500">{DICTIONARY.accel[currentLang]}</div>
                      <div className="font-semibold text-white">{vehicle.specs.acceleration}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Zap className="w-4 h-4 text-brand-blue shrink-0" />
                    <div>
                      <div className="text-[10px] uppercase text-gray-500">{DICTIONARY.maxPower[currentLang]}</div>
                      <div className="font-semibold text-white">{vehicle.specs.power}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Layers className="w-4 h-4 text-brand-blue shrink-0" />
                    <div>
                      <div className="text-[10px] uppercase text-gray-500">
                        {currentLang === 'uz' ? 'Akkumulyator' : currentLang === 'ru' ? 'Аккумулятор' : 'Battery'}
                      </div>
                      <div className="font-semibold text-white truncate max-w-[120px]" title={vehicle.specs.battery}>
                        {vehicle.specs.battery.split(' ')[0]} {vehicle.specs.battery.split(' ')[1] || ''}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Price block */}
                <div className="pt-4 border-t border-white/10 flex items-baseline justify-between">
                  <span className="text-[10px] uppercase text-gray-500 tracking-wider font-mono">
                    {DICTIONARY.fromPrice[currentLang]}
                  </span>
                  <span className="text-xl sm:text-2xl font-light font-sans text-brand-blue">
                    {formatPrice(vehicle.basePriceUZS)}
                  </span>
                </div>

                {/* Actions buttons */}
                <div className="grid grid-cols-2 gap-3 pt-4">
                  <button
                    onClick={() => onConfigureModel(vehicle.id)}
                    className="glass-card hover:bg-white/10 text-white text-[10px] uppercase tracking-wider font-bold py-3 px-4 rounded-xl transition duration-300 text-center cursor-pointer"
                  >
                    {DICTIONARY.configure[currentLang]}
                  </button>
                  <button
                    onClick={() => onBookTestDrive(vehicle.id)}
                    className="bg-brand-blue text-white hover:bg-brand-blue/90 text-[10px] uppercase tracking-wider font-bold py-3 px-4 rounded-xl transition duration-300 text-center cursor-pointer shadow-md shadow-brand-blue/15 border border-brand-blue/20"
                  >
                    Test Drive
                  </button>
                </div>

                {/* Details toggle */}
                <div className="pt-2 text-center">
                  <button
                    onClick={() => toggleDetails(vehicle.id)}
                    className="text-xs text-gray-500 hover:text-brand-blue font-mono flex items-center justify-center mx-auto space-x-1 cursor-pointer transition-colors"
                  >
                    <span>{DICTIONARY.viewDetails[currentLang]}</span>
                    <Maximize2 className={`w-3 h-3 transition-transform duration-300 ${
                      expandedModelId === vehicle.id ? 'rotate-45 text-brand-blue' : ''
                    }`} />
                  </button>
                </div>
              </div>

              {/* Expanded Specs Details Dropdown */}
              <AnimatePresence>
                {expandedModelId === vehicle.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-neutral-950/80 backdrop-blur-md border-t border-white/10 px-6 py-6 font-sans text-xs space-y-4"
                  >
                    <h4 className="font-bold text-white uppercase tracking-widest text-[10px] pb-2 border-b border-white/5 text-brand-blue">
                      {currentLang === 'uz' ? 'Kengaytirilgan Texnik koʻrsatkichlar' : currentLang === 'ru' ? 'Расширенные характеристики' : 'Extended Technical Data'}
                    </h4>
                    <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-gray-300 font-mono">
                      <div>
                        <span className="text-gray-500 block uppercase text-[10px]">{DICTIONARY.dimensions[currentLang]}</span>
                        <span className="text-white font-semibold">{vehicle.specs.dimensions}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 block uppercase text-[10px]">{DICTIONARY.topSpeed[currentLang]}</span>
                        <span className="text-white font-semibold">{vehicle.specs.maxSpeed}</span>
                      </div>
                      <div className="col-span-2">
                        <span className="text-gray-500 block uppercase text-[10px]">{currentLang === 'uz' ? 'Tavsif' : currentLang === 'ru' ? 'Описание' : 'Description'}</span>
                        <p className="text-gray-300 leading-relaxed font-sans font-light pt-1">
                          {vehicle.description[currentLang]}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
