import React from "react";

const educationsData = [
  {
    title: "Higher Secondary",
    description: "Government Higher Secondary School Cheyur",
    links: [
      { url: "https://schools.org.in/coimbatore/33121600307/government-higher-secondary-school-cheyur.html", text: "View" }
    ]
  },
  {
    title: "Degree",
    description: "Angel College Of Engineering and Technology Tiruppur",
    links: [
      { url: "https://angelcollege.edu.in/", text: "View" }
    ]
  },
  {
    title: "Internship",
    description: "Enhance styling and testing with the latest tools.",
    links: [
      { url: "https://github.com/sjpurusothamandeveloper", text: "View" }
    ]
  }
];

const EducationSection = () => {
  return (
    <div className="education-section">
        <h2>Education</h2>
      {educationsData.map((item, index) => (
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