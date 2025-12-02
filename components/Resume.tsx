import React from 'react';
import { EDUCATION, EXPERIENCE, AWARDS, SKILLS, LANGUAGES } from '../constants';
import { GraduationCap, Briefcase, Trophy, Code, Languages as LanguagesIcon, Download } from 'lucide-react';

export const Resume: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-16 animate-fade-in pt-8">
      
      <div className="text-center mb-12 flex flex-col items-center">
        <h2 className="font-serif text-4xl font-bold text-slate-900 dark:text-stone-100 mb-4 transition-colors">Curriculum Vitae</h2>
        <a 
          href="./assets/pdfs/AshlinVThomas_Resume.pdf"
          download="AshlinVThomas_Resume.pdf"
          className="flex items-center gap-2 px-6 py-2 bg-slate-900 dark:bg-stone-200 text-white dark:text-stone-900 rounded-full hover:bg-slate-800 dark:hover:bg-white transition-colors shadow-md group"
        >
          <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
          <span>Download Resume</span>
        </a>
      </div>

      {/* Education */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <GraduationCap className="text-slate-900 dark:text-stone-100" size={24} />
          <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-stone-100 transition-colors">Education</h3>
        </div>
        <div className="space-y-10 border-l border-stone-300 dark:border-stone-700 ml-3 pl-8 transition-colors">
          {EDUCATION.map((edu) => (
            <div key={edu.id} className="relative">
              <span className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-stone-50 dark:bg-stone-950 border-2 border-slate-900 dark:border-stone-100 transition-colors"></span>
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                <h4 className="text-xl font-bold text-slate-900 dark:text-stone-100 transition-colors">{edu.degree}</h4>
                <span className="font-mono text-sm text-stone-500 dark:text-stone-400 bg-stone-100 dark:bg-stone-900 px-2 py-1 rounded transition-colors">{edu.period}</span>
              </div>
              <p className="text-stone-600 dark:text-stone-300 leading-relaxed font-light transition-colors">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <Briefcase className="text-slate-900 dark:text-stone-100" size={24} />
          <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-stone-100 transition-colors">Research Experience</h3>
        </div>
        <div className="space-y-10 border-l border-stone-300 dark:border-stone-700 ml-3 pl-8 transition-colors">
          {EXPERIENCE.map((exp) => (
            <div key={exp.id} className="relative">
              <span className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-stone-50 dark:bg-stone-950 border-2 border-slate-900 dark:border-stone-100 transition-colors"></span>
              <h4 className="text-xl font-bold text-slate-900 dark:text-stone-100 mb-2 transition-colors">{exp.title}</h4>
              <p className="text-stone-600 dark:text-stone-300 leading-relaxed font-light transition-colors">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <Trophy className="text-slate-900 dark:text-stone-100" size={24} />
          <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-stone-100 transition-colors">Honors & Awards</h3>
        </div>
        <div className="grid grid-cols-1 gap-8">
          {AWARDS.map((award) => (
            <div key={award.id} className="flex gap-4 items-start">
               <div className="mt-2 w-2 h-2 shrink-0 rounded-full bg-slate-900 dark:bg-stone-100 transition-colors"></div>
               <div className="w-full">
                 <h4 className="text-lg font-bold text-slate-900 dark:text-stone-100 transition-colors">{award.title}</h4>
                 {award.description && (
                   <p className="text-stone-600 dark:text-stone-300 text-sm mt-2 font-light transition-colors">{award.description}</p>
                 )}
                 {award.points && (
                   <ul className="mt-2 space-y-1.5">
                     {award.points.map((point, i) => (
                       <li key={i} className="text-stone-600 dark:text-stone-300 text-sm font-light list-disc list-inside transition-colors">
                         {point}
                       </li>
                     ))}
                   </ul>
                 )}
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills & Languages */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-stone-200 dark:border-stone-800 transition-colors">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Code className="text-slate-900 dark:text-stone-100" size={24} />
            <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-stone-100 transition-colors">Technical Skills</h3>
          </div>
          <ul className="space-y-3">
            {SKILLS.map((skill, idx) => (
              <li key={idx} className="flex justify-between border-b border-stone-200 dark:border-stone-800 pb-2 transition-colors">
                <span className="font-medium text-slate-800 dark:text-stone-200">{skill.name}</span>
                <span className="text-stone-500 dark:text-stone-400 text-sm">
                  {skill.level >= 98 ? 'Expert' : skill.level > 90 ? 'Advanced' : skill.level > 80 ? 'Proficient' : 'Intermediate'}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
           <div className="flex items-center gap-3 mb-6">
            <LanguagesIcon className="text-slate-900 dark:text-stone-100" size={24} />
            <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-stone-100 transition-colors">Languages</h3>
          </div>
           <ul className="space-y-3">
            {LANGUAGES.map((lang, idx) => (
              <li key={idx} className="flex justify-between border-b border-stone-200 dark:border-stone-800 pb-2 transition-colors">
                <span className="font-medium text-slate-800 dark:text-stone-200">{lang.name}</span>
                <span className="text-stone-500 dark:text-stone-400 text-sm">
                   {lang.name === 'Malayalam' ? 'Native' : lang.name === 'English' ? 'Fluent' : (lang.level > 80 ? 'Professional' : 'Conversational')}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

    </div>
  );
};