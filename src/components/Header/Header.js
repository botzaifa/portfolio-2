import React, { useState } from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={`header ${isOpen ? 'sticky' : ''}`}>
      <div className="titles">
        <h1 className="name">
          <Link to="/">Huzaifa خان</Link>
        </h1>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className={isOpen ? 'open' : ''}></span>
        <span className={isOpen ? 'open' : ''}></span>
        <span className={isOpen ? 'open' : ''}></span>
      </div>

      <nav className={`nav-container ${isOpen ? 'show' : ''}`}>
        <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>Work</NavLink>
        <NavLink to="/self" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
        <NavLink to="/about" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>Extra</NavLink>
        <NavLink to="/resume" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>Resume</NavLink>
        {/* <NavLink to="/play" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>Play</NavLink> */}
      </nav>
    </header>
  );
}
