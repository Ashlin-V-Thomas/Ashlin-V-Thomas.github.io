import React, { useState } from 'react';
import { Mail, Calendar, MapPin, Github, Linkedin, ChevronDown, BookOpen, User, FileText, Layers, ExternalLink } from 'lucide-react';
import { PROFILE } from '../constants';
import { Tab } from '../types';

interface SidebarProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: Tab.ABOUT, label: 'About', icon: User },
    { id: Tab.RESUME, label: 'Resume', icon: FileText },
    { id: Tab.RESEARCH, label: 'Research Interests', icon: BookOpen },
    { id: Tab.CONTRIBUTIONS, label: 'Contributions', icon: Layers },
  ];

  return (
    <aside className="lg:col-span-3 col-span-12 h-fit lg:sticky lg:top-8 z-20">
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden relative">
        
        {/* Profile Header */}
        <div className="p-8 flex flex-col items-center text-center bg-gradient-to-br from-slate-50 to-white">
          <figure className="w-32 h-32 rounded-2xl overflow-hidden shadow-md mb-6 border-4 border-white ring-1 ring-slate-200">
            <img 
              src={PROFILE.image} 
              alt={PROFILE.name} 
              className="w-full h-full object-cover"
            />
          </figure>
          <h1 className="text-2xl font-serif font-bold text-slate-900 mb-2">{PROFILE.name}</h1>
          <span className="px-3 py-1 bg-academic-100 text-academic-800 text-xs uppercase tracking-wider font-semibold rounded-full mb-6">
            {PROFILE.title}
          </span>
          
          {/* Mobile Toggle */}
          <button 
            className="lg:hidden absolute top-4 right-4 p-2 bg-slate-100 rounded-lg text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <ChevronDown className={`transform transition-transform ${isMobileMenuOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Contact Details (Collapsible on Mobile) */}
        <div className={`px-8 pb-8 space-y-4 border-t border-slate-100 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'block' : 'hidden lg:block'}`}>
          <div className="pt-6 space-y-4">
            <div className="flex items-start gap-4 group">
              <div className="p-2.5 bg-slate-50 text-academic-accent rounded-lg shadow-sm group-hover:bg-academic-accent group-hover:text-white transition-colors">
                <Mail size={18} />
              </div>
              <div className="text-sm">
                <p className="text-slate-400 text-xs font-medium uppercase tracking-wide mb-1">Email</p>
                <a href={`mailto:${PROFILE.email}`} className="text-slate-700 hover:text-academic-accent break-all transition-colors">{PROFILE.email}</a>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="p-2.5 bg-slate-50 text-academic-accent rounded-lg shadow-sm group-hover:bg-academic-accent group-hover:text-white transition-colors">
                <Calendar size={18} />
              </div>
              <div className="text-sm">
                <p className="text-slate-400 text-xs font-medium uppercase tracking-wide mb-1">Birthday</p>
                <time className="text-slate-700">{PROFILE.birthday}</time>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="p-2.5 bg-slate-50 text-academic-accent rounded-lg shadow-sm group-hover:bg-academic-accent group-hover:text-white transition-colors">
                <MapPin size={18} />
              </div>
              <div className="text-sm">
                <p className="text-slate-400 text-xs font-medium uppercase tracking-wide mb-1">Location</p>
                <address className="text-slate-700 not-italic">{PROFILE.location}</address>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-100 my-6"></div>

          <div className="flex justify-center gap-4">
            <a href={PROFILE.socials.github} target="_blank" rel="noreferrer" className="p-2 text-slate-500 hover:text-slate-900 transition-colors">
              <Github size={20} />
            </a>
            <a href={PROFILE.socials.twitter} target="_blank" rel="noreferrer" className="p-2 text-slate-500 hover:text-sky-500 transition-colors">
              <ExternalLink size={20} /> {/* X icon replacement */}
            </a>
            <a href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer" className="p-2 text-slate-500 hover:text-blue-700 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Menu (Desktop Sidebar Mode) */}
      <nav className="hidden lg:block mt-8 bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden p-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                  activeTab === item.id
                    ? 'bg-academic-accent text-white shadow-md'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <item.icon size={18} />
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};