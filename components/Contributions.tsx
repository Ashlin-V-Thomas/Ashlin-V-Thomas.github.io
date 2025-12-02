import React from 'react';
import { CONTRIBUTIONS } from '../constants';
import { Download, Youtube, FileText, ArrowRight } from 'lucide-react';

export const Contributions: React.FC = () => {
  return (
    <div className="animate-fade-in pt-8 max-w-4xl mx-auto min-h-screen">
      <header className="mb-16 border-b border-slate-900 dark:border-stone-100 pb-6 transition-colors">
        <h2 className="text-4xl font-serif font-bold text-slate-900 dark:text-stone-100 transition-colors">Contributions</h2>
        <p className="text-stone-500 dark:text-stone-400 mt-2 transition-colors">Selected talks, projects, and academic reports.</p>
      </header>

      <div className="space-y-16">
        {CONTRIBUTIONS.map((item, index) => (
          <article key={index} className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
            
            {/* Type indicator */}
            <div className="md:col-span-2 md:text-right">
              <span className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-sm ${
                item.type === 'Talk' 
                  ? 'bg-amber-50 text-amber-900 dark:bg-amber-950/30 dark:text-amber-200' 
                  : 'bg-stone-100 text-stone-600 dark:bg-stone-900 dark:text-stone-400'
              } transition-colors`}>
                {item.type}
              </span>
            </div>

            {/* Content */}
            <div className="md:col-span-10 space-y-4">
              <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-stone-100 group-hover:text-stone-600 dark:group-hover:text-stone-300 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-slate-600 dark:text-stone-300 font-light leading-relaxed text-lg transition-colors">
                {item.abstract}
              </p>

              <div className="flex flex-wrap gap-6 pt-2">
                {item.links.map((link, idx) => {
                  const isYoutube = link.url.includes('youtu');
                  const Icon = isYoutube ? Youtube : (link.label.includes('Slides') ? FileText : Download);
                  
                  return (
                    <a 
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-slate-900 dark:text-stone-200 hover:text-stone-500 dark:hover:text-stone-400 transition-colors group/link"
                    >
                      <Icon size={18} strokeWidth={1.5} />
                      <span className="border-b border-transparent group-hover/link:border-stone-500 dark:group-hover/link:border-stone-400 transition-all">
                        {link.label}
                      </span>
                      <ArrowRight size={14} className="opacity-0 -ml-2 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all" />
                    </a>
                  );
                })}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};