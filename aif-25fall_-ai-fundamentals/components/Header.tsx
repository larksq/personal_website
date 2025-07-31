import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/80 backdrop-blur-lg border-b border-slate-800' : 'bg-transparent'}`}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="text-xl font-bold tracking-tight text-white cursor-pointer">
              AIF-25Fall
            </a>
          </div>
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-200">
            <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="hover:text-sky-400 transition-colors cursor-pointer">Home</a>
            <a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="hover:text-sky-400 transition-colors cursor-pointer">About</a>
            <a href="#schedule" onClick={(e) => handleLinkClick(e, '#schedule')} className="hover:text-sky-400 transition-colors cursor-pointer">Schedule</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;