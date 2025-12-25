import React from 'react';
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';
import { CTAButton } from './CTAButton';

export const ComparisonSection: React.FC = () => {
  const benefits = [
    "Atender clientes que buscam acabamento refinado e pagam pelo valor.",
    "Orçamentos blindados com alta taxa de conversão em vendas.",
    "Fluxo constante de projetos residenciais de alto padrão.",
    "Previsibilidade de caixa e agenda de medições cheia."
  ];

  const pains = [
    "Clientes achando seu orçamento caro e pedindo desconto a todo momento.",
    "Perder vendas por R$ 100,00 para o concorrente da esquina.",
    "Ficar refém de arquitetos que exigem comissões abusivas.",
    "Secretaria sobrecarregada orçando pias simples sem fechar nada."
  ];

  return (
    <section className="py-24 bg-slate-50/50 border-b border-slate-100 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-rose-500/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 font-display mb-4">
            Dois caminhos. <br/>
            <span className="text-slate-400 font-serif italic text-2xl md:text-3xl font-normal">Qual realidade você escolhe?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Negative Side (Red/Rose) */}
          <div className="group relative p-8 md:p-10 rounded-3xl bg-white border border-rose-100 shadow-xl shadow-rose-900/5 hover:shadow-rose-900/10 transition-all duration-500">
             {/* Badge */}
             <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1.5 bg-rose-100 text-rose-700 text-xs font-bold uppercase tracking-widest rounded-full border border-rose-200 shadow-sm">
                O Jeito Antigo
             </div>

            <div className="text-center mb-8 mt-2">
                <div className="w-16 h-16 mx-auto bg-rose-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <XCircle className="w-8 h-8 text-rose-500" />
                </div>
                <h3 className="text-2xl font-bold text-rose-950 font-display">Guerra de Preços</h3>
                <p className="text-sm text-rose-900/60 mt-2 font-medium">Ciclo da Estagnação</p>
            </div>

            <ul className="space-y-6">
              {pains.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 text-slate-600 leading-relaxed group/item">
                  <div className="mt-1 p-1 bg-rose-50 rounded-full shrink-0 group-hover/item:bg-rose-100 transition-colors">
                    <XCircle className="w-4 h-4 text-rose-500" />
                  </div>
                  <span className="text-sm md:text-base font-medium">{item}</span>
                </li>
              ))}
            </ul>

            {/* Faded overlay on bottom to imply dead end (optional stylistic choice) */}
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-rose-200 to-transparent opacity-50"></div>
          </div>


          {/* Positive Side (Green/Emerald) */}
          <div className="group relative p-8 md:p-10 rounded-3xl bg-white border border-emerald-100 shadow-2xl shadow-emerald-900/10 hover:-translate-y-2 transition-all duration-500 ring-1 ring-emerald-500/5">
            {/* Badge */}
             <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1.5 bg-emerald-600 text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-lg shadow-emerald-600/20 flex items-center gap-2">
                O Novo Padrão <CheckCircle2 className="w-3 h-3" />
             </div>

            <div className="text-center mb-8 mt-2">
                <div className="w-16 h-16 mx-auto bg-emerald-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-950 font-display">Marmoraria Lucrativa</h3>
                <p className="text-sm text-emerald-700/80 mt-2 font-medium">Caminho do Crescimento</p>
            </div>

            <ul className="space-y-6">
              {benefits.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 text-slate-700 leading-relaxed group/item">
                  <div className="mt-1 p-1 bg-emerald-50 rounded-full shrink-0 group-hover/item:bg-emerald-100 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-sm md:text-base font-semibold">{item}</span>
                </li>
              ))}
            </ul>

            {/* Shine effect */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-emerald-400/10 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-32 h-32 bg-blue-400/10 blur-3xl rounded-full"></div>
            </div>
            
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-400"></div>
          </div>

        </div>

        <div className="mt-20 flex flex-col items-center">
            <div className="flex items-center gap-2 text-slate-400 text-sm mb-6 font-medium uppercase tracking-wider">
                <span>Não fique para trás</span>
                <ArrowRight className="w-4 h-4" />
            </div>
          <CTAButton />
        </div>
      </div>
    </section>
  );
};