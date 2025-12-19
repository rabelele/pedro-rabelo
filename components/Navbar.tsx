import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-prk-black/90 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Placeholder - assuming image exists or text fallback */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
           {/* In a real scenario, this would be an <img src="logo.png" /> */}
           <div className="text-3xl font-extrabold tracking-tighter text-white">
             prk<span className="text-prk-teal">.</span>
           </div>
           <span className="text-xs font-light text-prk-light opacity-70 mt-1 hidden sm:block">experts connect</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-prk-teal transition-colors">O que fazemos</button>
          <button onClick={() => scrollToSection('cases')} className="text-sm font-medium hover:text-prk-teal transition-colors">Cases</button>
          <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-prk-teal transition-colors">Quem somos</button>
          <Button onClick={() => scrollToSection('contact')} variant="primary" className="py-2 px-4 text-sm">
            Diagnóstico Gratuito
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-prk-black border-t border-gray-800 p-6 flex flex-col gap-4 md:hidden shadow-2xl">
          <button onClick={() => scrollToSection('services')} className="text-left text-lg font-medium py-2 border-b border-gray-800">O que fazemos</button>
          <button onClick={() => scrollToSection('cases')} className="text-left text-lg font-medium py-2 border-b border-gray-800">Cases</button>
          <button onClick={() => scrollToSection('about')} className="text-left text-lg font-medium py-2 border-b border-gray-800">Quem somos</button>
          <Button onClick={() => scrollToSection('contact')} className="w-full mt-4">
            Diagnóstico Gratuito
          </Button>
        </div>
      )}
    </nav>
  );
};
