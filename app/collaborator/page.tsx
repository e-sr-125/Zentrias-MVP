'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '../../components/ui/button';
import { ArrowRight } from 'lucide-react';
import Footer from '../../components/footer';
import { useLanguage } from '../../contexts/language-context';

// These will be defined inside the component to use translations

export default function CollaboratorPage() {
  const { t } = useLanguage();
  const [collaborationFormData, setCollaborationFormData] = useState({
    brandName: '',
    contactPerson: '',
    emailPhone: '',
    collaborationTrack: '',
    optionalNotes: '',
  });
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

  const handleBecomeCollaborator = () => {
    window.location.href = 'mailto:collaborators@zentrais.com?subject=Become a Collaborator';
  };

  const handleStartCollaboration = () => {
    const formElement = document.getElementById('collaborator-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCollaborationFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = 'Start Your Collaboration Application';
    const body = `
Brand / Company Name: ${collaborationFormData.brandName}
Contact Person: ${collaborationFormData.contactPerson}
Email / Phone: ${collaborationFormData.emailPhone}
Preferred Collaboration Track: ${collaborationFormData.collaborationTrack}
Optional Notes: ${collaborationFormData.optionalNotes || 'Not provided'}
    `.trim();
    window.location.href = `mailto:collaborators@zentrais.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleCollaborationInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCollaborationFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen text-white relative overflow-hidden collaborator-body collaborator-tone -mt-16 pt-16" style={{ backgroundColor: '#36454F' }}>
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

      {/* Collaboration is the New Competition Section */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 pt-32 sm:pt-36 md:pt-40 pb-12 sm:pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Left Section - Text Content */}
            <div className="text-left flex flex-col justify-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-white leading-tight collaborator-heading">
                {t('collaborator.competition.title')}{' '}
                <span className="tone-highlight">{t('collaborator.competition.new')}</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                {t('collaborator.competition.desc')}
              </p>
              <Button
                onClick={handleStartCollaboration}
                className="tone-button text-white text-lg px-8 py-6 rounded-xl font-bold transition-all duration-500 hover:scale-105"
              >
                {t('collaborator.competition.cta')}
              </Button>
            </div>

            {/* Right Section - Image */}
            <div className="flex items-center justify-center lg:justify-end self-stretch">
              <div className="relative w-full max-w-2xl h-full">
                <div className="rounded-3xl overflow-hidden shadow-2xl h-full">
                  <Image
                    src="/meeting.png"
                    alt="Business meeting with dashboard"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Collaborate with Zentrais Section */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Section - Text Content */}
            <div className="text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 text-white leading-tight collaborator-heading">
                {t('collaborator.why.title2')}
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed">
                {t('collaborator.why.desc2')}
              </p>
            </div>

            {/* Right Section - Bullet Points Box */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border-2 border-dashed border-gray-400/50 p-6 sm:p-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0 tone-highlight" style={{ backgroundColor: 'var(--tone-primary)' }}></div>
                  <span className="text-gray-200 text-sm sm:text-base leading-relaxed ">
                    <strong className="text-white">{t('collaborator.why.bullet1.title')}</strong> {t('collaborator.why.bullet1.desc')}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0 tone-highlight" style={{ backgroundColor: 'var(--tone-primary)' }}></div>
                  <span className="text-gray-200 text-sm sm:text-base leading-relaxed ">
                    <strong className="text-white">{t('collaborator.why.bullet2.title')}</strong> {t('collaborator.why.bullet2.desc')}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0 tone-highlight" style={{ backgroundColor: 'var(--tone-primary)' }}></div>
                  <span className="text-gray-200 text-sm sm:text-base leading-relaxed ">
                    <strong className="text-white">{t('collaborator.why.bullet3.title')}</strong> {t('collaborator.why.bullet3.desc')}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0 tone-highlight" style={{ backgroundColor: 'var(--tone-primary)' }}></div>
                  <span className="text-gray-200 text-sm sm:text-base leading-relaxed ">
                    <strong className="text-white">{t('collaborator.why.bullet4.title')}</strong> {t('collaborator.why.bullet4.desc')}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Collaborate Section */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 text-white leading-tight collaborator-heading">
              {t('collaborator.ways.title')}
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              {t('collaborator.ways.desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {/* Research Alliances Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col h-full">
              <h3 className="text-2xl sm:text-3xl text-white mb-4 collaborator-heading text-center flex-shrink-0 h-[3.5rem] sm:h-[4rem] flex items-center justify-center leading-tight">{t('collaborator.ways.research.title')}</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 flex-grow min-h-0">
                {t('collaborator.ways.research.desc')}
              </p>
              <Button
                onClick={() => window.location.href = 'mailto:collaborators@zentrais.com?subject=Research Alliances Request'}
                className="tone-button w-full text-white text-base sm:text-lg px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex-shrink-0 mt-auto"
              >
                {t('collaborator.ways.research.cta')}
              </Button>
            </div>

            {/* Exchange Integration Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col h-full">
              <h3 className="text-2xl sm:text-3xl text-white mb-4 collaborator-heading text-center flex-shrink-0 h-[3.5rem] sm:h-[4rem] flex items-center justify-center leading-tight">{t('collaborator.ways.marketplace.title')}</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 flex-grow min-h-0">
                {t('collaborator.ways.marketplace.desc')}
              </p>
              <Button
                onClick={() => window.location.href = 'mailto:collaborators@zentrais.com?subject=Exchange Integration Request'}
                className="tone-button w-full text-white text-base sm:text-lg px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex-shrink-0 mt-auto"
              >
                {t('collaborator.ways.marketplace.cta')}
              </Button>
            </div>

            {/* Co-Brand Campaigns Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col h-full">
              <h3 className="text-2xl sm:text-3xl text-white mb-4 collaborator-heading text-center flex-shrink-0 h-[3.5rem] sm:h-[4rem] flex items-center justify-center leading-tight">{t('collaborator.ways.cobrand.title')}</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 flex-grow min-h-0">
                {t('collaborator.ways.cobrand.desc')}
              </p>
              <Button
                onClick={() => window.location.href = 'mailto:collaborators@zentrais.com?subject=Co-Brand Campaigns Request'}
                className="tone-button w-full text-white text-base sm:text-lg px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex-shrink-0 mt-auto"
              >
                {t('collaborator.ways.cobrand.cta')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Start Your Collaboration Form Section */}
      <section id="collaborator-form" className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 sm:p-8 md:p-12 shadow-xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-white text-center collaborator-heading">
              {t('collaborator.start.title')}
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 text-center leading-relaxed">
              {t('collaborator.start.desc')}
            </p>

            <form onSubmit={handleCollaborationFormSubmit} className="space-y-6">
              {/* Brand / Company Name */}
              <div>
                <label htmlFor="brandName" className="block text-white font-semibold mb-2 ">
                  {t('collaborator.start.brand')}
                </label>
                <input
                  type="text"
                  id="brandName"
                  name="brandName"
                  value={collaborationFormData.brandName}
                  onChange={handleCollaborationInputChange}
                  placeholder={t('collaborator.start.brand.placeholder')}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-gray-400/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/50 transition-all "
                />
              </div>

              {/* Contact Person */}
              <div>
                <label htmlFor="contactPerson" className="block text-white font-semibold mb-2 ">
                  {t('collaborator.start.contact')}
                </label>
                <input
                  type="text"
                  id="contactPerson"
                  name="contactPerson"
                  value={collaborationFormData.contactPerson}
                  onChange={handleCollaborationInputChange}
                  placeholder={t('collaborator.start.contact.placeholder')}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-gray-400/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/50 transition-all "
                />
              </div>

              {/* Email / Phone */}
              <div>
                <label htmlFor="emailPhone" className="block text-white font-semibold mb-2 ">
                  {t('collaborator.start.email')}
                </label>
                <input
                  type="text"
                  id="emailPhone"
                  name="emailPhone"
                  value={collaborationFormData.emailPhone}
                  onChange={handleCollaborationInputChange}
                  placeholder={t('collaborator.start.email.placeholder')}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-gray-400/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/50 transition-all "
                />
              </div>

              {/* Preferred Collaboration Track */}
              <div>
                <label htmlFor="collaborationTrack" className="block text-white font-semibold mb-2 ">
                  {t('collaborator.start.track')}
                </label>
                <select
                  id="collaborationTrack"
                  name="collaborationTrack"
                  value={collaborationFormData.collaborationTrack}
                  onChange={handleCollaborationInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-gray-400/30 rounded-xl text-white focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/50 transition-all "
                >
                  <option value="" className="bg-slate-900">{t('collaborator.start.track.select')}</option>
                  <option value="Research Alliances" className="bg-slate-900">{t('collaborator.start.track.research')}</option>
                  <option value="Exchange Integration" className="bg-slate-900">{t('collaborator.start.track.marketplace')}</option>
                  <option value="Co-Brand Campaigns" className="bg-slate-900">{t('collaborator.start.track.cobrand')}</option>
                </select>
              </div>

              {/* Optional Notes */}
              <div>
                <label htmlFor="optionalNotes" className="block text-white font-semibold mb-2 ">
                  {t('collaborator.start.notes')}
                </label>
                <textarea
                  id="optionalNotes"
                  name="optionalNotes"
                  value={collaborationFormData.optionalNotes}
                  onChange={handleCollaborationInputChange}
                  placeholder={t('collaborator.start.notes.placeholder')}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-gray-400/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/50 transition-all resize-none "
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="tone-button w-full text-white text-lg px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              >
                {t('collaborator.start.submit')}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Persistent CTA for mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-amber-400/20 p-4">
        <Button
          onClick={handleStartCollaboration}
          className="tone-button w-full text-white"
        >
          {t('collaborator.start.mobile')}
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>

      <Footer />
    </div>
  );
}
