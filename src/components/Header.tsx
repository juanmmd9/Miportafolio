'use client';

import { useState } from 'react';
import Image from 'next/image';
import { asset } from '@/lib/asset';

interface HeaderProps {
  onLanguageChange: (lang: string) => void;
}

export default function Header({ onLanguageChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('es');

  const translations = {
    es: {
      about: 'Sobre mí',
      experience: 'Experiencia',
      projects: 'Proyectos',
      education: 'Educación',
      skills: 'Habilidades',
      contact: 'Contacto',
      home: 'Inicio',
    },
    en: {
      about: 'About Me',
      experience: 'Experience',
      projects: 'Projects',
      education: 'Education',
      skills: 'Skills',
      contact: 'Contact',
      home: 'Home',
    },
  };

  const t = translations[currentLang as keyof typeof translations];

  const navItems = [
    { href: '#about', label: t.about },
    { href: '#experience', label: t.experience },
    { href: '#projects', label: t.projects },
    { href: '#education', label: t.education },
    { href: '#skills', label: t.skills },
    { href: '#contact', label: t.contact },
  ];

  const handleLanguageChange = (lang: string) => {
    setCurrentLang(lang);
    onLanguageChange(lang);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0b1f3a]/95 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-6 py-3">
          <a
            href="#hero"
            onClick={handleNavClick}
            className="flex items-center gap-3 group"
          >
            <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-blue-400/60">
              <Image
                src={asset('/Motor.jpg')}
                alt="Juan Manuel Moncayo"
                width={40}
                height={40}
                className="object-cover"
                priority
              />
            </div>
            <span className="hidden text-sm font-semibold text-white sm:block group-hover:text-blue-200 transition-colors">
              Juan M. Moncayo
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <button
                onClick={() => handleLanguageChange('es')}
                className={`rounded-md px-2.5 py-1 text-xs font-medium transition-all ${
                  currentLang === 'es'
                    ? 'bg-blue-500/80 text-white'
                    : 'bg-white/10 text-white/80 hover:bg-white/20'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => handleLanguageChange('en')}
                className={`rounded-md px-2.5 py-1 text-xs font-medium transition-all ${
                  currentLang === 'en'
                    ? 'bg-blue-500/80 text-white'
                    : 'bg-white/10 text-white/80 hover:bg-white/20'
                }`}
              >
                EN
              </button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-lg border border-white/20 p-2 text-white transition-colors hover:bg-white/10 md:hidden"
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className={`border-t border-white/10 bg-[#0b1f3a] transition-all duration-300 md:hidden ${
            isMenuOpen
              ? 'max-h-80 opacity-100'
              : 'max-h-0 overflow-hidden opacity-0'
          }`}
        >
          <nav className="container mx-auto flex flex-col gap-1 px-6 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}
