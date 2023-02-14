import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineMenu } from "react-icons/md";
import images from '../../constants/images'
import "./Navbar.css";

const NavBar = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app__logo" />
      </div>
    <ul className="app__navbar-links">
    <li className="p__opensans"><a href="#Home">Home</a></li>
        <li className="p__opensans"><a href="#abou">About</a></li>
        <li className="p__opensans"><a href="#menu">Menu</a></li>
        <li className="p__opensans"><a href="#awards">Awards</a></li>
        <li className="p__opensans"><a href="#contact">Contact</a></li>
      </ul>

    <div className="app__navbar-login">
      <a href="#login" className="p__opensans">Log In/ Register</a>
      <div />
      <a href="/" className="p__opensans">Book Table</a>
    </div>
    
  </nav>
  )
};

export default NavBar;
