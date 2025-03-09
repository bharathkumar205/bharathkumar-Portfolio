import React from "react";

const educationData = [
  {
    title: "HTML & CSS",
    description: "Learn the basics of structuring and styling web pages.",
    links: [
      { url: "https://developer.mozilla.org/en-US/docs/Web/HTML", text: "MDN Web Docs" },
      { url: "https://css-tricks.com/", text: "CSS Tricks" }
    ]
  },
  {
    title: "JavaScript & React",
    description: "Master modern JavaScript and React for dynamic web apps.",
    links: [
      { url: "https://javascript.info/", text: "JavaScript.info" },
      { url: "https://react.dev/", text: "React Docs" }
    ]
  },
  {
    title: "Frontend Tools",
    description: "Enhance styling and testing with the latest tools.",
    links: [
      { url: "https://tailwindcss.com/", text: "Tailwind CSS" },
      { url: "https://jestjs.io/", text: "Jest" }
    ]
  },
  {
    title: "Projects & Practice",
    description: "Improve skills by building real-world projects.",
    links: [
      { url: "https://frontendmentor.io/", text: "Frontend Mentor" },
      { url: "https://www.codewars.com/", text: "CodeWars" }
    ]
  }
];

const EducationSection = () => {
  return (
    <div className="education-section">
      {educationData.map((item, index) => (
        <div className="education-card" key={index}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          {item.links.map((link, i) => (
            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer">
              {link.text}
            </a>
          ))}
        </div>
      ))}
    </div>
  );
};

export default EducationSection;
