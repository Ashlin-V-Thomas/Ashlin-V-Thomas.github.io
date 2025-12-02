import React, { useState } from 'react';
import { Tab } from '../types';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { PROFILE } from '../constants';

interface NavbarProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: Tab.ABOUT, label: 'About' },
    { id: Tab.RESUME, label: 'Resume' },
    { id: Tab.RESEARCH, label: 'Research' },
    { id: Tab.CONTRIBUTIONS, label: 'Contributions' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-stone-50/90 dark:bg-stone-950/90 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo / Name */}
        <div 
          className="cursor-pointer group" 
          onClick={() => setActiveTab(Tab.ABOUT)}
        >
          <h1 className="font-serif text-2xl font-bold text-slate-900 dark:text-stone-100 tracking-tight transition-colors">
            Ashlin V Thomas
          </h1>
          <p className="text-xs font-sans text-stone-500 dark:text-stone-400 tracking-widest uppercase group-hover:text-slate-800 dark:group-hover:text-stone-200 transition-colors">
            {PROFILE.title}
          </p>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`text-sm font-medium transition-all duration-300 relative py-1
                ${activeTab === item.id 
                  ? 'text-slate-900 dark:text-stone-100' 
                  : 'text-stone-500 dark:text-stone-400 hover:text-slate-800 dark:hover:text-stone-200'}
              `}
            >
              {item.label}
              <span className={`absolute bottom-0 left-0 w-full h-px bg-slate-900 dark:bg-stone-100 transform origin-left transition-transform duration-300 ${activeTab === item.id ? 'scale-x-100' : 'scale-x-0'}`}></span>
            </button>
          ))}
          
          <div className="w-px h-6 bg-stone-200 dark:bg-stone-800 mx-2"></div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-stone-500 hover:text-slate-900 dark:text-stone-400 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 text-stone-500 dark:text-stone-400"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          
          <button 
            className="p-2 text-slate-900 dark:text-stone-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-stone-50 dark:bg-stone-950 border-b border-stone-200 dark:border-stone-800 px-6 py-4 shadow-lg animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsOpen(false);
                }}
                className={`text-left py-2 text-lg font-serif ${activeTab === item.id ? 'text-slate-900 dark:text-stone-100 italic' : 'text-stone-500 dark:text-stone-400'}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};