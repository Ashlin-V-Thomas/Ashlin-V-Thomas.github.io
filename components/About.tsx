import React from 'react';
import { PROFILE, ABOUT_TEXT, INTERESTS, EDUCATION, EXPERIENCE } from '../constants';
import { Mail, MapPin, ExternalLink, GraduationCap, Briefcase, Calendar } from 'lucide-react';

export const About: React.FC = () => {
  // Merge and sort data manually to create the "Trajectory"
  const timelineData = [
    { 
      type: 'edu', 
      title: "Integrated MSc. (Physics)",
      place: "NISER Bhubaneswar",
      year: "2022 - Present",
      id: 'e1' 
    },
    { 
      type: 'work', 
      title: "Research Intern",
      place: "Max Planck Institute for Physics of Complex Systems",
      year: "2025",
      id: 'ex1' 
    },
    { 
      type: 'work', 
      title: "Research Intern",
      place: "Raman Research Institute",
      year: "2024",
      id: 'ex2' 
    },
    { 
      type: 'work', 
      title: "Research Intern",
      place: "IISER Pune",
      year: "Winter 2023",
      id: 'ex4' 
    },
    { 
      type: 'work', 
      title: "Research Intern",
      place: "NISER Bhubaneswar",
      year: "Summer 2023",
      id: 'ex4' 
    },
    { 
      type: 'edu', 
      title: "Higher Secondary (AISSCE)",
      place: "Citadel Residential School",
      year: "2008 - 2022",
      id: 'e2' 
    },
  ];

  return (
    <div className="space-y-24 animate-fade-in pb-12">
      
      {/* ----------------HERO SECTION---------------- */}
      <section className="flex flex-col-reverse md:flex-row gap-12 items-center md:items-start pt-8">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <div className="space-y-2">
             <h2 className="font-serif font-bold text-slate-900 dark:text-stone-100 leading-tight transition-colors">
              <span className="block text-3xl md:text-4xl mb-1.5">
                Hello, I'm
              </span>
              <span className="block text-4xl md:text-5xl text-stone-600 dark:text-stone-300">
                Ashlin V Thomas
              </span>
            </h2>
            <p className="text-lg text-stone-500 dark:text-stone-400 font-medium tracking-wide uppercase transition-colors">
              {PROFILE.title}
            </p>
          </div>
          
          <p className="text-lg text-slate-700 dark:text-stone-300 leading-relaxed max-w-2xl transition-colors">
            {ABOUT_TEXT[0]}
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
            <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-stone-200 text-white dark:text-stone-900 rounded-full hover:bg-slate-800 dark:hover:bg-white transition-colors shadow-lg shadow-stone-200 dark:shadow-none">
              <Mail size={18} />
              <span>Contact Me</span>
            </a>
            <a href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 text-slate-900 dark:text-stone-100 rounded-full hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors">
              <ExternalLink size={18} />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-2 text-stone-500 dark:text-stone-400 text-sm pt-2 transition-colors">
            <MapPin size={16} />
            {PROFILE.location}
          </div>
        </div>

        <div className="shrink-0 relative group">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-stone-100 dark:bg-stone-800 border-4 border-white dark:border-stone-700 shadow-xl flex items-center justify-center relative z-10 group-hover:bg-stone-50 dark:group-hover:bg-stone-700 transition-colors duration-500 overflow-hidden">
             <img 
               src={PROFILE.image} 
               alt={PROFILE.name} 
               className="w-full h-full object-cover"
             />
          </div>
          {/* Decorative circle behind */}
          <div className="absolute inset-0 bg-stone-200 dark:bg-stone-800 rounded-full transform translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
        </div>
      </section>

      {/* ----------------BIOGRAPHY---------------- */}
      <section className="max-w-3xl mx-auto text-center space-y-6">
        <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-stone-100 transition-colors">My Journey</h3>
        <p className="text-slate-700 dark:text-stone-300 leading-loose text-lg font-light transition-colors">
          {ABOUT_TEXT[1]}
        </p>
      </section>

      {/* ----------------TRAJECTORY (MINIMALIST)---------------- */}
      <section className="max-w-3xl mx-auto px-4 pt-8">
        <div className="flex items-center justify-center gap-3 mb-12">
            <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-stone-100 transition-colors">Time Evolution: Trajectory in Real Space</h3>
        </div>

        <div className="relative border-l-2 border-stone-200 dark:border-stone-800 ml-6 md:ml-12 space-y-10">
            {timelineData.map((item, index) => (
                <div key={index} className="relative pl-8 md:pl-12 group">
                    {/* Timeline Dot */}
                    <div className={`
                        absolute -left-[9px] top-1 w-4 h-4 rounded-full border-4 border-white dark:border-stone-950 transition-all duration-300
                        ${index === 0 ? 'bg-emerald-500 scale-125' : 'bg-stone-300 dark:bg-stone-600 group-hover:bg-slate-900 dark:group-hover:bg-stone-100'}
                    `}>
                        {index === 0 && <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75"></span>}
                    </div>

                    {/* Content */}
                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-8">
                        <div>
                            <h4 className="font-bold text-lg text-slate-900 dark:text-stone-100 leading-none group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                                {item.place}
                            </h4>
                            <span className="text-stone-500 dark:text-stone-400 text-sm font-medium mt-1 block">
                                {item.title}
                            </span>
                        </div>
                        <div className="flex items-center gap-2 text-stone-400 dark:text-stone-500 font-mono text-sm shrink-0">
                            <Calendar size={14} />
                            {item.year}
                        </div>
                    </div>
                </div>
            ))}
            
            {/* Fade out at the bottom */}
            <div className="absolute -bottom-8 left-0 w-1 h-24 bg-gradient-to-t from-stone-50 dark:from-stone-950 to-transparent -ml-[2px]"></div>
        </div>
      </section>

      {/* ----------------INTERESTS---------------- */}
      <section>
        <div className="flex items-center gap-4 mb-8 pt-12">
          <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-stone-100 transition-colors">Interests & Hobbies</h3>
          <div className="h-px bg-stone-200 dark:bg-stone-800 flex-1 transition-colors"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {INTERESTS.map((item, index) => (
            <div key={index} className="p-8 bg-white dark:bg-stone-900 border border-stone-100 dark:border-stone-800 shadow-sm hover:shadow-md transition-all">
              <h4 className="font-serif text-xl font-bold text-slate-900 dark:text-stone-100 mb-3 transition-colors">{item.title}</h4>
              <p className="text-stone-600 dark:text-stone-400 font-light leading-relaxed transition-colors">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};