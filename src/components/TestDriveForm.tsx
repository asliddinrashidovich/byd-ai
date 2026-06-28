import React, { useState } from 'react';
import { VEHICLES, DEALERS, DICTIONARY } from '../data';
import { Language } from '../types';
import { Calendar, User, Phone, CheckSquare, X, ShieldAlert, Sparkles, AlertCircle } from 'lucide-react';

interface TestDriveFormProps {
  currentLang: Language;
  isOpen: boolean;
  onClose: () => void;
  preselectedModelId: string | null;
}

export default function TestDriveForm({
  currentLang,
  isOpen,
  onClose,
  preselectedModelId,
}: TestDriveFormProps) {
  const [modelId, setModelId] = useState(preselectedModelId || VEHICLES[0].id);
  const [dealerId, setDealerId] = useState(DEALERS[0].id);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('11:00 - 13:00');
  const [consent, setConsent] = useState(true);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync state if preselected model changes
  React.useEffect(() => {
    if (preselectedModelId) {
      setModelId(preselectedModelId);
    }
  }, [preselectedModelId]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) return;

    setIsSubmitting(true);

    // Simulate server side registration
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const selectedModelObj = VEHICLES.find((v) => v.id === modelId) || VEHICLES[0];
  const selectedDealerObj = DEALERS.find((d) => d.id === dealerId) || DEALERS[0];

  const timeSlots = [
    '09:00 - 11:00',
    '11:00 - 13:00',
    '13:00 - 15:00',
    '15:00 - 17:00',
    '17:00 - 19:00',
  ];

  // Get current date formatted for min date attribute
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div 
        className="glass-card max-w-2xl w-full overflow-hidden shadow-2xl relative flex flex-col md:flex-row border-white/20 backdrop-blur-xl"
        id="test-drive-modal-container"
      >
        {/* Left column: Visual context card */}
        <div className="md:w-5/12 bg-neutral-950/40 p-6 sm:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10">
          <div className="space-y-4">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-brand-blue">
              BYD DRIVE
            </div>
            <h3 className="text-2xl font-light text-white font-sans">
              {DICTIONARY.tdTitle[currentLang]}
            </h3>
            <p className="text-xs text-gray-400 font-light leading-relaxed font-sans">
              {DICTIONARY.tdSubtitle[currentLang]}
            </p>
          </div>

          <div className="hidden md:block pt-8">
            <div className="aspect-video rounded-2xl overflow-hidden bg-neutral-900/60 border border-white/10 mb-4">
              <img
                src={selectedModelObj.featuredImage}
                alt={selectedModelObj.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="font-mono text-[10px]">
              <div className="text-white font-bold uppercase tracking-wider">{selectedModelObj.name}</div>
              <div className="text-brand-blue mt-1 uppercase font-bold">Range: {selectedModelObj.specs.range} • {selectedModelObj.specs.acceleration}</div>
            </div>
          </div>
        </div>

        {/* Right column: Form */}
        <div className="md:w-7/12 p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-full transition cursor-pointer"
            id="test-drive-close-btn"
          >
            <X className="w-5 h-5" />
          </button>

          {isSuccess ? (
            <div className="h-full flex flex-col justify-center items-center text-center space-y-5 py-8" id="test-drive-success-block">
              <div className="w-14 h-14 bg-brand-blue/15 text-brand-blue border border-brand-blue/30 rounded-full flex items-center justify-center text-3xl font-bold animate-bounce">
                ✓
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-semibold font-sans text-white">
                  {currentLang === 'uz' ? 'Muvaffaqiyatli band qilindi!' : currentLang === 'ru' ? 'Запись подтверждена!' : 'Appointment Confirmed!'}
                </h4>
                <p className="text-xs text-gray-400 max-w-sm mx-auto font-sans font-light">
                  {DICTIONARY.bookingSuccess[currentLang]}
                </p>
              </div>

              {/* Booking Summary details Card */}
              <div className="w-full glass-card p-4 rounded-2xl border-white/15 font-mono text-[10px] text-left space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-500">Model:</span>
                  <span className="text-white font-bold">{selectedModelObj.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Showroom:</span>
                  <span className="text-white font-bold">{selectedDealerObj.name[currentLang].replace('BYD ', '')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Date & Time:</span>
                  <span className="text-white font-bold">{date || today} ({timeSlot})</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setIsSuccess(false);
                  onClose();
                }}
                className="w-full bg-brand-blue text-white hover:bg-brand-blue/90 border border-brand-blue/20 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition"
              >
                {DICTIONARY.closeBtn[currentLang]}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
              {/* Select Model */}
              <div className="space-y-1.5">
                <label className="text-gray-400 uppercase tracking-wider block">
                  {currentLang === 'uz' ? 'Avtomobil rusumi' : currentLang === 'ru' ? 'Модель автомобиля' : 'Select Vehicle'}
                </label>
                <select
                  value={modelId}
                  onChange={(e) => setModelId(e.target.value)}
                  className="w-full bg-neutral-950/60 border border-white/10 rounded-xl py-3 px-4 text-white text-xs focus:outline-none focus:border-brand-blue cursor-pointer"
                  id="testdrive-select-model"
                >
                  {VEHICLES.map((v) => (
                    <option key={v.id} value={v.id} className="bg-neutral-950 text-white">
                      {v.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Select Dealer */}
              <div className="space-y-1.5">
                <label className="text-gray-400 uppercase tracking-wider block">
                  {DICTIONARY.selectDealer[currentLang]}
                </label>
                <select
                  value={dealerId}
                  onChange={(e) => setDealerId(e.target.value)}
                  className="w-full bg-neutral-950/60 border border-white/10 rounded-xl py-3 px-4 text-white text-xs focus:outline-none focus:border-brand-blue cursor-pointer"
                  id="testdrive-select-dealer"
                >
                  {DEALERS.map((d) => (
                    <option key={d.id} value={d.id} className="bg-neutral-950 text-white">
                      {d.name[currentLang]}
                    </option>
                  ))}
                </select>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-gray-400 uppercase tracking-wider block flex items-center">
                    <User className="w-3.5 h-3.5 mr-1 text-brand-blue" />
                    {DICTIONARY.fullName[currentLang]}
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-neutral-950/60 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-brand-blue text-xs"
                    placeholder="Asliddin Rashidovich"
                    id="testdrive-fullname"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-gray-400 uppercase tracking-wider block flex items-center">
                    <Phone className="w-3.5 h-3.5 mr-1 text-brand-blue" />
                    {DICTIONARY.phoneLabel[currentLang]}
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-neutral-950/60 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-brand-blue text-xs"
                    placeholder="+998 (__) ___-__-__"
                    id="testdrive-phone"
                  />
                </div>
              </div>

              {/* Date & Time slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-gray-400 uppercase tracking-wider block flex items-center">
                    <Calendar className="w-3.5 h-3.5 mr-1 text-brand-blue" />
                    {DICTIONARY.selectDate[currentLang]}
                  </label>
                  <input
                    type="date"
                    required
                    min={today}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-neutral-950/60 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-brand-blue text-xs cursor-pointer"
                    id="testdrive-date"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-gray-400 uppercase tracking-wider block">
                    {DICTIONARY.selectTime[currentLang]}
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full bg-neutral-950/60 border border-white/10 rounded-xl py-3 px-4 text-white text-xs focus:outline-none focus:border-brand-blue cursor-pointer"
                    id="testdrive-time"
                  >
                    {timeSlots.map((ts) => (
                      <option key={ts} value={ts} className="bg-neutral-950 text-white">
                        {ts}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Consent check */}
              <div className="flex items-start space-x-2.5 pt-2">
                <input
                  type="checkbox"
                  required
                  id="consent-check"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1 h-4 w-4 bg-neutral-950 border-white/10 accent-brand-blue rounded focus:outline-none cursor-pointer"
                />
                <label htmlFor="consent-check" className="text-[10px] text-gray-400 leading-normal select-none cursor-pointer">
                  {DICTIONARY.consentCheck[currentLang]}
                </label>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-blue text-white hover:bg-brand-blue/90 border border-brand-blue/20 py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest transition duration-300 transform active:scale-95 disabled:bg-gray-500 disabled:cursor-not-allowed shadow-lg shadow-brand-blue/20 cursor-pointer"
                id="testdrive-submit-btn"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2" />
                    <span>Processing...</span>
                  </span>
                ) : (
                  DICTIONARY.submitBooking[currentLang]
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
