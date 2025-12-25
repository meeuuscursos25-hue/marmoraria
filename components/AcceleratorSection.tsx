import React from 'react';
import { Filter, UserCheck, Megaphone, Users, Zap, FileSignature, ArrowDown, Gem } from 'lucide-react';
import { CTAButton } from './CTAButton';

const journeySteps = [
  {
    icon: Megaphone,
    title: "1. Captação de Obras",
    description: "Anúncios visuais focados em projetos (cozinhas, áreas gourmet) e materiais nobres.",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100"
  },
  {
    icon: Users,
    title: "2. Triagem Automática",
    description: "O sistema separa quem quer 'reformar a casa' de quem só está 'pesquisando preço'.",
    color: "text-slate-600",
    bg: "bg-white",
    border: "border-slate-200"
  },
  {
    icon: Gem,
    title: "3. Filtro de Materiais",
    description: "Identificamos interesse em Quartzo, Prime, Lâminas ou Granitos Exóticos.",
    color: "text-blue-700",
    bg: "bg-blue-50/50",
    border: "border-blue-200",
    highlight: true
  },
  {
    icon: UserCheck,
    title: "4. Lead Qualificado",
    description: "O cliente chega pronto para agendar a medição ou visitar o showroom.",
    color: "text-slate-700",
    bg: "bg-white",
    border: "border-slate-200"
  },
  {
    icon: FileSignature,
    title: "5. Fechamento de Contrato",
    description: "Venda de valor agregado, com margem de lucro saudável.",
    color: "text-white",
    bg: "bg-blue-900", // Dark distinctive background for the goal
    border: "border-blue-900",
    isLast: true
  }
];

export const AcceleratorSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
      
      <div className="max-w-5xl mx-auto px-5 md:px-6 relative z-10 flex flex-col items-center">
        
        {/* HEADER */}
        <div className="mb-12 text-center space-y-6 w-full">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-xs md:text-sm font-sans">
                Processo Comercial
            </span>
            
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight font-display">
                Um Funil de Vendas de Elite <br/>
                <span className="text-blue-700">desenhado para o setor de rochas.</span>
            </h2>

            <div className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto space-y-4">
                <p>
                    Uma metodologia desenvolvida para atrair clientes finais e arquitetos que valorizam o acabamento. O sistema identifica quem tem <strong className="text-blue-700">potencial de compra imediata</strong> e quem está apenas especulando.
                </p>
            </div>
        </div>

        <div className="w-full flex flex-col items-center gap-12">

            {/* Quote Box */}
            <div className="w-full max-w-3xl bg-white p-6 md:p-8 rounded-lg shadow-sm border border-slate-200 text-center relative">
                 <div className="text-slate-500 italic text-lg font-serif">
                    "Chega de perder horas fazendo orçamentos para clientes que somem no WhatsApp ou acham tudo caro."
                </div>
            </div>

            {/* Steps Visual */}
            <div className="w-full max-w-2xl relative">
                {/* Line connector */}
                <div className="absolute left-[28px] top-6 bottom-12 w-0.5 bg-slate-200"></div>

                <div className="space-y-6">
                {journeySteps.map((step, index) => (
                    <div key={index} className="relative flex items-start gap-6 group">
                        
                        {/* Icon Bubble */}
                        <div className={`
                            relative z-10 w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0
                            ${step.bg} border ${step.border} shadow-sm
                            transition-transform duration-300 group-hover:scale-105
                        `}>
                            <step.icon className={`w-6 h-6 ${step.color} ${step.isLast ? 'text-white' : ''}`} />
                        </div>

                        {/* Text Card */}
                        <div className={`
                            flex-1 p-6 rounded-lg border shadow-sm transition-all duration-300
                            ${step.isLast ? 'bg-blue-900 border-blue-900 text-white' : 'bg-white border-slate-100 hover:border-blue-200 hover:shadow-md'}
                        `}>
                            <h4 className={`text-lg font-bold mb-2 font-display ${step.isLast ? 'text-white' : 'text-slate-800'}`}>
                                {step.title}
                            </h4>
                            <p className={`text-sm leading-relaxed ${step.isLast ? 'text-blue-100' : 'text-slate-500'}`}>
                                {step.description}
                            </p>
                        </div>
                    </div>
                ))}
                </div>
            </div>

        </div>

        <div className="mt-16 w-full flex justify-center">
            <CTAButton />
        </div>

      </div>
    </section>
  );
};