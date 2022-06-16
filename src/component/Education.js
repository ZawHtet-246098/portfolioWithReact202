import React from "react";
import { useGlobalContext } from "../context";

const Education = () => {
  const { openExperience } = useGlobalContext();
  return (
    // <div className="education">
    <div className={`${openExperience ? "education" : "education open"} `}>
      <div className="timeline my-2 mt-4">
        <div className="timelineFirstDiv ps-5 pb-5">
          <h5 className="py-1">2020-2021</h5>
          <h3>Electrical Power Engineering</h3>
          <h3 className="py-1">Technology University Hmawbi</h3>
          <p>
            Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
            admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis
            iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto
            primis ea eam.
          </p>
        </div>
        <div className="timelineSecondDiv ps-5">
          <h5 className="py-1">2021-2022</h5>
          <h3 className="py-sm-1">FrontEnd Developer</h3>
          <h3 className="py-1">
            FCC / YT / Coding Addict YTC / Udemy courses{" "}
          </h3>
          <p>
            Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
            admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis
            iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto
            primis ea eam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
