import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navigation">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/add" className="nav-link">Add Guest</Link>
    </nav>
  );
}

export default Header;
