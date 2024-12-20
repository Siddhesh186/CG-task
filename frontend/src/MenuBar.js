import React from 'react';
import './MenuBar.css';

const MenuBar = () => {
  return (
    <div className="menu-bar">
      <div className="logo">1MDM</div>
      <nav className="menu-links">
        <a href="/about-us">About Us</a>
        <a href="/our-story">Our Story</a>
        <a href="/sell">Sell on 1MDM</a>
        <a href="/pricing">Pricing</a>
      </nav>
      <div className="account-links">
        <a href="/my-account">My account</a>
        <a href="/contact-us">Contact Us</a>
      </div>
    </div>
  );
};

export default MenuBar;