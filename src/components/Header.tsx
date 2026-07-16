import React, { useState } from 'react'
import { Menu , X } from 'lucide-react';

const Header = () => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="header">
    <div className="logohead">Patisserie</div>

    <nav className="desktop-nav-container">
      <ul className="nav-links">
        <li>Home</li>
        <li>Menu</li>
        <li>Cakes</li>
        <li>Parties</li>
        <li>Contact</li>
      </ul>
    </nav>

    <div className="header-actions">
    <button className="order-btn" onClick={() => alert('Order Now Clicked!')}>Order Now</button>

          <button 
          className="hamburger-container"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isMenuOpen ? <X size={24} color="#b56576" /> : <Menu size={24} color="#b56576" />}
        </button>
      </div>
   {isMenuOpen && (
        <div className="mobile-nav-overlay">
          <ul className="mobile-nav-links">
            <li onClick={() => setIsMenuOpen(false)}>Home</li>
            <li onClick={() => setIsMenuOpen(false)}>Menu</li>
            <li onClick={() => setIsMenuOpen(false)}>Cakes</li>
            <li onClick={() => setIsMenuOpen(false)}>Parties</li>
            <li onClick={() => setIsMenuOpen(false)}>Contact</li>
          </ul>
        </div>
      )}
  </header>
  )
}

export default Header
