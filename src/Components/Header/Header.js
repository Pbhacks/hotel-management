import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri'; 
import './Header.css';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <nav>
        <div className="nav__bar">
          <div className="logo">
            <a href="http://culturalxchange.jimdosite.com"><img className="hmt" src="assets/logo.jpg" alt="logo" /></a>
          </div>
          <div className="nav__menu__btn" id="menu-btn" onClick={toggleMenu}>
            {isOpen ? <RiCloseLine /> : <RiMenuLine />}
          </div>
        </div>
        <ul className={`nav__links ${isOpen ? 'open' : ''}`}>

        <NavLink to="/"><li>Home</li></NavLink>
        <a href="#about"><li>About</li></a>
        <NavLink to="/ServicePage"><li>Services</li></NavLink>
        <a href="#explore"><li>Explore</li></a>
        <a href="#contact"><li>Contact</li></a>
        <NavLink to="/ProfileSettings"><li>Settings</li></NavLink>
        <a href="#contact"><li><button id="nb1">Music</button></li></a>
        
        </ul>
        <NavLink to={"/Login"}><button className="bt64" src="/Login">LOGIN</button></NavLink>
        
      </nav>
      <div className="section__container header__container" id="home">
        <p>Simple - Unique - Friendly</p>
        <h1>Make Yourself At Home<br />In Our <span>Hotel</span>.</h1>
      </div>
    </header>
    
  );
}

export default Header;
