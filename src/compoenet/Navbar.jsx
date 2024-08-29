import React, { useState } from 'react';
import './Navbar.css';  // Ensure this path is correct

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  return (
    <div className="navbar">
      <div className="navbar-top">
        <div className="promo-code">GET 10% OFF WITH CODE: ILOVEMPB</div>
      </div>
      <div className="navbar-main">
        <div className="logo">
          <img src="path-to-your-logo.png" alt="Logo" />
        </div>
        <div className="menu">
          <ul>
            <li className="menu-item" onClick={() => toggleDropdown('shop')}>
              <a href="#">Shop ▼</a>
              {dropdownOpen === 'shop' && (
                <div className="dropdown-content">
                  <div className="dropdown-column">
                    <a href="#">HOME DECOR</a>
                    <a href="#">FESTIVE DECOR</a>
                    <a href="#">URLI</a>
                    <a href="#">BRASS DECOR</a>
                    <a href="#">MARBLE DECOR</a>
                    <a href="#">LAMPS & LANTERNS</a>
                    <a href="#">CENTERPIECES</a>
                    <a href="#">CANDLES & DIYAS</a>
                    <a href="#">CUSHIONS</a>
                    <a href="#">SILVER DECOR</a>
                    <a href="#">VASTU & YANTRA</a>
                    <a href="#">TABLE LINEN</a>
                    <a href="#">TABLEWARE & SERVEWARE</a>
                  </div>
                  <div className="dropdown-column">
                    <a href="#">SALT LAMPS</a>
                    <a href="#">HEALING CRYSTALS</a>
                    <a href="#">CRYSTAL BRACELETS</a>
                    <a href="#">CRYSTAL RINGS</a>
                    <a href="#">CRYSTAL PENDANTS</a>
                    <a href="#">CRYSTAL TREES</a>
                    <a href="#">CRYSTAL SHOWPIECES</a>
                    <a href="#">SAGE</a>
                    <a href="#">ROSE QUARTZ</a>
                    <a href="#">PYRITE</a>
                    <a href="#">AMETHYST</a>
                    <a href="#">EVIL EYE</a>
                    <a href="#">FENG SHUI</a>
                  </div>
                  <div className="dropdown-column">
                    <a href="#">POOJA ROOM DECOR</a>
                    <a href="#">GOD IDOLS</a>
                    <a href="#">INCENSE</a>
                    <a href="#">POOJA THALI SETS</a>
                    <a href="#">FUMERS</a>
                    <a href="#">POOJA ESSENTIALS</a>
                    <a href="#">GANESH IDOLS</a>
                    <a href="#">KRISHNA IDOLS</a>
                    <a href="#">SHIV IDOLS</a>
                    <a href="#">GIFT BOXES</a>
                    <a href="#">CLEARANCE SALE</a>
                    <a href="#">JANMASHTAMI</a>
                    <a href="#">GANESH CHATURTHI</a>
                  </div>
                </div>
              )}
            </li>
            <li className="menu-item" onClick={() => toggleDropdown('homeDecor')}>
              <a href="#">Home Decor ▼</a>
              {dropdownOpen === 'homeDecor' && (
                <div className="dropdown-content">
                  {/* Additional Dropdown items for Home Decor */}
                </div>
              )}
            </li>
            <li className="menu-item" onClick={() => toggleDropdown('festiveDecor')}>
              <a href="#">Festive Decor ▼</a>
              {dropdownOpen === 'festiveDecor' && (
                <div className="dropdown-content">
                  {/* Additional Dropdown items for Festive Decor */}
                </div>
              )}
            </li>
            <li className="menu-item">
              <a href="#">Corporate Gifting</a>
            </li>
          </ul>
        </div>
        <div className="icons">
          <div className="icon search-icon">SEARCH</div>
          <div className="icon cart-icon">CART</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
