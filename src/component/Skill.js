import React from "react";

const Skill = (item) => {
  return (
    <li>
      <h5>{item.item}</h5>
      <span className="bar">
        <span className={item.item}></span>
        <span className="barEndDiv"></span>
      </span>
    </li>
  );
};

export default Skill;
