'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { motion } from 'framer-motion';

const capabilities = [
  {
    icon: '☁️',
    title: 'Cloud & Infraestructura',
    description: 'Arquitecturas modernas, escalables y resilientes.',
  },
  {
    icon: '🔒',
    title: 'Ciberseguridad',
    description: 'Protección avanzada para aplicaciones y activos críticos.',
  },
  {
    icon: '⚙️',
    title: 'Desarrollo de Software',
    description: 'Plataformas robustas y experiencias digitales modernas.',
  },
  {
    icon: '📊',
    title: 'Datos & IA',
    description: 'Inteligencia accionable y automatización estratégica.',
  },
  {
    icon: '🤖',
    title: 'Automatización',
    description: 'Procesos optimizados para operaciones modernas.',
  },
  {
    icon: '🛡️',
    title: 'Soporte 24/7',
    description: 'Monitoreo y acompañamiento continuo.',
  },
];

export const CapabilitiesSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="text-sm uppercase tracking-widest text-gold mb-4">Nuestras capacidades</p>
            <h2 className="text-soft-white mb-0">
              Arquitectura tecnológica para organizaciones que no pueden improvisar.
            </h2>
          </div>
          <div>
            <p className="text-lg text-steel-gray leading-relaxed">
              Combinamos estrategia, diseño y tecnología para crear soluciones digitales seguras,
              escalables y centradas en resultados medibles.
            </p>
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {capabilities.map((capability, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card hover className="h-full flex flex-col gap-4">
                <div className="text-4xl">{capability.icon}</div>
                <h3 className="text-xl font-display font-bold text-soft-white">{capability.title}</h3>
                <p className="text-steel-gray text-sm leading-relaxed flex-1">{capability.description}</p>
                <div className="pt-4 border-t border-steel-gray/20">
                  <a href="#" className="text-gold text-sm font-medium hover:text-gold/80 transition-colors">
                    Conocer más →
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
