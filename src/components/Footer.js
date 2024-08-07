import React from 'react';
import './Footer.css';

const Footer = ({ contactInfo = "Default Contact Info", socialLinks = [] }) => (
  <footer>
    <div className="contact-info">{contactInfo}</div>
    <div className="social-links">
      {socialLinks.length > 0 ? (
        socialLinks.map((link, index) => (
          <a key={index} href={link.url}>
            {link.name}
          </a>
        ))
      ) : (
        <p>No social links available.</p>
      )}
    </div>
  </footer>
);

export default Footer;
