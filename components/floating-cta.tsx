'use client';

import { usePathname } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

export default function FloatingCTA() {
  const pathname = usePathname();

  const getCTAText = () => {
    if (pathname.startsWith('/investors')) {
      return 'Access the Investor Hub';
    } else if (pathname.startsWith('/user')) {
      return 'Join Waitlist';
    } else if (pathname.startsWith('/media')) {
      return 'Join the Zenzers Circle';
    } else if (pathname.startsWith('/collaborator')) {
      return 'Start Collaboration';
    }
    return null;
  };

  const handleClick = () => {
    // Hacer scroll suave hacia el formulario correspondiente
    const formId = pathname.startsWith('/investors') 
      ? 'investor-form'
      : pathname.startsWith('/user')
      ? 'waitlist-form'
      : pathname.startsWith('/media')
      ? 'media-form'
      : pathname.startsWith('/collaborator')
      ? 'collaborator-form'
      : null;

    if (formId) {
      const formElement = document.getElementById(formId);
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const ctaText = getCTAText();

  // No mostrar en homepage
  if (!ctaText || pathname === '/') {
    return null;
  }

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <button
        onClick={handleClick}
        className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-8 rounded-l-2xl rounded-r-none shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105 group flex items-center gap-3 font-bold text-sm sm:text-base backdrop-blur-sm border-l-2 border-t-2 border-b-2 border-pink-400/30"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
      >
        <span className="transform rotate-180 whitespace-nowrap">{ctaText}</span>
        <ArrowRight className="w-5 h-5 transform rotate-90 group-hover:translate-y-1 transition-transform" />
      </button>
    </div>
  );
}

