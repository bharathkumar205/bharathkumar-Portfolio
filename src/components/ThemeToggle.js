import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button className="theme-toggle-btn" onClick={toggleTheme}>
      {theme === "dark" ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeToggle;
