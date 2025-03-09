import React from "react";
//import "./ProjectsSection.css"; // Create a CSS file for styling

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my skills and projects.",
    link: "https://bharathkumar205.github.io/bharathkumar-Portfolio/"
  },
  {
    title: "React Weather App",
    description: "A simple weather application built using React and OpenWeather API.",
    link: "https://github.com/bharathkumar205/weather-app"
  },
  {
    title: "E-Commerce Website",
    description: "An e-commerce website using React, Redux, and Firebase.",
    link: "https://github.com/bharathkumar205/ecommerce"
  }
];

const ProjectsSection = () => {
  return (
    <div className="projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
