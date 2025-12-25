import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { CTAButton } from './CTAButton';

export const Hero: React.FC = () => {
  const bullets = [
    "Marketing estratégico em todas as redes sociais.",
    "Instalação do Acelerador de orçamentos para qualificação automática de clientes.",
    "Criação de Anúncios Estratégicos.",
    "Treinamento focado em converter orçamentos em obras realizadas."
  ];

  return (
    <section className="relative pt-12 pb-16 md:pt-24 md:pb-24 px-4 md:px-6 w-full flex flex-col items-center text-center overflow-hidden bg-brand-navy">
      
      {/* Abstract Background Shapes (Subtle) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-slate-900 opacity-100"></div>
        <div className="absolute -top-[10%] -right-[10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[10%] -left-[10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]"></div>
      </div>

      {/* Content */}
      <div className="space-y-8 relative z-10 flex flex-col items-center max-w-5xl mx-auto">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/30 bg-blue-900/30 text-blue-200 text-[10px] md:text-xs font-semibold tracking-[0.1em] uppercase mb-4 shadow-sm backdrop-blur-sm">
          <span className="flex h-2 w-2 relative">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
             <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          METODOLOGIA EXCLUSIVA PARA MARMORARIAS
        </div>

        {/* Headlines */}
        <div className="flex flex-col items-center relative px-2 max-w-4xl mx-auto">
            {/* Top - Small */}
            <span className="block text-base md:text-xl font-medium text-blue-200/90 mb-6 tracking-wide font-display leading-snug">
              Em apenas 30 minutos, você vai descobrir como:
            </span>

            {/* Center - Big (Reduced size) */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-[1.2] font-display text-white tracking-tight drop-shadow-lg">
              Plugar um <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-200">Acelerador de orçamentos</span> na sua Marmoraria e encher sua semana apenas com <span className="relative inline-block whitespace-nowrap z-10 text-white">
                clientes Qualificados
                 {/* Underline decoration */}
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-600 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.6" />
                </svg>
              </span> no seu WhatsApp.
            </h1>

            {/* Bottom - Small Parentheses */}
            <span className="block text-sm md:text-lg text-slate-400 font-light mt-8 tracking-wide italic leading-snug">
              (Tudo isso sem precisar perder tempo com curiosos que só querem tomar o seu tempo e nunca fecham negócio)
            </span>
        </div>

        {/* Bullets - Glass Effect Dark */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left w-full max-w-4xl pt-6">
          {bullets.map((item, index) => (
            <div key={index} className="flex items-start gap-4 p-5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300">
              <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
              <span className="text-slate-200 font-medium text-sm md:text-base leading-snug">{item}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="pt-8 flex flex-col items-center w-full">
          <CTAButton className="scale-100 md:scale-110 shadow-xl shadow-blue-900/50" />
          <p className="text-xs md:text-sm text-slate-500 mt-6 max-w-xs md:max-w-md">
            Clique acima para verificar a disponibilidade na sua região.
          </p>
        </div>
      </div>

    </section>
  );
};