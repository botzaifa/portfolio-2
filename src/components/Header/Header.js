import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

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
        <Link to="/" onClick={() => setIsOpen(false)}>Work</Link>
        <Link to="/self" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>Extra</Link>
        <Link to="/resume" onClick={() => setIsOpen(false)}>Resume</Link>
        {/* <Link to="/play" onClick={() => setIsOpen(false)}>Play</Link> */}
      </nav>
    </header>
  );
}
