import React from 'react';
import { PROFILE } from '../constants';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 py-12 mt-20 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="font-serif text-slate-900 dark:text-stone-100 text-lg transition-colors">Ashlin V Thomas</p>
          <p className="text-stone-500 dark:text-stone-400 text-sm transition-colors">National Institute of Science Education and Research</p>
        </div>
        
        <div className="flex items-center gap-6">
          <a href={`mailto:${PROFILE.email}`} className="text-stone-400 hover:text-slate-900 dark:hover:text-stone-100 transition-colors">
            <Mail size={20} />
          </a>
          <a href={PROFILE.socials.github} target="_blank" rel="noreferrer" className="text-stone-400 hover:text-slate-900 dark:hover:text-stone-100 transition-colors">
            <Github size={20} />
          </a>
          <a href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer" className="text-stone-400 hover:text-slate-900 dark:hover:text-stone-100 transition-colors">
            <Linkedin size={20} />
          </a>
        </div>
        
        <div className="text-stone-400 text-xs">
          © 2023 Ashlin V Thomas
        </div>
      </div>
    </footer>
  );
};