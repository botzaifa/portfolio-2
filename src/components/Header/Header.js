import React from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  return (
    <header>
      <div className="titles">
        <h1 className="name">
          <Link to="/">Huzaifa Khan</Link>
        </h1>
      </div>
      <div className="nav-container">
        <Link to="/">Work</Link>
        <Link to="/about">About</Link>
        <Link to="/play">Etc.</Link>
      </div>
    </header>
  );
}
