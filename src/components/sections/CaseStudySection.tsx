'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

export const CaseStudySection: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-black to-navy/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <p className="text-sm uppercase tracking-widest text-gold mb-4">Caso destacado</p>
              <h2 className="text-soft-white mb-6">Plataforma financiera escalable en la nube.</h2>
              <p className="text-lg text-steel-gray leading-relaxed mb-8">
                Modernizamos infraestructura crítica y construimos una plataforma segura para
                millones de transacciones diarias. Resultado: 99.9% uptime, reducción de costos
                operativos del 40% y capacidad para procesar 10x el volumen anterior.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-gold font-medium mb-2">Stack Tecnológico</p>
                <p className="text-steel-gray text-sm">
                  AWS (ECS, RDS, CloudFront) • Node.js • PostgreSQL • Kubernetes • Docker
                </p>
              </div>
              <div>
                <p className="text-sm text-gold font-medium mb-2">Impacto</p>
                <p className="text-steel-gray text-sm">
                  +15M transacciones/mes • 40% reducción de costos • 99.9% uptime
                </p>
              </div>
            </div>

            <Button variant="secondary" size="lg" className="w-fit">
              Ver caso completo
            </Button>
          </motion.div>

          {/* Right - Visual (asymmetric) */}
          <motion.div
            className="relative h-96 md:h-full md:min-h-[500px] rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Placeholder Architecture Image */}
            <div className="w-full h-full bg-gradient-to-br from-gold/20 via-navy/40 to-black rounded-lg flex items-center justify-center border border-steel-gray/30 relative overflow-hidden">
              {/* Abstract architecture elements */}
              <svg
                className="absolute inset-0 w-full h-full opacity-30"
                viewBox="0 0 400 400"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#c9a86a" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#1e3a5f" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                {/* Grid lines */}
                {Array.from({ length: 5 }).map((_, i) => (
                  <React.Fragment key={`grid-${i}`}>
                    <line x1={i * 100} y1="0" x2={i * 100} y2="400" stroke="url(#grad1)" strokeWidth="1" />
                    <line x1="0" y1={i * 100} x2="400" y2={i * 100} stroke="url(#grad1)" strokeWidth="1" />
                  </React.Fragment>
                ))}
                {/* Nodes */}
                {Array.from({ length: 4 }).map((_, i) => (
                  <circle
                    key={`node-${i}`}
                    cx={50 + i * 100}
                    cy={50 + (i % 2) * 150}
                    r="8"
                    fill="#c9a86a"
                    opacity="0.6"
                  />
                ))}
              </svg>

              <div className="relative z-10 text-center">
                <p className="text-gold text-sm font-medium">Arquitectura Financiera</p>
                <p className="text-steel-gray text-xs mt-2">Cloud-Native Infrastructure</p>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gold/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
