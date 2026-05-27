'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-lg border-b border-steel-gray/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-gold">RocketLab</div>

        {/* Links */}
        <div className="hidden md:flex gap-8 items-center">
          <a href="#servicios" className="text-soft-white hover:text-gold transition-colors">
            Servicios
          </a>
          <a href="#tecnologias" className="text-soft-white hover:text-gold transition-colors">
            Tecnologías
          </a>
          <a href="#casos" className="text-soft-white hover:text-gold transition-colors">
            Casos
          </a>
          <a href="#nosotros" className="text-soft-white hover:text-gold transition-colors">
            Nosotros
          </a>
          <a href="#insights" className="text-soft-white hover:text-gold transition-colors">
            Insights
          </a>
        </div>

        {/* CTA Button */}
        <Button variant="outline" size="sm">
          Contacto
        </Button>
      </div>
    </nav>
  );
};
