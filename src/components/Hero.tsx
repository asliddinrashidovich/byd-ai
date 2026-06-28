import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowDown, Sparkles, Battery, Zap } from 'lucide-react';
import { Language } from '../types';
import { DICTIONARY } from '../data';
import { motion, AnimatePresence } from 'motion/react';

interface HeroProps {
  currentLang: Language;
  onExploreModels: () => void;
  onConfigure: () => void;
}

const SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=1920',
    title: {
      uz: 'BYD HAN EV: Haqiqiy Hashamat',
      ru: 'BYD HAN EV: Истинная роскошь',
      en: 'BYD HAN EV: Pure Luxury Electric',
    },
    tagline: {
      uz: 'Aerodinamik mukammallik va premium qulaylik bitta elektromobilda.',
      ru: 'Аэродинамическое совершенство и премиальный комфорт в одном электромобиле.',
      en: 'Aerodynamic perfection and premium comfort combined into one high-performance EV.',
    },
    stat: '3.9s',
    statLabel: { uz: '0-100 km/s tezlanish', ru: 'Разгон 0-100 км/ч', en: '0-100 km/h acceleration' },
  },
  {
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1920',
    title: {
      uz: 'BYD SONG PLUS DM-i: Yangi Avlod Gibridi',
      ru: 'BYD SONG PLUS DM-i: Гибрид нового поколения',
      en: 'BYD SONG PLUS DM-i: Next-Gen Hybrid SUV',
    },
    tagline: {
      uz: 'Hech qanday cheklovlarsiz haydash: 1150 km umumiy yurish masofasi.',
      ru: 'Вождение без границ: общий запас хода 1150 км.',
      en: 'Drive without limits: 1,150 km combined cruising range.',
    },
    stat: '1,150 km',
    statLabel: { uz: 'Umumiy yurish masofasi', ru: 'Общий запас хода', en: 'Combined range capacity' },
  },
  {
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1920',
    title: {
      uz: 'Zamonamiy Texnologiyalar va Blade Battery',
      ru: 'Современные технологии и Blade Battery',
      en: 'Advanced Technologies & Blade Battery',
    },
    tagline: {
      uz: 'Muvaffaqiyatli igna sinovlaridan oʻtgan eng xavfsiz akkumulyator platformasi.',
      ru: 'Самая безопасная аккумуляторная платформа, успешно прошедшая испытания.',
      en: 'The ultra-safe battery platform that passed severe penetration nail testing.',
    },
    stat: '100%',
    statLabel: { uz: 'Maksimal xavfsizlik darajasi', ru: 'Максимальный уровень безопасности', en: 'Ultimate safety standard' },
  },
];

export default function Hero({ currentLang, onExploreModels, onConfigure }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  return (
    <section id="hero" className="relative h-[92vh] w-full overflow-hidden hero-gradient text-white">
      {/* Slides Background Wrapper */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.75, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-cover bg-center mix-blend-screen"
            style={{
              backgroundImage: `linear-gradient(to top, rgba(3,4,6,0.95) 15%, rgba(3,4,6,0.5) 60%, rgba(3,4,6,0.85) 100%), url(${SLIDES[currentSlide].image})`,
            }}
          />
        </AnimatePresence>
        
        {/* Abstract Glowing Neon Blue Halo to enhance the Frosted Glass look */}
        <div className="absolute top-[30%] right-[20%] w-[35rem] h-[35rem] rounded-full bg-brand-blue/15 blur-[120px] pointer-events-none" />
      </div>

      {/* Slide Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-start z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl space-y-6">
            {/* Tagline / Mini header */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-brand-blue/10 backdrop-blur-md px-4 py-2 rounded-full border border-brand-blue/20 text-xs font-semibold tracking-[0.2em] uppercase text-brand-blue"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-blue animate-pulse" />
              <span>{DICTIONARY.heroTitle[currentLang]}</span>
            </motion.div>

            {/* Main Headline */}
            <AnimatePresence mode="wait">
              <motion.h1
                key={`title-${currentSlide}`}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-6xl lg:text-7xl font-sans font-extralight leading-tight tracking-tight text-white"
              >
                {SLIDES[currentSlide].title[currentLang]}
              </motion.h1>
            </AnimatePresence>

            {/* Description */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`tagline-${currentSlide}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-base sm:text-lg text-neutral-300 max-w-2xl font-light leading-relaxed"
              >
                {SLIDES[currentSlide].tagline[currentLang]}
              </motion.p>
            </AnimatePresence>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4"
            >
              <button
                onClick={onExploreModels}
                className="bg-brand-blue text-white hover:bg-brand-blue/90 text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-full transition duration-300 shadow-lg shadow-brand-blue/20 transform active:scale-95 text-center cursor-pointer border border-brand-blue/20"
              >
                {DICTIONARY.exploreModels[currentLang]}
              </button>
              <button
                onClick={onConfigure}
                className="glass-card hover:bg-white/10 text-white text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-full transition duration-300 transform active:scale-95 text-center cursor-pointer"
              >
                {DICTIONARY.configureYourOwn[currentLang]}
              </button>
            </motion.div>

            {/* Key stat card styled as a pristine frosted glass capsule */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`stat-${currentSlide}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="pt-6 mt-8 max-w-sm"
              >
                <div className="glass-card rounded-2xl p-4 sm:p-5 flex items-center space-x-4 border-white/10 hover:border-white/20 transition duration-300">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                    <Zap className="w-5 h-5 text-brand-blue animate-pulse" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-mono font-bold tracking-tight text-white flex items-baseline">
                      {SLIDES[currentSlide].stat}
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-gray-400 mt-0.5">
                      {SLIDES[currentSlide].statLabel[currentLang]}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Manual Slide Toggles */}
      <div className="absolute bottom-10 right-4 sm:right-12 z-20 flex items-center space-x-3">
        <button
          onClick={handlePrev}
          className="p-3 rounded-full border border-white/20 bg-black/40 backdrop-blur-sm text-white hover:bg-white hover:text-black transition"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          className="p-3 rounded-full border border-white/20 bg-black/40 backdrop-blur-sm text-white hover:bg-white hover:text-black transition"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 hidden md:flex flex-col items-center space-y-1 opacity-60 hover:opacity-100 cursor-pointer" onClick={onExploreModels}>
        <span className="text-xs tracking-widest uppercase font-mono font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </div>

      {/* Dots navigation indicators */}
      <div className="absolute bottom-12 left-4 sm:left-12 z-20 flex space-x-2">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/40'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
