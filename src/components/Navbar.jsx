import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
          isScrolled
            ? 'bg-[#050505]/85 backdrop-blur-xl border-b border-white/5 py-4'
            : 'bg-transparent py-8'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center z-50">
            <img
              src="/logo.png"
              alt="Fast Zone Prime Logo"
              className="h-16 md:h-20 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-12 z-50">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs uppercase tracking-[0.2em] transition-all duration-500 relative py-2 ${
                  location.pathname === link.path ? 'text-primary' : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div 
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-primary"
                  />
                )}
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:block z-50">
            <Link
              to="/contact"
              className="text-xs uppercase tracking-[0.2em] text-dark bg-primary px-6 py-3 hover:bg-white transition-colors duration-500 font-medium"
            >
              Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 text-white w-10 h-10 flex flex-col items-end justify-center gap-2 group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className={`h-[1px] bg-current transition-all duration-500 ${isMobileMenuOpen ? 'w-6 rotate-45 translate-y-[9px]' : 'w-8 group-hover:w-6'}`} />
            <span className={`h-[1px] bg-current transition-all duration-500 ${isMobileMenuOpen ? 'w-0 opacity-0' : 'w-6 group-hover:w-8'}`} />
            <span className={`h-[1px] bg-current transition-all duration-500 ${isMobileMenuOpen ? 'w-6 -rotate-45 -translate-y-[9px]' : 'w-4 group-hover:w-6'}`} />
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
            className="fixed inset-0 z-40 bg-dark flex flex-col justify-center px-6 pt-20"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550565118-3a14e8d0386f?q=80&w=2070')] bg-cover bg-center opacity-[0.05] mix-blend-overlay" />
            
            <nav className="flex flex-col gap-8 relative z-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-5xl font-heading tracking-tight transition-colors flex items-center gap-4 ${
                      location.pathname === link.path ? 'text-primary italic' : 'text-gray-400'
                    }`}
                  >
                    <span className="text-sm font-sans font-light text-primary/50 not-italic w-8">0{i + 1}</span>
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="mt-16 relative z-10"
            >
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-block border-b border-primary text-primary pb-2 text-sm uppercase tracking-widest"
              >
                Book Consultation
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
