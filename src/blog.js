import "./App.css";
import React, { useState, useEffect } from "react";
import { FaHome, FaEnvelope, FaInstagram, FaGithub, FaSun, FaMoon } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

function Blog() {
  // Theme state
  const [theme, setTheme] = useState("dark");

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.className = savedTheme;
    }
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem("theme", newTheme);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <ul className="nav-links">
            <li><a href="#home"><FaHome /></a></li>
            <li><a href="#contact"><FaEnvelope /></a></li>
            <li><a href="https://www.instagram.com/bharath_2k5"><FaInstagram /></a></li>
            <li><a href="https://github.com/bharathkumar205"><FaGithub /></a></li>
          </ul>
        
          {/* Theme Toggle Button */}
          <button className="theme-toggle-btn" onClick={toggleTheme}>
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </nav>


      {/* Main Content */}
      <div className="main-content">
        <div className="text-content">
          <h3>Hey, I’M</h3>
          <h1>BHARATH KUMAR</h1>
          <p className="typing-text">
            <TypeAnimation
              sequence={[
                "A Frontend focused Web Developer...",
                2000,
                "Building the Frontend of Websites & Web Applications...",
                2000,
                "That leads to the success of the overall project.",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </p>
        </div>
      </div>

      {/* Education Section */}
      <div className="education-section">
        <div className="education-card">
          <h3>HTML & CSS</h3>
          <p>Learn the basics of structuring and styling web pages.</p>
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">MDN Web Docs</a> | 
          <a href="https://css-tricks.com/"> CSS Tricks</a>
        </div>

        <div className="education-card">
          <h3>JavaScript & React</h3>
          <p>Master modern JavaScript and React for dynamic web apps.</p>
          <a href="https://javascript.info/">JavaScript.info</a> | 
          <a href="https://react.dev/"> React Docs</a>
        </div>

        <div className="education-card">
          <h3>Frontend Tools</h3>
          <p>Enhance styling and testing with the latest tools.</p>
          <a href="https://tailwindcss.com/">Tailwind CSS</a> | 
          <a href="https://jestjs.io/"> Jest</a>
        </div>

        <div className="education-card">
          <h3>Projects & Practice</h3>
          <p>Improve skills by building real-world projects.</p>
          <a href="https://frontendmentor.io/">Frontend Mentor</a> | 
          <a href="https://www.codewars.com/"> CodeWars</a>
        </div>
      </div>
    </>
  );
}

export default Blog;
