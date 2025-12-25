import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-slate-900 text-slate-400 text-center text-sm">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        <p className="font-display text-2xl text-white mb-4 tracking-[0.2em] uppercase">INPULLSE</p>
        <p className="font-serif italic text-slate-500 mb-8">Marketing de Elite para o Setor de Rochas</p>
        <div className="flex gap-6 mb-8 text-xs font-medium uppercase tracking-wide">
            <span className="hover:text-white cursor-pointer transition-colors">Instagram</span>
            <span className="hover:text-white cursor-pointer transition-colors">LinkedIn</span>
            <span className="hover:text-white cursor-pointer transition-colors">Contato</span>
        </div>
        <div className="border-t border-slate-800 w-full max-w-xs mb-8"></div>
        <p>&copy; {new Date().getFullYear()} Inpullse. Todos os direitos reservados.</p>
        <p className="mt-4 text-xs hover:text-white transition-colors cursor-pointer">Políticas de Privacidade | Termos de Uso</p>
      </div>
    </footer>
  );
};