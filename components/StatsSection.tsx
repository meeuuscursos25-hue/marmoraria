import React from 'react';
import { CTAButton } from './CTAButton';

const StatItem = ({ value, label, subtext }: { value: string, label?: string, subtext: string }) => (
  <div className="flex flex-col items-center text-center p-6 border-b md:border-b-0 md:border-r border-slate-200 last:border-0 hover:bg-slate-50 transition-colors duration-300 rounded-lg">
    <h3 className="text-4xl lg:text-5xl font-bold text-blue-900 font-display mb-3 whitespace-nowrap">
      {value}
    </h3>
    <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">{label}</p>
    <p className="text-sm text-slate-500 max-w-[200px] leading-relaxed font-serif italic">{subtext}</p>
  </div>
);

export const StatsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-display">Resultados Sólidos</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <StatItem 
            value="+ R$ 15 mi" 
            subtext="Gerados em vendas de projetos de alto padrão para nossos clientes." 
          />
           <StatItem 
            value="+ 2.500" 
            subtext="Projetos residenciais e comerciais captados através da metodologia." 
          />
           <StatItem 
            value="+ 180" 
            subtext="Marmorarias atendidas em todo o Brasil com exclusividade de região." 
          />
           <StatItem 
            value="3x" 
            subtext="Aumento médio no faturamento de obras nos primeiros 90 dias." 
          />
        </div>

        <div className="flex justify-center w-full">
           <CTAButton fullWidth={false} className="scale-100 md:scale-110" />
        </div>
      </div>
    </section>
  );
};