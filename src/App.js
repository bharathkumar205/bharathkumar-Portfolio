import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import EducationSection from "./components/EducationSection";
import ContactUs from "./components/ContactUs"; // Import ContactUs Component

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
  const [showContact, setShowContact] = useState(false); // State for Contact Page

  useEffect(() => {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} openContact={() => setShowContact(true)} />
      <MainContent theme={theme} />
      <SkillsSection theme={theme} />
      <ProjectsSection theme={theme} />
      <EducationSection theme ={theme}/>

      {showContact && <ContactUs theme={theme} closeContact={() => setShowContact(false)} />}
    </>
  );
}

export default App;
