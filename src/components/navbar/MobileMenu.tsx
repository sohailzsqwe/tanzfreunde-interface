
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Search, Phone } from 'lucide-react';

interface NavItem {
  title: string;
  link?: string;
  dropdown: boolean;
  id?: string;
  items?: { title: string; link: string }[];
}

interface MobileMenuProps {
  isOpen: boolean;
  navLinks: NavItem[];
  activeDropdown: string | null;
  toggleDropdown: (dropdown: string) => void;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  navLinks,
  activeDropdown,
  toggleDropdown,
  onClose,
}) => {
  return (
    <div
      className={`fixed inset-0 bg-white z-40 pt-20 transform transition-transform duration-300 lg:hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <nav className="container mx-auto px-4 py-6 overflow-y-auto h-full">
        <div className="space-y-4">
          {navLinks.map((item) =>
            item.dropdown && item.id ? (
              <div key={item.id}>
                <button
                  className="flex items-center justify-between w-full py-2 border-b border-gray-100"
                  onClick={() => toggleDropdown(item.id as string)}
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
                  {item.items?.map((subitem) => (
                    <Link
                      key={subitem.link}
                      to={subitem.link}
                      className="block py-2 text-gray-600 hover:text-teal-500"
                      onClick={onClose}
                    >
                      {subitem.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.title}
                to={item.link || '#'}
                className="block py-2 border-b border-gray-100 font-medium"
                onClick={onClose}
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
  );
};

export default MobileMenu;
