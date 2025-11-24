'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '../../components/ui/button';
import { ArrowRight, Globe, Target, Zap, TrendingUp, Sparkles } from 'lucide-react';
import Footer from '../../components/footer';
import { useLanguage } from '../../contexts/language-context';
import { motion } from 'framer-motion';
import CollaboratorForm from '../../components/forms/collaborator-form';

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

  const handleBecomePartner = () => {
    const formElement = document.getElementById('collaborator-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleContactPartnerships = () => {
    window.location.href = 'mailto:partnerships@zentrais.com?subject=Partnerships Inquiry';
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

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 pt-32 sm:pt-36 md:pt-40 pb-12 sm:pb-16 md:pb-24 overflow-hidden">
        {/* Animated Background Orbs - simplified for performance */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-2xl opacity-50"></div>
          <div className="absolute top-1/2 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-2xl opacity-50"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Left Section - Text Content */}
            <div className="text-left flex flex-col justify-center relative z-10">
              {/* Headline with animation */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 text-white leading-tight collaborator-heading tracking-tight relative"
              >
                <span className="relative inline-block">
                {t('collaborator.competition.title')}
                  {/* Shimmer effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></span>
                </span>
              </motion.h1>

              {/* Sub-headline with animation */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed collaborator-body relative group"
              >
                <span className="relative inline-block">
                {t('collaborator.competition.desc')}
                  {/* Subtle glow on hover */}
                  <span className="absolute inset-0 bg-gradient-to-r from-indigo-400/0 via-indigo-400/10 to-indigo-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></span>
                </span>
              </motion.p>

              {/* CTAs with enhanced animations */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 w-full sm:w-auto"
              >
                <Button
                  onClick={handleBecomePartner}
                  className="group relative tone-button text-white text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/50 flex items-center justify-center gap-2 overflow-hidden w-full sm:w-auto"
                >
                  {/* Animated background gradient */}
                  <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                  <span className="relative z-10 flex items-center gap-2">
                {t('collaborator.competition.cta')}
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
                <Button
                  onClick={handleContactPartnerships}
                  variant="outline"
                  className="group relative bg-transparent border-2 border-indigo-400/50 text-white text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:border-indigo-400 hover:bg-indigo-400/20 hover:shadow-2xl hover:shadow-indigo-500/30 overflow-hidden w-full sm:w-auto whitespace-nowrap"
                >
                  {/* Animated border glow */}
                  <span className="absolute inset-0 border-2 border-indigo-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative z-10 text-center">{t('collaborator.competition.cta.secondary')}</span>
              </Button>
              </motion.div>
            </div>

            {/* Right Section - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex items-center justify-center lg:justify-end self-stretch relative z-10 mt-8 lg:mt-0"
            >
              <div className="relative w-full max-w-2xl">
                <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] sm:aspect-auto">
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Partner with Zentrais Section */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 text-white leading-tight collaborator-heading tracking-tight">
              {t('collaborator.why.partner.title')}
              </h2>
            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent"></div>
          </motion.div>

          {/* Mini Infographic Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Reach */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="tone-card bg-gradient-to-br from-indigo-500/10 via-indigo-500/5 to-slate-800/40 rounded-2xl border-2 border-indigo-400/30 p-6 sm:p-8 hover:border-indigo-400/60 hover:shadow-xl hover:shadow-indigo-500/20 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-500/20 border-2 border-indigo-400/40 flex items-center justify-center mb-4 group-hover:bg-indigo-500/30 group-hover:border-indigo-400/60 transition-all">
                <Globe className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl sm:text-2xl text-white mb-3 collaborator-heading group-hover:text-indigo-300 transition-colors">
                {t('collaborator.why.reach.title')}
              </h3>
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed collaborator-body group-hover:text-white transition-colors">
                {t('collaborator.why.reach.desc')}
              </p>
            </motion.div>

            {/* Relevance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="tone-card bg-gradient-to-br from-purple-500/10 via-purple-500/5 to-slate-800/40 rounded-2xl border-2 border-purple-400/30 p-6 sm:p-8 hover:border-purple-400/60 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 border-2 border-purple-400/40 flex items-center justify-center mb-4 group-hover:bg-purple-500/30 group-hover:border-purple-400/60 transition-all">
                <Target className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl sm:text-2xl text-white mb-3 collaborator-heading group-hover:text-purple-300 transition-colors">
                {t('collaborator.why.relevance.title')}
              </h3>
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed collaborator-body group-hover:text-white transition-colors">
                {t('collaborator.why.relevance.desc')}
              </p>
            </motion.div>

            {/* Innovation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="tone-card bg-gradient-to-br from-pink-500/10 via-pink-500/5 to-slate-800/40 rounded-2xl border-2 border-pink-400/30 p-6 sm:p-8 hover:border-pink-400/60 hover:shadow-xl hover:shadow-pink-500/20 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-pink-500/20 border-2 border-pink-400/40 flex items-center justify-center mb-4 group-hover:bg-pink-500/30 group-hover:border-pink-400/60 transition-all">
                <Zap className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-xl sm:text-2xl text-white mb-3 collaborator-heading group-hover:text-pink-300 transition-colors">
                {t('collaborator.why.innovation.title')}
              </h3>
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed collaborator-body group-hover:text-white transition-colors">
                {t('collaborator.why.innovation.desc')}
              </p>
            </motion.div>

            {/* Brand Enhancement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="tone-card bg-gradient-to-br from-cyan-500/10 via-cyan-500/5 to-slate-800/40 rounded-2xl border-2 border-cyan-400/30 p-6 sm:p-8 hover:border-cyan-400/60 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border-2 border-cyan-400/40 flex items-center justify-center mb-4 group-hover:bg-cyan-500/30 group-hover:border-cyan-400/60 transition-all">
                <TrendingUp className="w-6 h-6 text-cyan-400" />
            </div>
              <h3 className="text-xl sm:text-2xl text-white mb-3 collaborator-heading group-hover:text-cyan-300 transition-colors">
                {t('collaborator.why.brand.title')}
              </h3>
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed collaborator-body group-hover:text-white transition-colors">
                {t('collaborator.why.brand.desc')}
              </p>
            </motion.div>

            {/* First-Mover Advantage */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="tone-card bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-slate-800/40 rounded-2xl border-2 border-emerald-400/30 p-6 sm:p-8 hover:border-emerald-400/60 hover:shadow-xl hover:shadow-emerald-500/20 transition-all duration-300 group md:col-span-2 lg:col-span-1"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border-2 border-emerald-400/40 flex items-center justify-center mb-4 group-hover:bg-emerald-500/30 group-hover:border-emerald-400/60 transition-all">
                <Sparkles className="w-6 h-6 text-emerald-400" />
            </div>
              <h3 className="text-xl sm:text-2xl text-white mb-3 collaborator-heading group-hover:text-emerald-300 transition-colors">
                {t('collaborator.why.firstmover.title')}
              </h3>
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed collaborator-body group-hover:text-white transition-colors">
                {t('collaborator.why.firstmover.desc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner Value Snapshot Section */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 text-white leading-tight collaborator-heading tracking-tight px-2">
              {t('collaborator.value.title')}
            </h2>
            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed collaborator-body px-2">
              {t('collaborator.value.intro')}
            </p>
          </motion.div>

          {/* Bullet Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="tone-card bg-gradient-to-br from-slate-800/40 via-slate-800/30 to-slate-800/40 rounded-2xl sm:rounded-3xl border-2 border-indigo-400/30 p-5 sm:p-6 md:p-8 lg:p-10 hover:border-indigo-400/50 hover:shadow-xl hover:shadow-indigo-500/20 transition-all duration-300"
          >
            <ul className="space-y-4 sm:space-y-5">
              {[
                'collaborator.value.item1',
                'collaborator.value.item2',
                'collaborator.value.item3',
                'collaborator.value.item4',
                'collaborator.value.item5',
                'collaborator.value.item6',
                'collaborator.value.item7',
              ].map((key, index) => (
                <motion.li
                  key={key}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3 sm:gap-4 group/item"
                >
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center mt-0.5 sm:mt-1 group-hover/item:bg-indigo-500/30 group-hover/item:border-indigo-400/60 transition-all">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-indigo-400"></div>
                  </div>
                  <span className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed collaborator-body group-hover/item:text-white transition-colors flex-1">
                    {t(key)}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* FOR PARTNERS Section */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 text-white leading-tight collaborator-heading font-bold">
              {t('collaborator.partners.title')}
            </h2>
            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-pink-500/60 to-transparent"></div>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            {/* Left Column - Who we partner with */}
            <div className="group relative bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-md rounded-3xl border-2 border-white/20 p-8 sm:p-10 shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(236,72,153,0.3)] transition-all duration-500 hover:border-pink-400/40 hover:scale-[1.02]">
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-1 h-12 bg-gradient-to-b from-pink-400 to-indigo-400 rounded-full"></div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold collaborator-heading">
                    {t('collaborator.partners.who.title')}
                  </h3>
                </div>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4 group/item">
                    <div className="mt-1.5 w-3 h-3 bg-gradient-to-br from-pink-400 to-indigo-400 rounded-sm rotate-45 flex-shrink-0 shadow-lg shadow-pink-500/30 group-hover/item:scale-110 transition-transform duration-300"></div>
                    <span className="text-gray-100 text-base sm:text-lg leading-relaxed pt-0.5">
                      <strong className="text-white font-semibold">{t('collaborator.partners.who.item1')}</strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-4 group/item">
                    <div className="mt-1.5 w-3 h-3 bg-gradient-to-br from-pink-400 to-indigo-400 rounded-sm rotate-45 flex-shrink-0 shadow-lg shadow-pink-500/30 group-hover/item:scale-110 transition-transform duration-300"></div>
                    <span className="text-gray-100 text-base sm:text-lg leading-relaxed pt-0.5">
                      <strong className="text-white font-semibold">{t('collaborator.partners.who.item2')}</strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-4 group/item">
                    <div className="mt-1.5 w-3 h-3 bg-gradient-to-br from-pink-400 to-indigo-400 rounded-sm rotate-45 flex-shrink-0 shadow-lg shadow-pink-500/30 group-hover/item:scale-110 transition-transform duration-300"></div>
                    <span className="text-gray-100 text-base sm:text-lg leading-relaxed pt-0.5">
                      <strong className="text-white font-semibold">{t('collaborator.partners.who.item3')}</strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-4 group/item">
                    <div className="mt-1.5 w-3 h-3 bg-gradient-to-br from-pink-400 to-indigo-400 rounded-sm rotate-45 flex-shrink-0 shadow-lg shadow-pink-500/30 group-hover/item:scale-110 transition-transform duration-300"></div>
                    <span className="text-gray-100 text-base sm:text-lg leading-relaxed pt-0.5">
                      <strong className="text-white font-semibold">{t('collaborator.partners.who.item4')}</strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-4 group/item">
                    <div className="mt-1.5 w-3 h-3 bg-gradient-to-br from-pink-400 to-indigo-400 rounded-sm rotate-45 flex-shrink-0 shadow-lg shadow-pink-500/30 group-hover/item:scale-110 transition-transform duration-300"></div>
                    <span className="text-gray-100 text-base sm:text-lg leading-relaxed pt-0.5">
                      <strong className="text-white font-semibold">{t('collaborator.partners.who.item5')}</strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-4 group/item">
                    <div className="mt-1.5 w-3 h-3 bg-gradient-to-br from-pink-400 to-indigo-400 rounded-sm rotate-45 flex-shrink-0 shadow-lg shadow-pink-500/30 group-hover/item:scale-110 transition-transform duration-300"></div>
                    <span className="text-gray-100 text-base sm:text-lg leading-relaxed pt-0.5">
                      <strong className="text-white font-semibold">{t('collaborator.partners.who.item6')}</strong>
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - What you get */}
            <div className="group relative bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-md rounded-3xl border-2 border-white/20 p-8 sm:p-10 shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(139,92,246,0.3)] transition-all duration-500 hover:border-indigo-400/40 hover:scale-[1.02]">
              {/* Decorative corner accent */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-indigo-500/20 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-1 h-12 bg-gradient-to-b from-indigo-400 to-pink-400 rounded-full"></div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold collaborator-heading">
                    {t('collaborator.partners.what.title')}
                  </h3>
                </div>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4 group/item">
                    <div className="mt-1.5 w-3 h-3 bg-gradient-to-br from-indigo-400 to-pink-400 rounded-sm rotate-45 flex-shrink-0 shadow-lg shadow-indigo-500/30 group-hover/item:scale-110 transition-transform duration-300"></div>
                    <span className="text-gray-100 text-base sm:text-lg leading-relaxed pt-0.5">
                      {t('collaborator.partners.what.item1')}
                    </span>
                  </li>
                  <li className="flex items-start gap-4 group/item">
                    <div className="mt-1.5 w-3 h-3 bg-gradient-to-br from-indigo-400 to-pink-400 rounded-sm rotate-45 flex-shrink-0 shadow-lg shadow-indigo-500/30 group-hover/item:scale-110 transition-transform duration-300"></div>
                    <span className="text-gray-100 text-base sm:text-lg leading-relaxed pt-0.5">
                      {t('collaborator.partners.what.item2')}
                    </span>
                  </li>
                  <li className="flex items-start gap-4 group/item">
                    <div className="mt-1.5 w-3 h-3 bg-gradient-to-br from-indigo-400 to-pink-400 rounded-sm rotate-45 flex-shrink-0 shadow-lg shadow-indigo-500/30 group-hover/item:scale-110 transition-transform duration-300"></div>
                    <span className="text-gray-100 text-base sm:text-lg leading-relaxed pt-0.5">
                      {t('collaborator.partners.what.item3')}
                    </span>
                  </li>
                  <li className="flex items-start gap-4 group/item">
                    <div className="mt-1.5 w-3 h-3 bg-gradient-to-br from-indigo-400 to-pink-400 rounded-sm rotate-45 flex-shrink-0 shadow-lg shadow-indigo-500/30 group-hover/item:scale-110 transition-transform duration-300"></div>
                    <span className="text-gray-100 text-base sm:text-lg leading-relaxed pt-0.5">
                      {t('collaborator.partners.what.item4')}
                    </span>
                  </li>
                  <li className="flex items-start gap-4 group/item">
                    <div className="mt-1.5 w-3 h-3 bg-gradient-to-br from-indigo-400 to-pink-400 rounded-sm rotate-45 flex-shrink-0 shadow-lg shadow-indigo-500/30 group-hover/item:scale-110 transition-transform duration-300"></div>
                    <span className="text-gray-100 text-base sm:text-lg leading-relaxed pt-0.5">
                      {t('collaborator.partners.what.item5')}
                    </span>
                  </li>
                  <li className="flex items-start gap-4 group/item">
                    <div className="mt-1.5 w-3 h-3 bg-gradient-to-br from-indigo-400 to-pink-400 rounded-sm rotate-45 flex-shrink-0 shadow-lg shadow-indigo-500/30 group-hover/item:scale-110 transition-transform duration-300"></div>
                    <span className="text-gray-100 text-base sm:text-lg leading-relaxed pt-0.5">
                      {t('collaborator.partners.what.item6')}
                    </span>
                  </li>
                </ul>
              </div>
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
        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-900/60 backdrop-blur-sm rounded-2xl border border-pink-400/30 p-8 sm:p-12 collaborator-tone">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 leading-tight font-sans tracking-tight tone-highlight">
              Collaborators / Brands Form
            </h2>
            <p className="text-base sm:text-lg text-gray-300 text-center mb-8 leading-relaxed font-sans">
              Qualify potential partners, tech integrations, brand sponsors, and contributors.
            </p>
            <CollaboratorForm />
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
