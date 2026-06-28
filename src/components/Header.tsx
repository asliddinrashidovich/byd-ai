import React, { useState } from 'react';
import { Menu, X, Globe, Phone, Car } from 'lucide-react';
import { Language } from '../types';
import { DICTIONARY } from '../data';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  currentLang: Language;
  setLang: (lang: Language) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
  onOpenTestDrive: () => void;
}

export default function Header({
  currentLang,
  setLang,
  activeSection,
  setActiveSection,
  onOpenTestDrive,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const navItems = [
    { id: 'models', label: DICTIONARY.models[currentLang] },
    { id: 'configurator', label: DICTIONARY.configurator[currentLang] },
    { id: 'finance', label: DICTIONARY.finance[currentLang] },
    { id: 'dealers', label: DICTIONARY.dealers[currentLang] },
    { id: 'technology', label: DICTIONARY.technology[currentLang] },
  ];

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    
    // Smooth scroll to element if present
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const languages: { code: Language; name: string }[] = [
    { code: 'uz', name: 'Oʻzbekcha' },
    { code: 'ru', name: 'Русский' },
    { code: 'en', name: 'English' },
  ];

  return (
    <header className="sticky top-0 z-50 deep-glass-bg border-b border-white/15 text-white shadow-lg shadow-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div 
          onClick={() => handleNavClick('hero')} 
          className="flex items-center cursor-pointer space-x-2"
          id="header-logo-container"
        >
          {/* BYD Wordmark SVG styled to resemble official logo */}
          <svg className="h-8 w-auto text-white fill-current transition-all hover:opacity-90" viewBox="0 0 160 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.4 8c1.8 0 3.2.3 4.2.9 1 .6 1.7 1.4 2.1 2.5.4 1 .6 2.3.6 3.8 0 1.5-.2 2.8-.7 3.8-.5 1.1-1.2 1.9-2.2 2.5-1 .6-2.4.9-4.1.9H2V8h10.4zm-2.8 3.5v9h2.3c1.5 0 2.5-.4 3.1-1.1s.8-1.9.8-3.4c0-1.5-.3-2.5-.9-3.2-.6-.7-1.6-1.1-3.1-1.1H9.6zm23.6-3.5l6.3 10.3L45.8 8h5.3l-9.1 14.1c-.5.8-1 1.4-1.6 1.8-.6.4-1.4.6-2.4.6H36l6-9.3L36 8h4.2l-1 2.3v1.3zm25.8 0c2.5 0 4.5.7 5.9 2.2 1.4 1.4 2.1 3.5 2.1 6.2 0 2.7-.7 4.8-2.1 6.2-1.4 1.4-3.4 2.1-5.9 2.1H48V8h11zm-2.6 3.5h-2.8v10.1h2.8c1.5 0 2.6-.4 3.2-1.2.6-.8 1-2.1 1-3.8 0-1.8-.3-3.1-1-3.9s-1.7-1.2-3.2-1.2z" />
            <path d="M74 15h4v2h-4zm51 0h4v2h-4zM86 11.5c-4.1 0-7.5 3.4-7.5 7.5s3.4 7.5 7.5 7.5 7.5-3.4 7.5-7.5-3.4-7.5-7.5-7.5zm0 11.5c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm49-11.5c-4.1 0-7.5 3.4-7.5 7.5s3.4 7.5 7.5 7.5 7.5-3.4 7.5-7.5-3.4-7.5-7.5-7.5zm0 11.5c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" />
          </svg>
          <span className="text-xs uppercase tracking-[0.3em] text-gray-400 font-mono pl-3 border-l border-white/20 hidden sm:inline">Uzbekistan</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 font-sans text-xs uppercase tracking-wider font-semibold">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              id={`nav-link-${item.id}`}
              className={`hover:text-brand-blue hover:translate-y-[-1px] transition-all duration-200 cursor-pointer ${
                activeSection === item.id ? 'text-brand-blue border-b-2 border-brand-blue pb-1' : 'text-gray-300'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right side controls */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Phone contact */}
          <a href="tel:+998781228888" className="flex items-center text-gray-300 hover:text-brand-blue text-xs font-medium transition duration-200 uppercase tracking-wider font-mono" id="header-phone-link">
            <Phone className="w-4 h-4 mr-2 text-white/55" />
            <span>+998 78 122 88 88</span>
          </a>

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center text-gray-300 hover:text-white text-xs font-semibold tracking-wider py-2 cursor-pointer uppercase"
              id="header-lang-btn"
            >
              <Globe className="w-4 h-4 mr-1 text-white/55" />
              <span>{currentLang}</span>
            </button>

            <AnimatePresence>
              {langDropdownOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setLangDropdownOpen(false)} />
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-36 glass-card rounded-xl shadow-2xl overflow-hidden z-20"
                    id="header-lang-dropdown"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLang(lang.code);
                          setLangDropdownOpen(false);
                        }}
                        className={`w-full px-4 py-3 text-left text-xs transition hover:bg-white/10 ${
                          currentLang === lang.code ? 'text-brand-blue font-semibold bg-white/5' : 'text-gray-300'
                        }`}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          {/* Direct CTA */}
          <button
            onClick={onOpenTestDrive}
            className="flex items-center border border-white/30 text-white bg-white/5 hover:bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full text-xs font-semibold hover:border-brand-blue transition duration-300 transform active:scale-95 shadow-md hover:shadow-brand-blue/10 cursor-pointer uppercase tracking-wider"
            id="header-cta-testdrive"
          >
            <Car className="w-3.5 h-3.5 mr-2 text-brand-blue" />
            {DICTIONARY.bookTestDrive[currentLang]}
          </button>
        </div>

        {/* Mobile controls (hamburger + lang) */}
        <div className="flex lg:hidden items-center space-x-4">
          <button
            onClick={() => {
              const nextIdx = languages.findIndex(l => l.code === currentLang) + 1;
              setLang(languages[nextIdx % languages.length].code);
            }}
            className="p-2 text-gray-400 hover:text-white flex items-center space-x-1"
            title="Switch Language"
          >
            <Globe className="w-4 h-4" />
            <span className="text-xs uppercase font-mono font-bold">{currentLang}</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-400 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-neutral-950 border-t border-white/10 overflow-hidden"
            id="mobile-drawer-container"
          >
            <div className="px-4 pt-4 pb-8 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-3 py-3 rounded-lg text-base font-medium hover:bg-white/5 transition ${
                    activeSection === item.id ? 'text-white bg-white/5' : 'text-gray-400'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-4 border-t border-white/10 space-y-4">
                <a href="tel:+998781228888" className="flex items-center px-3 py-2 text-gray-300">
                  <Phone className="w-5 h-5 mr-3 text-white/70" />
                  <span>+998 78 122 88 88</span>
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenTestDrive();
                  }}
                  className="w-full flex items-center justify-center bg-white text-black py-3 rounded-full text-sm font-semibold hover:bg-neutral-200 transition"
                >
                  <Car className="w-4 h-4 mr-2" />
                  {DICTIONARY.bookTestDrive[currentLang]}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
