import React from 'react';
import { Hero } from './components/Hero';
import { AcceleratorSection } from './components/AcceleratorSection';
import { DiscoverySection } from './components/DiscoverySection';
import { ComparisonSection } from './components/ComparisonSection';
import { StatsSection } from './components/StatsSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-700 selection:bg-blue-600 selection:text-white overflow-hidden relative font-sans">
      
      {/* Main Content */}
      <div className="relative z-10">
        <nav className="w-full py-5 px-4 md:px-12 flex justify-center border-b border-slate-100 bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm">
          <span className="font-display text-2xl font-bold tracking-[0.2em] text-brand-navy">
            INPULLSE
          </span>
        </nav>

        <Hero />
        <AcceleratorSection />
        <DiscoverySection />
        <ComparisonSection />
        <StatsSection />
        <Footer />
      </div>
    </div>
  );
};

export default App;