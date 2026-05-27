'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { motion } from 'framer-motion';

const steps = [
  { number: '01', title: 'Discover', description: 'Entendemos contexto y desafíos.' },
  { number: '02', title: 'Architect', description: 'Diseñamos soluciones sólidas.' },
  { number: '03', title: 'Build', description: 'Construimos con precisión.' },
  { number: '04', title: 'Scale', description: 'Optimizamos continuamente.' },
];

export const ProcessSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-black via-navy/5 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-widest text-gold mb-4">Nuestro proceso</p>
          <h2 className="text-soft-white max-w-2xl mx-auto">
            Madurez operacional que convierte en realidad ideas extraordinarias.
          </h2>
        </motion.div>

        {/* Timeline Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={itemVariants} className="relative">
              <Card className="h-full flex flex-col gap-4 relative z-10">
                {/* Number */}
                <div className="text-5xl font-bold font-display text-gold/20">{step.number}</div>

                {/* Title */}
                <h3 className="text-xl font-display font-bold text-soft-white">{step.title}</h3>

                {/* Description */}
                <p className="text-steel-gray text-sm leading-relaxed flex-1">{step.description}</p>

                {/* Connection line (desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-px bg-gradient-to-r from-gold/50 to-transparent" />
                )}
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
