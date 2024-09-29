import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Databases from "./Databases";
import OtherTools from "./OtherTools";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        <Backend />
        <Frontend />
        <Databases />
        <OtherTools />
      </div>
    </section>
  );
};

export default Skills;
