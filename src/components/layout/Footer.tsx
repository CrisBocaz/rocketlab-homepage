import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-steel-gray/20 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold text-gold mb-4">RocketLab</div>
            <p className="text-steel-gray text-sm leading-relaxed">
              Tecnología que impulsa tu evolución.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-soft-white font-display font-bold mb-4 text-sm">Navegación</p>
            <ul className="space-y-2 text-sm text-steel-gray">
              <li>
                <a href="#servicios" className="hover:text-gold transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#tecnologias" className="hover:text-gold transition-colors">
                  Tecnologías
                </a>
              </li>
              <li>
                <a href="#casos" className="hover:text-gold transition-colors">
                  Casos
                </a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-gold transition-colors">
                  Nosotros
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-soft-white font-display font-bold mb-4 text-sm">Servicios</p>
            <ul className="space-y-2 text-sm text-steel-gray">
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Cloud & Infraestructura
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Ciberseguridad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Desarrollo de Software
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">
                  Datos & IA
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-soft-white font-display font-bold mb-4 text-sm">Contacto</p>
            <ul className="space-y-2 text-sm text-steel-gray">
              <li>
                <a href="mailto:hola@rocketlab.com" className="hover:text-gold transition-colors">
                  hola@rocketlab.com
                </a>
              </li>
              <li>
                <a href="tel:+34912345678" className="hover:text-gold transition-colors">
                  +34 91 234 5678
                </a>
              </li>
              <li className="pt-2">
                <p className="text-xs text-steel-gray/60">Madrid, España</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-steel-gray/20 py-8">
          {/* Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-steel-gray/60">© 2026 RocketLab. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="text-steel-gray hover:text-gold transition-colors text-sm">
                Política de Privacidad
              </a>
              <a href="#" className="text-steel-gray hover:text-gold transition-colors text-sm">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
