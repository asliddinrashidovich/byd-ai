import React, { useState, useEffect } from 'react';
import { VEHICLES, DICTIONARY } from '../data';
import { Vehicle, Language, VehicleColor, VehicleWheel, VehicleInterior } from '../types';
import { Palette, Layers, Sparkles, Check, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ConfiguratorProps {
  currentLang: Language;
  selectedModelId: string | null;
  onConfigSaved: (modelId: string, totalPrice: number) => void;
}

export default function Configurator({
  currentLang,
  selectedModelId,
  onConfigSaved,
}: ConfiguratorProps) {
  // Find initial model or default to Song Plus
  const [selectedModel, setSelectedModel] = useState<Vehicle>(
    VEHICLES.find((v) => v.id === selectedModelId) || VEHICLES[0]
  );

  const [selectedColor, setSelectedColor] = useState<VehicleColor>(selectedModel.colors[0]);
  const [selectedWheel, setSelectedWheel] = useState<VehicleWheel>(selectedModel.wheels[0]);
  const [selectedInterior, setSelectedInterior] = useState<VehicleInterior>(selectedModel.interiors[0]);

  // Sync state if selectedModelId prop changes
  useEffect(() => {
    if (selectedModelId) {
      const model = VEHICLES.find((v) => v.id === selectedModelId);
      if (model) {
        setSelectedModel(model);
        setSelectedColor(model.colors[0]);
        setSelectedWheel(model.wheels[0]);
        setSelectedInterior(model.interiors[0]);
      }
    }
  }, [selectedModelId]);

  // Handle changing model manually in configurator
  const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const model = VEHICLES.find((v) => v.id === e.target.value);
    if (model) {
      setSelectedModel(model);
      setSelectedColor(model.colors[0]);
      setSelectedWheel(model.wheels[0]);
      setSelectedInterior(model.interiors[0]);
    }
  };

  const calculateOptionsPrice = () => {
    return selectedColor.extraPrice + selectedWheel.extraPrice + selectedInterior.extraPrice;
  };

  const calculateTotalPrice = () => {
    return selectedModel.basePriceUZS + calculateOptionsPrice();
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US').format(price) + ' UZS';
  };

  return (
    <section id="configurator" className="py-24 bg-black text-white border-t border-neutral-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">
            {DICTIONARY.configurator[currentLang]}
          </h2>
          <p className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-white">
            {DICTIONARY.configTitle[currentLang]}
          </p>
          <p className="text-neutral-400 text-sm max-w-2xl mx-auto">
            {DICTIONARY.configSubtitle[currentLang]}
          </p>
          <div className="h-1 w-20 bg-white mx-auto mt-4 rounded-full" />
        </div>

        {/* Configurator Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: Visual Preview (takes 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative aspect-video rounded-3xl bg-neutral-950 border border-white/10 overflow-hidden flex items-center justify-center shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800/10 via-black to-black" />
              
              <AnimatePresence mode="wait">
                <motion.img
                  key={`${selectedModel.id}-${selectedColor.id}`}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  src={selectedColor.image}
                  alt={`${selectedModel.name} - ${selectedColor.name[currentLang]}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover relative z-10"
                />
              </AnimatePresence>

              {/* Holographic HUD Specifications indicator on overlay - Styled as a fine frosted card */}
              <div className="absolute bottom-6 left-6 z-20 glass-card px-5 py-3.5 rounded-2xl border-white/15 hidden sm:block font-mono text-[10px] shadow-xl">
                <div className="text-brand-blue uppercase tracking-widest font-bold">{selectedModel.name}</div>
                <div className="text-white font-medium text-xs mt-1 uppercase">
                  {selectedColor.name[currentLang]} • {selectedWheel.size}
                </div>
              </div>
            </div>

            {/* Quick specifications stats summary - Styled as a sleek glass capsule */}
            <div className="grid grid-cols-3 gap-4 glass-card p-5 rounded-2xl font-mono text-xs shadow-md">
              <div className="text-center">
                <div className="text-gray-500 uppercase text-[9px] mb-1">{DICTIONARY.drivingRange[currentLang]}</div>
                <div className="text-white font-bold">{selectedModel.specs.range}</div>
              </div>
              <div className="text-center border-x border-white/10">
                <div className="text-gray-500 uppercase text-[9px] mb-1">{DICTIONARY.accel[currentLang]}</div>
                <div className="text-white font-bold">{selectedModel.specs.acceleration}</div>
              </div>
              <div className="text-center">
                <div className="text-gray-500 uppercase text-[9px] mb-1">{DICTIONARY.topSpeed[currentLang]}</div>
                <div className="text-white font-bold">{selectedModel.specs.maxSpeed}</div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Selection Panel (takes 5 cols) - Styled as an exquisite heavy Frosted Card */}
          <div className="lg:col-span-5 glass-card rounded-3xl p-6 sm:p-8 space-y-8 shadow-2xl">
            
            {/* Model Selection Dropdown */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-wider text-gray-400 font-mono flex items-center">
                <Sparkles className="w-4 h-4 mr-2 text-brand-blue" />
                {DICTIONARY.selectModel[currentLang]}
              </label>
              <select
                value={selectedModel.id}
                onChange={handleModelChange}
                className="w-full bg-neutral-950/60 border border-white/10 text-white rounded-xl py-3.5 px-4 text-sm font-semibold focus:outline-none focus:border-brand-blue transition cursor-pointer"
                id="configurator-model-dropdown"
              >
                {VEHICLES.map((vehicle) => (
                  <option key={vehicle.id} value={vehicle.id} className="bg-neutral-950 text-white">
                    {vehicle.name} ({vehicle.type === 'ev' ? 'EV' : 'DM-i'})
                  </option>
                ))}
              </select>
            </div>

            {/* Color selection circles */}
            <div className="space-y-4">
              <label className="text-xs uppercase tracking-wider text-gray-400 font-mono flex items-center">
                <Palette className="w-4 h-4 mr-2 text-brand-blue" />
                {DICTIONARY.chooseColor[currentLang]}
              </label>
              <div className="flex flex-wrap gap-3">
                {selectedModel.colors.map((color) => {
                  const isActive = selectedColor.id === color.id;
                  return (
                    <button
                      key={color.id}
                      onClick={() => setSelectedColor(color)}
                      className={`h-11 px-4 rounded-full border text-xs font-semibold flex items-center space-x-2 transition-all cursor-pointer ${
                        isActive
                          ? 'border-brand-blue bg-brand-blue/15 text-white font-bold shadow-md shadow-brand-blue/10'
                          : 'border-white/10 bg-neutral-950/40 text-gray-400 hover:border-white/30'
                      }`}
                      title={color.name[currentLang]}
                    >
                      <span className={`w-4 h-4 rounded-full shrink-0 border border-black/20 ${color.bgClass}`} />
                      <span>{color.name[currentLang]}</span>
                      {color.extraPrice > 0 && (
                        <span className="text-[10px] text-gray-500 font-mono">+{formatPrice(color.extraPrice)}</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Wheels alloy Selection */}
            <div className="space-y-4">
              <label className="text-xs uppercase tracking-wider text-gray-400 font-mono flex items-center">
                <Layers className="w-4 h-4 mr-2 text-brand-blue" />
                {DICTIONARY.chooseWheels[currentLang]}
              </label>
              <div className="space-y-2">
                {selectedModel.wheels.map((wheel) => {
                  const isActive = selectedWheel.id === wheel.id;
                  return (
                    <button
                      key={wheel.id}
                      onClick={() => setSelectedWheel(wheel)}
                      className={`w-full text-left p-3 rounded-xl border flex items-center justify-between transition-all cursor-pointer ${
                        isActive
                          ? 'border-brand-blue bg-brand-blue/10 text-white font-semibold'
                          : 'border-white/10 bg-neutral-950/40 text-gray-400 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg overflow-hidden bg-neutral-800 shrink-0">
                          <img src={wheel.image} alt={wheel.name[currentLang]} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white">{wheel.name[currentLang]}</div>
                          <div className="text-[10px] text-gray-500 font-mono">{wheel.size} diameter</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {wheel.extraPrice > 0 && (
                          <span className="text-[10px] text-gray-400 font-mono">+{formatPrice(wheel.extraPrice)}</span>
                        )}
                        {isActive && <Check className="w-4 h-4 text-brand-blue" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Interior color Selection */}
            <div className="space-y-4">
              <label className="text-xs uppercase tracking-wider text-gray-400 font-mono flex items-center">
                <Palette className="w-4 h-4 mr-2 text-brand-blue" />
                {DICTIONARY.chooseInterior[currentLang]}
              </label>
              <div className="space-y-2">
                {selectedModel.interiors.map((interior) => {
                  const isActive = selectedInterior.id === interior.id;
                  return (
                    <button
                      key={interior.id}
                      onClick={() => setSelectedInterior(interior)}
                      className={`w-full text-left p-3.5 rounded-xl border flex items-center justify-between transition-all cursor-pointer ${
                        isActive
                          ? 'border-brand-blue bg-brand-blue/10 text-white font-semibold'
                          : 'border-white/10 bg-neutral-950/40 text-gray-400 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className="w-8 h-8 rounded-full border border-white/20 shrink-0"
                          style={{ backgroundColor: interior.hex }}
                        />
                        <div className="text-xs font-semibold text-white">{interior.name[currentLang]}</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {interior.extraPrice > 0 && (
                          <span className="text-[10px] text-gray-400 font-mono">+{formatPrice(interior.extraPrice)}</span>
                        )}
                        {isActive && <Check className="w-4 h-4 text-brand-blue" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Pricing Breakdowns */}
            <div className="pt-6 border-t border-white/10 space-y-3.5 font-mono text-xs">
              <div className="flex justify-between text-gray-400">
                <span>{DICTIONARY.basePrice[currentLang]}</span>
                <span>{formatPrice(selectedModel.basePriceUZS)}</span>
              </div>
              
              {calculateOptionsPrice() > 0 && (
                <div className="flex justify-between text-gray-400">
                  <span>{DICTIONARY.selectedOptionsPrice[currentLang]}</span>
                  <span className="text-gray-300">+{formatPrice(calculateOptionsPrice())}</span>
                </div>
              )}

              <div className="flex justify-between items-baseline pt-4 border-t border-white/10">
                <span className="text-xs uppercase text-white font-sans font-semibold">{DICTIONARY.totalPrice[currentLang]}</span>
                <span className="text-2xl font-light text-brand-blue font-sans">{formatPrice(calculateTotalPrice())}</span>
              </div>
            </div>

            {/* Direct CTA */}
            <button
              onClick={() => onConfigSaved(selectedModel.id, calculateTotalPrice())}
              className="w-full bg-brand-blue text-white hover:bg-brand-blue/90 py-4 rounded-xl text-xs font-bold uppercase tracking-widest flex items-center justify-center transition-all duration-300 transform active:scale-95 shadow-lg shadow-brand-blue/20 cursor-pointer border border-brand-blue/20"
              id="configurator-save-cta"
            >
              <span>{DICTIONARY.confirmConfig[currentLang]}</span>
              <ChevronRight className="w-4 h-4 ml-1.5 text-white" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
