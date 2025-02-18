import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Github, Twitter } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 20);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header 
      className={`fixed w-40 top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        background: isScrolled 
          ? 'linear-gradient(135deg, rgba(255, 51, 102, 0.1), rgba(126, 127, 213, 0.1))'
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        width: '70%', // Set width to 70%
        margin: '20px auto 0', // Add top margin and center the header
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
      <a href="https://www.superflex.ai/" className={classes}>Features</a>
      <a href="https://www.superflex.ai/" className={classes}>About</a>
      <a href="https://github.com/manideep1428" className={classes}>Contact</a>
      <div className={`flex items-center gap-4 ${mobile ? 'mt-4' : ''}`}>
        <a href="https://github.com/manideep1428/superflex_hackathon" target="_blank" rel="noopener noreferrer" className={classes}>
          <Github size={20} />
        </a>
        <a href="https://twitter.com/manideep1428" target="_blank" rel="noopener noreferrer" className={classes}>
          <Twitter size={20} />
        </a>
      </div>
    </>
  );
};

export default Header;