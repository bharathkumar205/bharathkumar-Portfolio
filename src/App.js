import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import EducationSection from "./components/EducationSection";

function App() {
  // Theme state
  const [theme, setTheme] = useState("dark");

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.body.className = savedTheme;
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
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <MainContent />
      <EducationSection />
    </>
  );
}

export default App;
