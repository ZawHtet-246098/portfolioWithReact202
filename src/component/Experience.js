import React from "react";
import { useGlobalContext } from "../context";

const Experience = () => {
  const { openExperience } = useGlobalContext();
  return (
    <div className={`${openExperience ? "experience open" : "experience"} `}>
      <div className="experienceEachDiv">
        <h6>FromTo: 2020-2021</h6>
        <h5>Company: Amazon.com</h5>
        <h6>Position: Front Developer</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quibusdam
          veniam ducimus doloribus voluptatibus, harum libero corrupti excepturi
          eos saepe?
        </p>
      </div>
      <div className="experienceEachDiv">
        <h6>FromTo: 2020-2021</h6>
        <h5>Company: Amazon.com</h5>
        <h6>Position: Front Developer</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quibusdam
          veniam ducimus doloribus voluptatibus, harum libero corrupti excepturi
          eos saepe?
        </p>
      </div>
      <div className="experienceEachDiv">
        <h6>FromTo: 2020-2021</h6>
        <h5>Company: Amazon.com</h5>
        <h6>Position: Front Developer</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quibusdam
          veniam ducimus doloribus voluptatibus, harum libero corrupti excepturi
          eos saepe?
        </p>
      </div>
    </div>
  );
};

export default Experience;
