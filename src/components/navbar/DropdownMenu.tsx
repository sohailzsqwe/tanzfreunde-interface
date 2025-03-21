
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface DropdownItem {
  title: string;
  link: string;
}

interface DropdownMenuProps {
  title: string;
  items: DropdownItem[];
  id: string;
  isActive: boolean;
  onToggle: (id: string) => void;
  onItemClick?: () => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ 
  title, 
  items, 
  id, 
  isActive, 
  onToggle,
  onItemClick 
}) => {
  return (
    <div className="relative group">
      <button
        className="flex items-center nav-link"
        onClick={() => onToggle(id)}
      >
        <span>{title}</span>
        <ChevronDown
          className={`ml-1 w-4 h-4 transition-transform duration-200 ${
            isActive ? 'rotate-180' : 'group-hover:rotate-180'
          }`}
        />
      </button>
      <div
        className={`absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 origin-top min-w-[220px] ${
          isActive
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <div className="py-2">
          {items.map((item) => (
            <Link
              key={item.link}
              to={item.link}
              className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-teal-500 transition-colors"
              onClick={onItemClick}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
