import React from "react";
import { FaHome, FaEnvelope, FaInstagram, FaGithub } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul className="nav-links">
          <li><a href="#home"><FaHome /></a></li>
          <li><a href="#contact"><FaEnvelope /></a></li>
          <li><a href="https://www.instagram.com/bharath_2k5"><FaInstagram /></a></li>
          <li><a href="https://github.com/bharathkumar205"><FaGithub /></a></li>
        </ul>
        
        {/* Theme Toggle Button */}
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </nav>
  );
};

export default Navbar;
