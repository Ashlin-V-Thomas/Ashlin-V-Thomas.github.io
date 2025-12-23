import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { About } from './components/About';
import { Resume } from './components/Resume';
import { Research } from './components/Research';
import { Contributions } from './components/Contributions';
import { LorenzBackground } from './components/LorenzBackground'; // Import added
import { Tab } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.ABOUT);
  
  // Initialize theme based on system preference
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  // Apply theme class to html element
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // Scroll to top on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 font-sans text-slate-800 dark:text-stone-200 flex flex-col transition-colors duration-300 relative isolate">
      
      {/* Physics Background - renders behind everything due to -z-10 in its CSS */}
      <LorenzBackground theme={theme} />

      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        theme={theme}
        toggleTheme={toggleTheme}
      />
      
      <main className="flex-grow pt-12 pb-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {activeTab === Tab.ABOUT && <About />}
          {activeTab === Tab.RESUME && <Resume />}
          {activeTab === Tab.RESEARCH && <Research />}
          {activeTab === Tab.CONTRIBUTIONS && <Contributions />}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;