import React from 'react'

const Header = () => {
  return (
    <header className="header">
    <div className="logohead">Patisserie</div>
    <nav>
      <ul className="nav-links">
        <li>Home</li>
        <li>Menu</li>
        <li>Cakes</li>
        <li>Parties</li>
        <li>Contact</li>
      </ul>
    </nav>
    <button className="order-btn">Order Now</button>
  </header>
  )
}

export default Header
