import React from 'react';
import './Header.css'; // Import the CSS file

const Header = ({ logo = "Default Logo", navLinks = [] }) => (
  <header>
    <div className="logo">{logo}</div>
    <nav>
      <ul>
        {navLinks.map((link, index) => (
          <li key={index}>{link}</li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;
