'use client';

import { useState, useEffect } from 'react';
import Footer from '../../components/footer';
import { useLanguage } from '../../contexts/language-context';

export default function AboutPage() {
  const { t } = useLanguage();
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  // Generar partículas suaves
  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="min-h-screen text-white relative overflow-hidden -mt-16 pt-16" style={{ backgroundColor: '#36454F' }}>
      {/* Fondo animado sutil */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Partículas suaves flotantes */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-white rounded-full opacity-25 animate-float"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
        
        {/* Líneas de flujo sutiles */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent animate-flow" />
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-400/30 to-transparent animate-flow" style={{ animationDelay: '2s' }} />
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent animate-flow" style={{ animationDelay: '4s' }} />
        </div>
      </div>

      {/* Content Section */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white font-sans mx-auto">
              {t('about.title')}
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white font-sans mx-auto">
              {t('about.subtitle')}
            </h2>
          </div>

          {/* Introduction */}
          <div className="mb-12">
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-6">
              {t('about.intro')}
            </p>
          </div>

          {/* Platform Modes */}
          <div className="mb-12">
            <div className="space-y-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-sans">
                  {t('about.chat.title')}
                </h3>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-4">
                  {t('about.chat.desc')}
                </p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-sans">
                  {t('about.debate.title')}
                </h3>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-4">
                  {t('about.debate.desc')}
                </p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-sans">
                  {t('about.shopping.title')}
                </h3>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-4">
                  {t('about.shopping.desc')}
                </p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-sans">
                  {t('about.business.title')}
                </h3>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-6">
                  {t('about.business.desc')}
                </p>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="mb-12">
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans mb-6">
              {t('about.conclusion')}
            </p>
          </div>

          {/* Mission */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-sans">
              {t('about.mission.title')}
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-sans">
              {t('about.mission.desc')}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

