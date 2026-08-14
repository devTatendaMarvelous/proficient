import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import logoImg from '../assets/logo.jpg';

interface NavbarProps {
  onScrollTo: (id: string) => void;
}

export function Navbar({ onScrollTo }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', target: 'home' },
    { name: 'Experiences', target: 'experiences' },
    { name: 'Beyond', target: 'beyond' },
    { name: 'Gallery', target: 'gallery' },
    { name: 'About', target: 'about' },
    { name: 'Contact', target: 'contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-4 glass-panel shadow-md border-b border-white/20'
            : 'py-6 bg-gradient-to-b from-black/50 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Brand */}
          <div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => onScrollTo('home')}
          >
            <img
              src={logoImg}
              alt="Proficient Saba Escapes Logo"
              className="h-10 w-10 md:h-12 md:w-12 rounded-full border-2 border-primary/20 group-hover:border-accent transition-colors duration-300 object-cover"
            />
            <div className="flex flex-col">
              <span className={`font-heading font-bold text-lg md:text-xl tracking-wide transition-colors ${
                isScrolled ? 'text-charcoal' : 'text-white'
              }`}>
                Proficient Saba Escapes
              </span>
              <span className={`text-[10px] uppercase tracking-[0.2em] -mt-1 font-semibold ${
                isScrolled ? 'text-primary' : 'text-accent'
              }`}>
                Adventure Awaits
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => onScrollTo(item.target)}
                className={`relative text-sm font-semibold tracking-wider uppercase transition-colors py-2 cursor-pointer group ${
                  isScrolled ? 'text-charcoal hover:text-primary' : 'text-white/90 hover:text-accent'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-primary' : 'bg-accent'
                }`} />
              </button>
            ))}
          </div>

          {/* Call to Action Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => onScrollTo('contact')}
              className={`relative px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-widest shadow-md transition-all duration-300 overflow-hidden group ${
                isScrolled
                  ? 'bg-primary text-white hover:bg-primary-dark shadow-primary/20'
                  : 'bg-accent text-charcoal hover:brightness-110 shadow-accent/20'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                Request a Quote
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${
                isScrolled ? 'text-charcoal' : 'text-white'
              } hover:bg-white/10 transition-colors`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[72px] left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-b border-charcoal/10 shadow-lg lg:hidden"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onScrollTo(item.target);
                  }}
                  className="text-left font-button font-medium text-lg uppercase tracking-wider text-charcoal hover:text-primary transition-colors py-2 border-b border-charcoal/5"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onScrollTo('contact');
                }}
                className="w-full py-4 rounded-xl bg-primary text-white text-center font-button font-semibold uppercase tracking-widest text-sm shadow-md hover:bg-primary-dark active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                Request a Quote
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
