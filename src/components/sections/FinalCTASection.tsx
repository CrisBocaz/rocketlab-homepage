'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

export const FinalCTASection: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          className="flex flex-col gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Eyebrow */}
          <p className="text-sm uppercase tracking-widest text-gold">
            ¿Listo para impulsar tu negocio?
          </p>

          {/* Headline */}
          <h2 className="text-soft-white">
            Construyamos algo extraordinario juntos.
          </h2>

          {/* Subheadline */}
          <p className="text-lg text-steel-gray max-w-2xl mx-auto leading-relaxed">
            Tecnología diseñada para organizaciones que buscan resultados sostenibles y crecimiento
            transformacional.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <Button variant="primary" size="lg">
              Agenda una conversación
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
