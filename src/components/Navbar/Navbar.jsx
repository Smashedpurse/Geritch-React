import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineMenu } from "react-icons/md";
import images from '../../constants/images'
import "./Navbar.css";

const NavBar = () => {
  return (
  <nav className="app__navbar">
    <div className="app__navbar-logo">
      <img src={images.gericht} alt="app-logo"/>
    </div>
    <ul className="app__nabvar-links">
    <li className="p__opensans"> <a href="#home">Home</a></li>
    <li className="p__opensans"> <a href="#About">About</a></li>
    <li className="p__opensans"> <a href="#Menu">Menu</a></li>
    <li className="p__opensans"> <a href="#Awards">Awards</a></li>
    <li className="p__opensans"> <a href="#Contact">Contact</a></li>
    </ul>
  </nav>
  )
};

export default NavBar;
