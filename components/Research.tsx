import React from 'react';
import { RESEARCH_ITEMS } from '../constants';
import { Sparkles } from 'lucide-react';

export const Research: React.FC = () => {
  return (
    <div className="animate-fade-in pt-8 min-h-screen">
      <header className="text-center mb-16 space-y-4">
        <h2 className="text-4xl font-serif font-bold text-slate-900 dark:text-stone-100 transition-colors">Research Interests</h2>
        <p className="text-stone-500 dark:text-stone-400 max-w-xl mx-auto italic transition-colors">
          Exploring the frontiers of quantum many body and condensed matter physics through a blend of theoretical analysis and computational simulations.
        </p>
      </header>

      {/* Elegant Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {RESEARCH_ITEMS.map((item, index) => (
          <div
            key={index}
            className="group flex flex-col bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
          >
            {/* Subtle corner decoration */}
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-10 transition-opacity">
              <Sparkles size={40} className="text-slate-900 dark:text-stone-100" />
            </div>

            <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-stone-100 leading-snug mb-4 group-hover:text-stone-600 dark:group-hover:text-stone-300 transition-colors">
              {item.title}
            </h3>
            
            <div className="w-12 h-px bg-slate-900 dark:bg-stone-100 mb-4 group-hover:w-full transition-all duration-500 opacity-20"></div>

            <p className="text-stone-600 dark:text-stone-300 font-light leading-relaxed transition-colors">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};