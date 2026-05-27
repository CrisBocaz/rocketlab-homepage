'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

export const HeroSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-navy/30 via-black to-black opacity-50" />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto px-6 py-20">
        {/* Left Content (40%) */}
        <motion.div
          className="flex flex-col justify-center gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Eyebrow */}
          <motion.p
            variants={itemVariants}
            className="text-sm font-display uppercase tracking-widest text-gold"
          >
            Tecnología que impulsa tu evolución
          </motion.p>

          {/* Headline */}
          <motion.h1 variants={itemVariants} className="text-soft-white">
            Creamos soluciones tecnológicas que impulsan negocios{' '}
            <span className="text-gold">hacia el futuro.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-steel-gray leading-relaxed max-w-md"
          >
            Diseñamos, desarrollamos y protegemos plataformas digitales escalables que generan
            impacto real.
          </motion.p>

          {/* CTA Group */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button variant="primary" size="lg">
              Hablemos de tu proyecto
            </Button>
            <Button variant="secondary" size="lg">
              Ver servicios
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Visual (60%) - Spiral Video */}
        <motion.div
          className="relative w-full h-96 md:h-full md:min-h-screen flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-radial from-gold/10 via-transparent to-transparent rounded-full blur-3xl" />

          {/* Video Spiral Placeholder */}
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover rounded-lg"
            playsInline
          >
            <source src="/videos/spiral.mp4" type="video/mp4" />
            {/* Fallback para navegadores que no soporten video */}
            <div className="w-full h-full bg-gradient-to-br from-gold/20 to-transparent rounded-lg flex items-center justify-center">
              <p className="text-steel-gray">Video spiral (cargando...)</p>
            </div>
          </video>

          {/* Orbiting Elements */}
          <OrbitalElements />
        </motion.div>
      </div>

      {/* Left Navigation Sidebar */}
      <LeftSidebar />
    </section>
  );
};

const OrbitalElements: React.FC = () => {
  const items = ['01 Descubrimos', '02 Diseñamos', '03 Construimos', '04 Escalamos'];

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {items.map((item, index) => {
        const angle = (index / items.length) * Math.PI * 2;
        const x = Math.cos(angle) * 120;
        const y = Math.sin(angle) * 120;

        return (
          <motion.div
            key={index}
            className="absolute"
            animate={{
              rotate: 360,
              x: x,
              y: y,
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
              x: { duration: 0 },
              y: { duration: 0 },
            }}
          >
            <div className="bg-gold/30 border border-gold rounded-full px-3 py-1 text-xs font-display text-gold whitespace-nowrap">
              {item}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

const LeftSidebar: React.FC = () => {
  const items = ['Descubrir', 'Diseñar', 'Construir', 'Optimizar'];

  return (
    <div className="hidden lg:flex fixed left-0 top-1/2 -translate-y-1/2 z-20 flex-col gap-8 pl-8">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="flex items-center gap-3 cursor-pointer group"
          whileHover={{ x: 4 }}
        >
          <div className="w-px h-6 bg-gradient-to-b from-gold to-transparent group-hover:h-8 transition-all" />
          <span className="text-sm text-steel-gray group-hover:text-gold transition-colors">{item}</span>
        </motion.div>
      ))}
    </div>
  );
};
