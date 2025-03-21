
import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  title: string;
  link?: string;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ title, link, onClick }) => {
  if (!link) {
    return (
      <button className="nav-link" onClick={onClick}>
        {title}
      </button>
    );
  }
  
  return (
    <Link to={link} className="nav-link" onClick={onClick}>
      {title}
    </Link>
  );
};

export default NavLink;
