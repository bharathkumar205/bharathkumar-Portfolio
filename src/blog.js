import "./App.css";
import React, { useState } from "react";
import { FaHome, FaEnvelope, FaInstagram , FaGithub} from "react-icons/fa";
import profilePic from "./assets/Profile.jpg"; // Import profile image
import { TypeAnimation } from "react-type-animation"; // Import typing effect

function Blog() {
  const [showText, setShowText] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        {/*<div
          className="logo-container"
          onMouseEnter={() => setShowText(true)}
          onMouseLeave={() => setShowText(false)}
        >
          <img src={profilePic} alt="Profile" className="profile-pic" />
          {showText && <span className="logo-text">BHARATH KUMAR</span>}
        </div>
        */}
        <ul className="nav-links">
          <li>
            <a href="#home">
              <FaHome />
            </a>
          </li>
          <li>
            <a href="#contact">
              <FaEnvelope />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/bharath_2k5?igsh=N2JnZnpmenRiNWlm">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href ="https://github.com/bharathkumar205"><FaGithub/></a>
          </li>
        </ul>
      </nav>

      {/* Main Content with Background Image */}
      <div className="main-content">
        <div className="text-content">
        <h3>Hey, I’M</h3>
        <h1>BHARATH KUMAR</h1>
        <p className="typing-text">
          <TypeAnimation
            sequence={[
              "A Frontend focused Web Developer...",
              2000, // Pause for 2s
              "Building the Frontend of Websites & Web Applications...",
              2000,
              "That leads to the success of the overall project.",
              2000,
            ]}
            speed={50} // Typing speed
            repeat={2} // Run once
          />
        </p>
        </div>
      </div>
    </>
  );
}

export default Blog;
