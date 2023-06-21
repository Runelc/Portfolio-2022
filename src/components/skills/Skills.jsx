import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Design from "./Design";
import LightSpeed from "react-reveal/LightSpeed";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Kompetencer</h2>
      <span className="section__subtitle">Teknisk niveau</span>

      <div className="skills__container container grid">
        <LightSpeed left>
          <Frontend />
        </LightSpeed>
        <LightSpeed right>
          <Design />
        </LightSpeed>
      </div>
    </section>
  );
};

export default Skills;
