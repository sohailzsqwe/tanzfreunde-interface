
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, Phone } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import NavLink from './navbar/NavLink';
import DropdownMenu from './navbar/DropdownMenu';
import MobileMenu from './navbar/MobileMenu';
import { navLinks } from './navbar/navData';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="text-2xl font-display font-bold text-teal-400">
              Family <span className="text-coral-300">&</span> Friends
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((item) =>
              item.dropdown && item.id ? (
                <DropdownMenu
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  items={item.items || []}
                  isActive={activeDropdown === item.id}
                  onToggle={toggleDropdown}
                  onItemClick={() => setActiveDropdown(null)}
                />
              ) : (
                <NavLink 
                  key={item.title} 
                  title={item.title} 
                  link={item.link} 
                />
              )
            )}
          </nav>

          {/* Right side buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Suche">
              <Search className="w-5 h-5" />
            </button>
            <a 
              href="tel:043211490" 
              className="flex items-center px-4 py-2 rounded-full bg-teal-400 text-white hover:bg-teal-500 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span className="font-medium">04321 - 1 49 00</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileMenu 
        isOpen={isMenuOpen}
        navLinks={navLinks}
        activeDropdown={activeDropdown}
        toggleDropdown={toggleDropdown}
        onClose={closeMenu}
      />
    </header>
  );
};

export default Navbar;
