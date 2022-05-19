import { red } from "@mui/material/colors";
import React from "react";
import { useGlobalContext } from "../context";

import Education from "./Education";
import Experience from "./Experience";
import Skill from "./Skill";

const html = "HTML";
const css = "CSS / SASS / BOOTSTRAP";
const javascript = "JAVASCRIPT";
const react = "REACT";
const redux = "REDUX / REDUX TOOLKIT";
const nodejs = "NodeJS";
const express = "Express";
const mongodb = "MongoDB";

const About = () => {
  const { openExperience, setOpenExperience, clickEducation, clickExperience } =
    useGlobalContext();
  return (
    <div className="about pt-5" id="about">
      <div data-aos="zoom-in" className="aboutIntro text-center container">
        <h1
          style={{
            color: "cyan",
            animation: "heartbeat 1.5s ease-in-out infinite both",
          }}
          className="p-3"
        >
          About Me<span className="titleSpan about"></span>
        </h1>
        <p>
          I studied web developement programming from FCC,YouTube(especially
          from coding addict and FCC) and the books written by Sir.Ei Maung by
          myself. I took 5 months for frontend development and now i keep
          learning backend development.
        </p>
      </div>
      <div className="twoSectionOfAbout d-lg-flex">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="aboutSkillSection col-12 col-md-8 col-lg-6 mx-auto"
        >
          <div className="frontendSkill p-lg-5 p-md-2 p-5 pb-0">
            <h4 style={{ color: "cyan" }} className="py-2">
              Front End Skill
            </h4>
            <ul className="skill list-unstyled">
              {<Skill item={html} />}
              {<Skill item={css} />}
              {<Skill item={javascript} />}
              {<Skill item={react} />}
              {<Skill item={redux} />}
            </ul>
          </div>
          <div className="backendSkill px-lg-5 p-md-2 px-5 pt-5">
            <h4 className="py-2">Back End Skill</h4>
            <ul className="skill list-unstyled">
              {<Skill item={nodejs} />}
              {<Skill item={express} />}
              {<Skill item={mongodb} />}
            </ul>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="educationAndExperienceSection col-12 col-md-8 col-lg-6 mx-auto p-lg-5 px-4  pe-lg-3 ps-lg-0"
        >
          <div className="educationAndExperienceButtons">
            <button className="educationbtn" onClick={() => clickEducation()}>
              Education
            </button>
            <button className="experiencebtn" onClick={() => clickExperience()}>
              Experience
            </button>
            <span
              className={`${
                openExperience ? "forunderline move" : "forunderline"
              } `}
            ></span>
          </div>
          <Education />
          <Experience />
          {/* <div>{openExperience ? <Experience /> : <Education />}</div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
