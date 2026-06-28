import React, { useState } from 'react';
import { DICTIONARY, FAQS } from '../data';
import { Language } from '../types';
import { Shield, BatteryCharging, ShieldCheck, HeartPulse, ChevronDown, Award, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BrandStoryProps {
  currentLang: Language;
}

export default function BrandStory({ currentLang }: BrandStoryProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const techCards = [
    {
      id: 'blade',
      title: DICTIONARY.bladeBatteryTitle[currentLang],
      desc: DICTIONARY.bladeBatteryDesc[currentLang],
      icon: ShieldCheck,
      details: currentLang === 'uz' ? 'Ignasimon teshib oʻtish sinovidan oʻtganda hech qanday tutun yoki olov chiqarmaydi. Sirt harorati atigi 30-60°C oraligʻida qoladi.' : currentLang === 'ru' ? 'При проколе иглой не выделяет дыма или огня. Температура поверхности остается в пределах 30-60°C.' : 'Emits zero smoke or fire during severe nail puncture testing. Surface temperature remains safely between 30-60°C.',
    },
    {
      id: 'dmi',
      title: DICTIONARY.dmiTitle[currentLang],
      desc: DICTIONARY.dmiDesc[currentLang],
      icon: BatteryCharging,
      details: currentLang === 'uz' ? '90% gacha boʻlgan samaradorlik koeffitsiyentiga ega benzinli generator va kuchli elektr dvigatel uygʻunligi.' : currentLang === 'ru' ? 'Сочетание бензинового генератора с КПД до 90% и мощного тягового электродвигателя.' : 'Combined highly integrated generator engine with over 90% thermal efficiency and robust traction electrical motors.',
    },
    {
      id: 'eplat',
      title: DICTIONARY.eplatformTitle[currentLang],
      desc: DICTIONARY.eplatformDesc[currentLang],
      icon: Award,
      details: currentLang === 'uz' ? '8-in-1 elektr yuritmali integratsiya tizimi ogʻirlikni 15% ga kamaytirib, umumiy samaradorlikni 89% gacha oshiradi.' : currentLang === 'ru' ? 'Интеграция электропривода 8-в-1 снижает вес на 15% и повышает общую эффективность до 89%.' : 'The 8-in-1 electric powertrain integration reduces vehicle mass by 15% and pushes total system efficiency up to 89%.',
    },
  ];

  return (
    <section id="technology" className="py-24 bg-neutral-950 text-white border-t border-neutral-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* SECTION 1: CORE TECHNOLOGIES */}
        <div className="space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">
              {DICTIONARY.technology[currentLang]}
            </h2>
            <p className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-white">
              {DICTIONARY.techTitle[currentLang]}
            </p>
            <div className="h-1 w-20 bg-white mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {techCards.map((card, idx) => {
               const IconComp = card.icon;
               return (
                 <div
                   key={card.id}
                   className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-lg"
                 >
                   <div className="space-y-4">
                     <div className="w-12 h-12 bg-brand-blue/10 border border-brand-blue/20 rounded-2xl flex items-center justify-center text-brand-blue shrink-0 shadow-sm animate-pulse">
                       <IconComp className="w-6 h-6" />
                     </div>
                     <h3 className="text-lg sm:text-xl font-bold font-sans tracking-tight text-white">
                       {card.title}
                     </h3>
                     <p className="text-xs text-gray-400 leading-relaxed font-light font-sans">
                       {card.desc}
                     </p>
                   </div>
                   
                   <div className="pt-4 border-t border-white/10 font-mono text-[10px] text-gray-500">
                     <span className="text-brand-blue font-bold block mb-1 uppercase tracking-wider text-[9px]">
                       {currentLang === 'uz' ? 'Tehnik Fakt' : currentLang === 'ru' ? 'Технический факт' : 'Tech Fact'}
                     </span>
                     <p className="leading-relaxed font-light">{card.details}</p>
                   </div>
                 </div>
               );
             })}
          </div>
        </div>

        {/* SECTION 2: INTELLIGENT FAQS (ACCORDIONS) */}
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto border border-brand-blue/20 text-brand-blue shadow-md">
              <HelpCircle className="w-6 h-6" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-sans font-bold tracking-tight text-white">
              {currentLang === 'uz' ? 'Koʻp soʻraladigan savollar' : currentLang === 'ru' ? 'Часто задаваемые вопросы' : 'Frequently Asked Questions'}
            </h3>
            <p className="text-xs text-brand-blue font-mono uppercase tracking-widest font-bold">
              FAQ BYD AUTO UZBEKISTAN
            </p>
          </div>

          <div className="space-y-4" id="faqs-accordion-container">
            {FAQS.map((faq, idx) => {
               const isOpen = activeFaq === idx;
               return (
                 <div
                   key={idx}
                   className="glass-card border-white/5 hover:border-white/15 rounded-2xl overflow-hidden transition-all duration-300 shadow-md"
                 >
                   <button
                     onClick={() => toggleFaq(idx)}
                     className="w-full text-left p-5 flex justify-between items-center space-x-4 cursor-pointer"
                     id={`faq-btn-${idx}`}
                   >
                     <span className="text-sm font-semibold text-white tracking-wide font-sans leading-relaxed">
                       {faq.question[currentLang]}
                     </span>
                     <ChevronDown className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-300 ${
                       isOpen ? 'rotate-180 text-brand-blue' : ''
                     }`} />
                   </button>

                   <AnimatePresence initial={false}>
                     {isOpen && (
                       <motion.div
                         initial={{ height: 0, opacity: 0 }}
                         animate={{ height: 'auto', opacity: 1 }}
                         exit={{ height: 0, opacity: 0 }}
                         transition={{ duration: 0.25 }}
                         className="border-t border-white/10 bg-neutral-950/20"
                       >
                         <p className="p-5 text-xs text-gray-400 leading-relaxed font-sans font-light">
                           {faq.answer[currentLang]}
                         </p>
                       </motion.div>
                     )}
                   </AnimatePresence>
                 </div>
               );
             })}
          </div>
        </div>

      </div>
    </section>
  );
}
