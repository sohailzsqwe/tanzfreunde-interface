
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, Phone } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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

  const navLinks = [
    {
      title: 'Kurse',
      dropdown: true,
      id: 'courses',
      items: [
        { title: 'Kinder', link: '/kurse/kinder' },
        { title: 'Jugendliche', link: '/kurse/jugendliche' },
        { title: 'Erwachsene', link: '/kurse/erwachsene' },
        { title: 'Senioren', link: '/kurse/senioren' },
        { title: 'Spezialkurse', link: '/kurse/spezialkurse' },
      ],
    },
    {
      title: 'Tanzarten',
      dropdown: true,
      id: 'dance-styles',
      items: [
        { title: 'Discofox', link: '/tanzarten/discofox' },
        { title: 'Zumba', link: '/tanzarten/zumba' },
        { title: 'Hip Hop', link: '/tanzarten/hip-hop' },
        { title: 'Standard & Latein', link: '/tanzarten/standard-latein' },
        { title: 'Hochzeitskurse', link: '/tanzarten/hochzeitskurse' },
      ],
    },
    { title: 'Team', link: '/team', dropdown: false },
    { title: 'Räumlichkeiten', link: '/gallery', dropdown: false },
    { title: 'Angebote', link: '/angebote', dropdown: false },
    { title: 'Kontakt', link: '/kontakt', dropdown: false },
  ];

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
              item.dropdown ? (
                <div className="relative group" key={item.id}>
                  <button
                    className="flex items-center nav-link"
                    onClick={() => toggleDropdown(item.id)}
                  >
                    <span>{item.title}</span>
                    <ChevronDown
                      className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                    />
                  </button>
                  <div
                    className={`absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 origin-top min-w-[220px] ${
                      activeDropdown === item.id
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-95 pointer-events-none'
                    }`}
                  >
                    <div className="py-2">
                      {item.items.map((subitem) => (
                        <Link
                          key={subitem.link}
                          to={subitem.link}
                          className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-teal-500 transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {subitem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={item.title} to={item.link} className="nav-link">
                  {item.title}
                </Link>
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
      <div
        className={`fixed inset-0 bg-white z-40 pt-20 transform transition-transform duration-300 lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="container mx-auto px-4 py-6 overflow-y-auto h-full">
          <div className="space-y-4">
            {navLinks.map((item) =>
              item.dropdown ? (
                <div key={item.id}>
                  <button
                    className="flex items-center justify-between w-full py-2 border-b border-gray-100"
                    onClick={() => toggleDropdown(item.id)}
                  >
                    <span className="font-medium">{item.title}</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-200 ${
                        activeDropdown === item.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`pl-4 space-y-2 mt-2 transition-all duration-200 ${
                      activeDropdown === item.id ? 'block' : 'hidden'
                    }`}
                  >
                    {item.items.map((subitem) => (
                      <Link
                        key={subitem.link}
                        to={subitem.link}
                        className="block py-2 text-gray-600 hover:text-teal-500"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subitem.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.title}
                  to={item.link}
                  className="block py-2 border-b border-gray-100 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              )
            )}

            <div className="pt-4 flex flex-col space-y-3">
              <button className="flex items-center justify-center w-full px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                <Search className="w-5 h-5 mr-2" />
                <span>Kurs suchen</span>
              </button>
              <a
                href="tel:043211490"
                className="flex items-center justify-center w-full px-4 py-2 rounded-lg bg-teal-400 text-white hover:bg-teal-500 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                <span>Anrufen</span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
