import React from 'react';
import { Language } from '../types';
import { DICTIONARY } from '../data';
import { Mail, Phone, MapPin, Send, Instagram, Youtube, Facebook } from 'lucide-react';

interface FooterProps {
  currentLang: Language;
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ currentLang, onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="bg-neutral-950/90 backdrop-blur-md text-white border-t border-white/10 pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & Logo */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <svg className="h-6 w-auto text-brand-blue fill-current" viewBox="0 0 160 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.4 8c1.8 0 3.2.3 4.2.9 1 .6 1.7 1.4 2.1 2.5.4 1 .6 2.3.6 3.8 0 1.5-.2 2.8-.7 3.8-.5 1.1-1.2 1.9-2.2 2.5-1 .6-2.4.9-4.1.9H2V8h10.4zm-2.8 3.5v9h2.3c1.5 0 2.5-.4 3.1-1.1s.8-1.9.8-3.4c0-1.5-.3-2.5-.9-3.2-.6-.7-1.6-1.1-3.1-1.1H9.6zm23.6-3.5l6.3 10.3L45.8 8h5.3l-9.1 14.1c-.5.8-1 1.4-1.6 1.8-.6.4-1.4.6-2.4.6H36l6-9.3L36 8h4.2l-1 2.3v1.3zm25.8 0c2.5 0 4.5.7 5.9 2.2 1.4 1.4 2.1 3.5 2.1 6.2 0 2.7-.7 4.8-2.1 6.2-1.4 1.4-3.4 2.1-5.9 2.1H48V8h11zm-2.6 3.5h-2.8v10.1h2.8c1.5 0 2.6-.4 3.2-1.2.6-.8 1-2.1 1-3.8 0-1.8-.3-3.1-1-3.9s-1.7-1.2-3.2-1.2z" />
                <path d="M74 15h4v2h-4zm51 0h4v2h-4zM86 11.5c-4.1 0-7.5 3.4-7.5 7.5s3.4 7.5 7.5 7.5 7.5-3.4 7.5-7.5-3.4-7.5-7.5-7.5zm0 11.5c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm49-11.5c-4.1 0-7.5 3.4-7.5 7.5s3.4 7.5 7.5 7.5 7.5-3.4 7.5-7.5-3.4-7.5-7.5-7.5zm0 11.5c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" />
              </svg>
              <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-gray-400 pl-2 border-l border-white/20">Uzbekistan</span>
            </div>
            
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              {currentLang === 'uz'
                ? 'BYD Auto Uzbekistan — Oʻzbekistondagi rasmiy distribyutor va xizmat koʻrsatuvchi dilerlik tarmogʻi. Ekologik toza kelajak sari birgalikda.'
                : currentLang === 'ru'
                ? 'BYD Auto Uzbekistan — официальный дистрибьютор и дилерская сеть в Узбекистане. Вместе к экологичному будущему.'
                : 'BYD Auto Uzbekistan — the official distributor and corporate showroom network in Uzbekistan. Riding towards a carbon-neutral future.'}
            </p>
          </div>

          {/* Column 2: Showroom QuickLinks */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-wider font-mono font-bold text-white">
              {DICTIONARY.models[currentLang]}
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400 font-light">
              <li>
                <button onClick={() => handleLinkClick('models')} className="hover:text-brand-blue transition duration-300 cursor-pointer">
                  BYD SONG PLUS DM-i
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('models')} className="hover:text-brand-blue transition duration-300 cursor-pointer">
                  BYD HAN EV
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('models')} className="hover:text-brand-blue transition duration-300 cursor-pointer">
                  BYD CHAZOR DM-i
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('models')} className="hover:text-brand-blue transition duration-300 cursor-pointer">
                  BYD TANG EV
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('models')} className="hover:text-brand-blue transition duration-300 cursor-pointer">
                  BYD SEAGULL
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Sitemaps */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-wider font-mono font-bold text-white">
              {currentLang === 'uz' ? 'Xizmatlar' : currentLang === 'ru' ? 'Услуги' : 'Services'}
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400 font-light">
              <li>
                <button onClick={() => handleLinkClick('configurator')} className="hover:text-brand-blue transition duration-300 cursor-pointer">
                  {DICTIONARY.configurator[currentLang]}
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('finance')} className="hover:text-brand-blue transition duration-300 cursor-pointer">
                  {DICTIONARY.finance[currentLang]}
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('dealers')} className="hover:text-brand-blue transition duration-300 cursor-pointer">
                  {DICTIONARY.dealers[currentLang]}
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('technology')} className="hover:text-brand-blue transition duration-300 cursor-pointer">
                  {DICTIONARY.technology[currentLang]}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact details */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-wider font-mono font-bold text-white">
              {currentLang === 'uz' ? 'Kontaktlar' : currentLang === 'ru' ? 'Контакты' : 'Contact Center'}
            </h4>
            <ul className="space-y-3.5 text-xs text-gray-400 font-mono">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2.5 text-brand-blue shrink-0" />
                <span className="font-sans font-light">
                  {currentLang === 'uz' ? 'Toshkent sh., Sergeli tumani, THAY, 109-uy' : currentLang === 'ru' ? 'г. Ташкент, Сергелийский р-н, ТКАД, д. 109' : '109 TKAD, Sergeli, Tashkent'}
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2.5 text-brand-blue shrink-0" />
                <a href="tel:+998781228888" className="hover:text-white transition">+998 78 122 88 88</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2.5 text-brand-blue shrink-0" />
                <a href="mailto:info@bydauto.uz" className="hover:text-white transition font-sans font-light">info@bydauto.uz</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Block */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-gray-500 font-mono">
          <div>
            <span>© {currentYear} BYD Auto Uzbekistan. All Rights Reserved.</span>
          </div>

          {/* Social icons */}
          <div className="flex space-x-4">
            <a href="https://t.me/bydautouz" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue hover:bg-brand-blue hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-brand-blue/20 transition duration-300">
              <Send className="w-4 h-4" />
            </a>
            <a href="https://instagram.com/bydauto.uz" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue hover:bg-brand-blue hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-brand-blue/20 transition duration-300">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue hover:bg-brand-blue hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-brand-blue/20 transition duration-300">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue hover:bg-brand-blue hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-brand-blue/20 transition duration-300">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
