import React from "react";
import { TypeAnimation } from "react-type-animation";

const MainContent = () => {
  return (
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
  );
};

export default MainContent;
