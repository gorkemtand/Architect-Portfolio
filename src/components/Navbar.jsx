import React, { useState } from 'react';
import InstagramPng from "../images/instagram.png";
import TwitterPng from "../images/twitter.png";
import LinkedinPng from "../images/linkedin.png";
import Logo from "../images/logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="navbar-content">
        <div className='navbarTitle'>
          <img src={Logo} alt='logo'></img>
          <h1>BUZ DESIGN</h1>
        </div>

        <div className={`menu-button ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <div className={`social-buttons ${isMenuOpen ? 'show' : ''}`}>
          <a href="https://www.instagram.com/gorkem_tand" target="_blank" rel="noopener noreferrer">
            <img src={InstagramPng} alt=''></img>
          </a>
          <a href="https://twitter.com/GrkemTandgn" target="_blank" rel="noopener noreferrer">
            <img src={TwitterPng} alt=''></img>
          </a>
          <a href="https://www.linkedin.com/in/gorkem-tandogan-5408a5183/" target="_blank" rel="noopener noreferrer">
            <img src={LinkedinPng} alt=''></img>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
