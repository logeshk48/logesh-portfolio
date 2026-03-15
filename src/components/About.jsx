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
    "UI/UX",
    "Responsive Design",
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

        <div className="about-paragraph">
          <VariableProximity
            label="I'm Logesh, an AI-powered web developer passionate about building modern, responsive, and interactive web experiences."
            className="about-variable-text"
            fromFontVariationSettings="'wght' 400, 'opsz' 14"
            toFontVariationSettings="'wght' 650, 'opsz' 22"
            containerRef={containerRef}
            radius={60}
            falloff="linear"
          />
        </div>

        <div className="about-paragraph secondary">
          <VariableProximity
            label="I enjoy creating clean user interfaces, smooth animations, and smart digital products that feel professional, modern, and engaging."
            className="about-variable-subtext"
            fromFontVariationSettings="'wght' 400, 'opsz' 14"
            toFontVariationSettings="'wght' 600, 'opsz' 18"
            containerRef={containerRef}
            radius={65}
            falloff="linear"
          />
        </div>

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