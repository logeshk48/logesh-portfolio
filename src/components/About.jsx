import { useRef } from "react";
import "./About.css";
import VariableProximity from "./VariableProximity";

export default function About() {
  const containerRef = useRef(null);

  const skills = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Node.js",
    "Git",
    "Responsive Design",
    "UI/UX",
    "Animations",
    "Frontend Development"
  ];

  return (
    <section className="about" id="about">
      <div className="about-container" ref={containerRef}>
        <div className="about-badge">Get to know me</div>

        <h2 className="about-title">
          <VariableProximity
            label="About Me"
            className="about-variable-title"
            fromFontVariationSettings="'wght' 400, 'opsz' 14"
            toFontVariationSettings="'wght' 900, 'opsz' 40"
            containerRef={containerRef}
            radius={120}
            falloff="linear"
          />
        </h2>

        <p className="about-text">
          I'm Logesh, an AI-powered web developer passionate about building modern,
          responsive, and interactive web experiences. I enjoy creating clean user
          interfaces, smooth animations, and smart digital products that feel both
          professional and engaging.
        </p>

        <p className="about-subtext">
          My focus is on combining design, frontend development, and creative
          interaction to build websites that stand out and deliver a great user
          experience.
        </p>

        <div className="skills">
          {skills.map((skill, index) => (
            <span className="skill" key={index}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}