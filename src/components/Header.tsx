import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Github, Twitter } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
      style={{
        background: isScrolled 
          ? 'linear-gradient(135deg, rgba(255, 51, 102, 0.1), rgba(126, 127, 213, 0.1))'
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 text-white">
            <Sparkles className="w-6 h-6" style={{ color: '#FF3366' }} />
            <span className="text-xl font-bold tracking-tight hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#FF3366] to-[#7E7FD5] transition-all duration-300">
              FutureVision
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#FF3366] to-[#7E7FD5] transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0"
               style={{
                 background: 'linear-gradient(135deg, rgba(255, 51, 102, 0.1), rgba(126, 127, 213, 0.1))',
                 backdropFilter: 'blur(10px)',
               }}>
            <div className="px-4 py-6 space-y-4">
              <NavLinks mobile />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

const NavLinks = ({ mobile }: { mobile?: boolean }) => {
  const baseClasses = "text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#FF3366] to-[#7E7FD5] transition-all duration-300";
  const classes = mobile ? `${baseClasses} block py-2` : baseClasses;

  return (
    <>
      <a href="#features" className={classes}>Features</a>
      <a href="#about" className={classes}>About</a>
      <a href="#contact" className={classes}>Contact</a>
      <div className={`flex items-center gap-4 ${mobile ? 'mt-4' : ''}`}>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={classes}>
          <Github size={20} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={classes}>
          <Twitter size={20} />
        </a>
      </div>
    </>
  );
};

export default Header;