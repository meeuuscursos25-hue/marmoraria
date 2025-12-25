import React from 'react';
import { Target, Layers, Crown, Handshake } from 'lucide-react';
import { CTAButton } from './CTAButton';

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="group relative p-8 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
    <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-900/50 group-hover:bg-blue-500 transition-colors">
      <Icon className="w-6 h-6 text-white" />
    </div>
    <h3 className="text-xl font-bold text-white mb-3 font-display">{title}</h3>
    <p className="text-blue-100/70 leading-relaxed text-sm">
      {description}
    </p>
  </div>
);

export const DiscoverySection: React.FC = () => {
  return (
    <section className="py-20 bg-brand-navy border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-display tracking-tight">
            O Que Você Vai Descobrir na <br/>
            <span className="text-blue-400">Sessão Estratégica</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          <FeatureCard 
            icon={Target}
            title="Geolocalização de Obras"
            description="Como direcionar seus anúncios para bairros nobres, condomínios fechados e áreas em expansão imobiliária na sua cidade."
          />
          <FeatureCard 
            icon={Layers}
            title="Mix de Produtos Lucrativos"
            description="Estratégias para vender materiais sintéticos (Quartzo, Lâminas) e exóticos, aumentando seu ticket médio por m²."
          />
          <FeatureCard 
            icon={Crown}
            title="Posicionamento High-Ticket"
            description="Como apresentar sua marmoraria para que o cliente perceba valor no seu acabamento e pare de comparar apenas preço."
          />
          <FeatureCard 
            icon={Handshake}
            title="Parceria com Arquitetos"
            description="Como usar o tráfego pago para atrair arquitetos e designers de interiores qualificados para serem parceiros recorrentes."
          />
        </div>

        <div className="flex justify-center">
          <CTAButton className="shadow-blue-900/50" />
        </div>
      </div>
    </section>
  );
};