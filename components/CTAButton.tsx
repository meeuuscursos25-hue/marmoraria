import React from 'react';
import { ArrowRight, Lock } from 'lucide-react';

interface CTAButtonProps {
  fullWidth?: boolean;
  className?: string;
}

export const CTAButton: React.FC<CTAButtonProps> = ({ fullWidth = false, className = '' }) => {
  return (
    <div className={`flex flex-col items-center gap-3 md:gap-4 ${className} ${fullWidth ? 'w-full' : 'max-w-full'}`}>
      <a 
        href="https://typebot.co/acelerador-de-orcamento"
        target="_blank"
        rel="noopener noreferrer"
        className={`
          group relative overflow-hidden rounded-md px-8 py-4 md:px-12 md:py-5 
          bg-blue-600 hover:bg-blue-700
          text-white font-display font-bold tracking-widest uppercase 
          transition-all duration-300 transform hover:-translate-y-1 
          shadow-lg hover:shadow-xl
          border-b-4 border-blue-800 active:border-b-0 active:translate-y-1
          ${fullWidth ? 'w-full' : 'w-auto'}
          max-w-[90vw]
          inline-flex items-center justify-center
        `}
      >
        <span className="relative z-10 flex items-center justify-center gap-3 text-sm md:text-base whitespace-nowrap">
          Agendar Sessão Estratégica
          <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white transition-transform group-hover:translate-x-1" />
        </span>
        
        {/* Subtle Shine */}
        <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine transition-opacity duration-300" />
      </a>
      
      <div className="flex items-center gap-2 text-[10px] md:text-xs text-slate-400 font-medium tracking-wide uppercase">
        <Lock className="w-3 h-3 text-blue-500" />
        <span>Exclusivo para donos de marmoraria</span>
      </div>
    </div>
  );
};