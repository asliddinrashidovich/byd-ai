import React, { useState, useEffect } from 'react';
import { VEHICLES, DICTIONARY } from '../data';
import { Vehicle, Language } from '../types';
import { Calculator, Percent, Calendar, TrendingUp, DollarSign, ShieldCheck } from 'lucide-react';

interface LoanCalculatorProps {
  currentLang: Language;
  preloadedModelId: string | null;
  preloadedPrice: number | null;
}

export default function LoanCalculator({
  currentLang,
  preloadedModelId,
  preloadedPrice,
}: LoanCalculatorProps) {
  // Sync selected model
  const [selectedModel, setSelectedModel] = useState<Vehicle>(
    VEHICLES.find((v) => v.id === preloadedModelId) || VEHICLES[0]
  );
  
  // Custom price loaded from configurator
  const [carPrice, setCarPrice] = useState<number>(preloadedPrice || selectedModel.basePriceUZS);

  // Sliders parameters
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(30); // default 30%
  const [durationMonths, setDurationMonths] = useState<number>(36); // default 3 years
  const [interestRate, setInterestRate] = useState<number>(18); // default 18% UZS rate
  
  // Modal booking
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');

  // Synchronize when preloaded parameters change
  useEffect(() => {
    if (preloadedModelId) {
      const model = VEHICLES.find((v) => v.id === preloadedModelId);
      if (model) {
        setSelectedModel(model);
        setCarPrice(preloadedPrice || model.basePriceUZS);
      }
    }
  }, [preloadedModelId, preloadedPrice]);

  // Update carPrice if preloadedPrice is null but model is changed manually in calculator
  const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const model = VEHICLES.find((v) => v.id === e.target.value);
    if (model) {
      setSelectedModel(model);
      setCarPrice(model.basePriceUZS);
    }
  };

  // Finance annuity calculations
  const calculateDownPaymentAmount = () => {
    return Math.round(carPrice * (downPaymentPercent / 100));
  };

  const calculatePrincipal = () => {
    return carPrice - calculateDownPaymentAmount();
  };

  const calculateMonthlyPayment = () => {
    const principal = calculatePrincipal();
    const monthlyRate = interestRate / 12 / 100;
    
    if (monthlyRate === 0) {
      return Math.round(principal / durationMonths);
    }

    const annuityFactor = (monthlyRate * Math.pow(1 + monthlyRate, durationMonths)) / 
                          (Math.pow(1 + monthlyRate, durationMonths) - 1);
    
    return Math.round(principal * annuityFactor);
  };

  const calculateTotalPaid = () => {
    return calculateMonthlyPayment() * durationMonths;
  };

  const calculateTotalInterest = () => {
    return calculateTotalPaid() - calculatePrincipal();
  };

  const calculateTotalCreditCost = () => {
    return calculateTotalPaid() + calculateDownPaymentAmount();
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US').format(price) + ' UZS';
  };

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (clientName && clientPhone) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setShowApplyModal(false);
        setClientName('');
        setClientPhone('');
      }, 4000);
    }
  };

  return (
    <section id="finance" className="py-24 bg-neutral-950 text-white border-t border-neutral-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">
            {DICTIONARY.finance[currentLang]}
          </h2>
          <p className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-white">
            {DICTIONARY.calcTitle[currentLang]}
          </p>
          <p className="text-neutral-400 text-sm max-w-2xl mx-auto">
            {DICTIONARY.calcSubtitle[currentLang]}
          </p>
          <div className="h-1 w-20 bg-white mx-auto mt-4 rounded-full" />
        </div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT PANEL: Sliders & Controls (takes 7 cols) */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl space-y-8 shadow-2xl">
            
            {/* Model Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-gray-400 font-mono flex items-center">
                  <Calculator className="w-4 h-4 mr-2 text-brand-blue" />
                  {currentLang === 'uz' ? 'Avtomobil rusumi' : currentLang === 'ru' ? 'Модель автомобиля' : 'Vehicle Model'}
                </label>
                <select
                  value={selectedModel.id}
                  onChange={handleModelChange}
                  className="w-full bg-neutral-950/60 border border-white/10 text-white rounded-xl py-3 px-4 text-sm font-semibold focus:outline-none focus:border-brand-blue cursor-pointer"
                  id="loan-model-select"
                >
                  {VEHICLES.map((vehicle) => (
                    <option key={vehicle.id} value={vehicle.id} className="bg-neutral-950 text-white">
                      {vehicle.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Manual Overlook / Config Info */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-gray-400 font-mono">
                  {currentLang === 'uz' ? 'Avtomobil narxi' : currentLang === 'ru' ? 'Стоимость автомобиля' : 'Car Value'}
                </label>
                <div className="w-full bg-neutral-950/60 border border-white/10 text-white rounded-xl py-3 px-4 text-sm font-bold font-mono">
                  {formatPrice(carPrice)}
                  {preloadedPrice && preloadedModelId === selectedModel.id && (
                    <span className="text-[10px] text-brand-blue block font-sans font-normal mt-0.5">
                      ✓ {currentLang === 'uz' ? 'Keltirilgan konfiguratsiya narxi' : currentLang === 'ru' ? 'Загружена цена вашей сборки' : 'Custom configuration price loaded'}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Slider 1: Down Payment Percent */}
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm font-mono">
                <span className="text-gray-300 flex items-center">
                  <Percent className="w-4 h-4 mr-2 text-brand-blue" />
                  {DICTIONARY.downPayment[currentLang]}
                </span>
                <span className="text-white font-bold">{downPaymentPercent}% ({formatPrice(calculateDownPaymentAmount())})</span>
              </div>
              <input
                type="range"
                min="10"
                max="60"
                step="5"
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full accent-brand-blue bg-neutral-950 h-2 rounded-lg cursor-pointer"
                id="loan-downpayment-slider"
              />
              <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                <span>10%</span>
                <span>30%</span>
                <span>60%</span>
              </div>
            </div>

            {/* Slider 2: Loan Duration */}
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm font-mono">
                <span className="text-gray-300 flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-brand-blue" />
                  {DICTIONARY.loanDuration[currentLang]}
                </span>
                <span className="text-white font-bold">{durationMonths} {DICTIONARY.months[currentLang]} ({Math.round(durationMonths/12)} {currentLang === 'uz' ? 'yil' : currentLang === 'ru' ? 'года' : 'years'})</span>
              </div>
              <div className="flex gap-2">
                {[12, 24, 36, 48, 60].map((months) => (
                  <button
                    key={months}
                    onClick={() => setDurationMonths(months)}
                    className={`flex-1 py-3 rounded-xl border text-xs font-mono font-bold transition-all cursor-pointer ${
                      durationMonths === months
                        ? 'bg-brand-blue text-white border-brand-blue shadow-md shadow-brand-blue/20'
                        : 'bg-neutral-950/40 border-white/10 text-gray-400 hover:border-white/20'
                    }`}
                  >
                    {months} {DICTIONARY.months[currentLang]}
                  </button>
                ))}
              </div>
            </div>

            {/* Slider 3: Interest Rate */}
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm font-mono">
                <span className="text-gray-300 flex items-center">
                  <TrendingUp className="w-4 h-4 mr-2 text-brand-blue" />
                  {DICTIONARY.interestRate[currentLang]}
                </span>
                <span className="text-white font-bold">{interestRate}% / {currentLang === 'uz' ? 'yil' : currentLang === 'ru' ? 'год' : 'year'}</span>
              </div>
              <input
                type="range"
                min="12"
                max="24"
                step="0.5"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full accent-brand-blue bg-neutral-950 h-2 rounded-lg cursor-pointer"
                id="loan-rate-slider"
              />
              <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                <span>12% (UZS Promo)</span>
                <span>18% (Standard)</span>
                <span>24% (Max)</span>
              </div>
            </div>

            <div className="pt-2 flex items-center space-x-2.5 text-xs text-gray-400 bg-neutral-950/40 p-4 rounded-xl border border-white/10">
              <ShieldCheck className="w-5 h-5 text-brand-blue shrink-0 animate-pulse" />
              <span>
                {currentLang === 'uz'
                  ? 'Hisob-kitoblar taxminiy hisoblanadi. Yakuniy shartlar dilerlik markazida tuziladi.'
                  : currentLang === 'ru'
                  ? 'Расчеты являются предварительными. Окончательные условия оговариваются в салоне.'
                  : 'Calculations are preliminary estimates. Final conditions are determined at the showroom.'}
              </span>
            </div>
          </div>

          {/* RIGHT PANEL: Dynamic Totals Dashboard (takes 5 cols) */}
          <div className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-3xl space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-36 h-36 bg-brand-blue/10 rounded-full blur-2xl -mr-16 -mt-16" />
            
            <div className="text-center pb-6 border-b border-white/10">
              <div className="text-[10px] uppercase tracking-widest text-gray-400 font-mono mb-2">
                {DICTIONARY.monthlyPayment[currentLang]}
              </div>
              <div className="text-3xl sm:text-4xl font-light tracking-tight text-brand-blue font-sans">
                {formatPrice(calculateMonthlyPayment())}
              </div>
              <div className="text-[10px] text-gray-500 font-mono mt-1">
                {currentLang === 'uz' ? 'Annuitet tizimi boʻyicha oylik toʻlov' : currentLang === 'ru' ? 'Ежемесячно по аннуитетной схеме' : 'Annuity monthly payment plan'}
              </div>
            </div>

            {/* Price Specifications grid */}
            <div className="space-y-4 pt-2 text-xs font-mono">
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-gray-400 flex items-center">
                  <DollarSign className="w-3.5 h-3.5 mr-1.5 text-brand-blue" />
                  {currentLang === 'uz' ? 'Kredit miqdori' : currentLang === 'ru' ? 'Сумма кредита' : 'Principal Amount'}
                </span>
                <span className="font-semibold text-white">{formatPrice(calculatePrincipal())}</span>
              </div>
              
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-gray-400 flex items-center">
                  <Percent className="w-3.5 h-3.5 mr-1.5 text-brand-blue" />
                  {DICTIONARY.totalInterest[currentLang]}
                </span>
                <span className="font-semibold text-white">+{formatPrice(calculateTotalInterest())}</span>
              </div>

              <div className="flex justify-between items-center py-2">
                <span className="text-gray-400 flex items-center">
                  <Calculator className="w-3.5 h-3.5 mr-1.5 text-brand-blue" />
                  {DICTIONARY.totalAmountPaid[currentLang]}
                </span>
                <span className="font-bold text-white text-sm">{formatPrice(calculateTotalCreditCost())}</span>
              </div>
            </div>

            {/* Circular representation meter simulation */}
            <div className="bg-black/40 p-4 rounded-xl border border-white/5 text-[11px] space-y-2">
              <div className="flex justify-between text-gray-400 font-mono">
                <span>Down Payment ({downPaymentPercent}%)</span>
                <span>{Math.round(100 - downPaymentPercent)}% Loan Balance</span>
              </div>
              <div className="w-full bg-neutral-950 h-2 rounded-full overflow-hidden flex">
                <div 
                  className="bg-white/20 h-full transition-all duration-500" 
                  style={{ width: `${downPaymentPercent}%` }}
                />
                <div 
                  className="bg-brand-blue h-full transition-all duration-500" 
                  style={{ width: `${100 - downPaymentPercent}%` }}
                />
              </div>
            </div>

            {/* Main Application lead capture button */}
            <button
              onClick={() => setShowApplyModal(true)}
              className="w-full bg-brand-blue text-white hover:bg-brand-blue/90 py-4 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 transform active:scale-95 shadow-lg shadow-brand-blue/20 cursor-pointer border border-brand-blue/20"
              id="loan-apply-btn"
            >
              {DICTIONARY.applyForCredit[currentLang]}
            </button>
          </div>

        </div>
      </div>

      {/* Credit Apply Lead Modal */}
      {showApplyModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="glass-card rounded-3xl p-6 sm:p-8 max-w-md w-full relative shadow-2xl">
            <h3 className="text-xl font-light mb-2 text-white">
              {DICTIONARY.applyForCredit[currentLang]}
            </h3>
            <p className="text-xs text-brand-blue mb-6 font-mono font-bold uppercase">
              {selectedModel.name} • {formatPrice(carPrice)}
            </p>

            {isSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-12 h-12 bg-brand-blue/15 text-brand-blue rounded-full flex items-center justify-center mx-auto text-2xl font-bold border border-brand-blue/30">
                  ✓
                </div>
                <p className="text-sm font-semibold text-white">
                  {DICTIONARY.bookingSuccess[currentLang]}
                </p>
              </div>
            ) : (
              <form onSubmit={handleApply} className="space-y-4 text-xs font-mono">
                <div className="space-y-1.5">
                  <label className="text-gray-400 uppercase tracking-wider block">
                    {DICTIONARY.fullName[currentLang]}
                  </label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full bg-neutral-950/60 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-brand-blue text-sm"
                    placeholder="Asliddin Rashidovich"
                    id="finance-apply-name"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-gray-400 uppercase tracking-wider block">
                    {DICTIONARY.phoneLabel[currentLang]}
                  </label>
                  <input
                    type="tel"
                    required
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full bg-neutral-950/60 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-brand-blue text-sm"
                    placeholder="+998 90 123 45 67"
                    id="finance-apply-phone"
                  />
                </div>

                <div className="pt-4 flex space-x-3 text-xs">
                  <button
                    type="button"
                    onClick={() => setShowApplyModal(false)}
                    className="flex-1 border border-white/10 hover:bg-white/5 py-3 rounded-xl uppercase tracking-widest transition"
                  >
                    {DICTIONARY.closeBtn[currentLang]}
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-brand-blue text-white hover:bg-brand-blue/90 border border-brand-blue/20 py-3 rounded-xl uppercase tracking-widest font-bold transition shadow-md shadow-brand-blue/15"
                    id="finance-apply-submit"
                  >
                    {DICTIONARY.submitBooking[currentLang]}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </section>
  );
}
