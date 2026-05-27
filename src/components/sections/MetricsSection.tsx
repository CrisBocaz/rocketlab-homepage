'use client';

import React from 'react';
import { motion } from 'framer-motion';

const metrics = [
  { value: '+120', label: 'Proyectos exitosos' },
  { value: '10+', label: 'Años de experiencia' },
  { value: '99.9%', label: 'Disponibilidad promedio' },
  { value: '50+', label: 'Especialistas en equipo' },
];

export const MetricsSection: React.FC = () => {
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
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {metrics.map((metric, index) => (
            <motion.div key={index} variants={itemVariants} className="flex flex-col gap-2">
              <h3 className="text-4xl md:text-5xl font-bold font-display text-gold">{metric.value}</h3>
              <p className="text-steel-gray text-sm leading-relaxed">{metric.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
