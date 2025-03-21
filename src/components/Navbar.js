import React from "react";
import { FaHome, FaEnvelope, FaInstagram, FaGithub } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const Navbar = ({ theme, toggleTheme, openContact }) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul className="nav-links">
          <li><a href="#home" aria-label="Home"><FaHome /></a></li>
          <li><button className="contact-btn" onClick={openContact} aria-label="Contact"><FaEnvelope /></button></li>
          <li><a href="https://www.instagram.com/bharath_2k5" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a></li>
          <li><a href="https://github.com/bharathkumar205" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a></li>
        </ul>
        
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </nav>
  );
};

export default Navbar;
